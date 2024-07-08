// Copyright 2024, Philip Claridge
// SPDX-License-Identifier: MIT
// type VectorData = Record<string, VectorTriplet[]>;
export function convertRomToDrawnVectorSegments(characterData) {
    const lines = [];
    let currentLine = [];
    let isDrawing = false;
    for (const [x, y, beamOn] of characterData) {
        if (beamOn) {
            currentLine.push([x, y]);
            isDrawing = true;
        }
        else if (isDrawing) {
            if (currentLine.length > 0) {
                lines.push(currentLine);
                currentLine = [];
            }
            isDrawing = false;
        }
    }
    if (currentLine.length > 0) {
        lines.push(currentLine);
    }
    return lines;
}
export function simplifyLines(lines) {
    return lines.map(simplifyLine);
}
function simplifyLine(line) {
    if (line.length <= 2)
        return line;
    const simplified = [line[0]];
    let i = 0;
    while (i < line.length - 2) {
        let j = i + 2;
        while (j < line.length && isCollinear(line[i], line[j], line[j - 1])) {
            j++;
        }
        simplified.push(line[j - 1]);
        i = j - 1;
    }
    if (i < line.length - 1) {
        simplified.push(line[line.length - 1]);
    }
    return simplified;
}
function isCollinear(p1, p2, p3) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;
    return Math.abs((y2 - y1) * (x3 - x2) - (y3 - y2) * (x2 - x1)) < 1e-10;
}
function isPathClosed(path) {
    if (path.length < 3)
        return false;
    const [startX, startY] = path[0];
    const [endX, endY] = path[path.length - 1];
    return Math.abs(startX - endX) < 0.01 && Math.abs(startY - endY) < 0.01;
}
function pointVectorStepsToPixelLocation(stepLocations, pixelsPerVectorStep) {
    // Center drawing on correct sub pixels
    const xPixelOffset = pixelsPerVectorStep / 2;
    const yPixelOffset = pixelsPerVectorStep / 2;
    return stepLocations.map((location) => {
        const [x, y] = location;
        return [(x * pixelsPerVectorStep) + xPixelOffset, 0 - (y * pixelsPerVectorStep) - yPixelOffset];
    });
}
export function drawVectorUsingCanvas(context2D, xStartPixel, yStartPixel, strokeStyle, lineWidthPixel, lineCap, lineJoin, line, pixelsPerVectorStep) {
    const isClosedPath = isPathClosed(line);
    context2D.beginPath();
    context2D.strokeStyle = strokeStyle;
    context2D.lineWidth = lineWidthPixel;
    context2D.lineCap = lineCap;
    context2D.lineJoin = lineJoin;
    // Center drawing on correct sub pixels
    const xPixelOffset = pixelsPerVectorStep / 2;
    const yPixelOffset = pixelsPerVectorStep / 2;
    // Assumes origin at top left of bitmap
    for (let i = 0; i < line.length; i++) {
        const [x, y] = line[i];
        const scaledX = xStartPixel + (x * pixelsPerVectorStep) + xPixelOffset;
        const scaledY = yStartPixel - (y * pixelsPerVectorStep) - yPixelOffset;
        if (i === 0) {
            context2D.moveTo(scaledX, scaledY);
        }
        else if ((i < (line.length - 1)) || !isClosedPath) {
            context2D.lineTo(scaledX, scaledY);
        }
    }
    if (isClosedPath) {
        context2D.closePath();
    }
    context2D.stroke();
}
/*function plotCharacter(ctx: CanvasRenderingContext2D, character: string, vectorData: VectorData, x: number, y: number, scale: number = 1) {
    const processedData = processVectorData(vectorData[character]);
    const simplifiedData = simplifyLines(processedData);

    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    for (const line of simplifiedData) {
        const isClosedPath = isPathClosed(line);

        ctx.beginPath();
        ctx.moveTo(line[0][0], line[0][1]);

        for (let i = 1; i < line.length; i++) {
            ctx.lineTo(line[i][0], line[i][1]);
        }

        if (isClosedPath) {
            ctx.closePath();
            ctx.stroke();
        } else {
            ctx.stroke();
        }
    }

    ctx.restore();

    // Print intermediate results
    printResults(character, processedData, simplifiedData);
}*/
export function drawCharacterPathUsingCanvas(context2D, xStartPixel, yStartPixel, strokeStyle, lineWidthPixel, lineCap, lineJoin, charData, pixelsPerVectorStep) {
    context2D.beginPath();
    context2D.strokeStyle = strokeStyle;
    context2D.lineWidth = lineWidthPixel;
    context2D.lineCap = lineCap;
    context2D.lineJoin = lineJoin;
    // Center drawing on correct sub pixels
    const xPixelOffset = pixelsPerVectorStep / 2;
    const yPixelOffset = pixelsPerVectorStep / 2;
    // Assumes origin at top left of bitmap
    for (let i = 0; i < charData.length; i++) {
        const [x, y, draw] = charData[i];
        const scaledX = xStartPixel + (x * pixelsPerVectorStep) + xPixelOffset;
        const scaledY = yStartPixel - (y * pixelsPerVectorStep) - yPixelOffset;
        if (i === 0 || !draw) {
            context2D.moveTo(scaledX, scaledY);
        }
        else {
            context2D.lineTo(scaledX, scaledY);
        }
    }
    context2D.stroke();
}
//# sourceMappingURL=lineDraw.js.map