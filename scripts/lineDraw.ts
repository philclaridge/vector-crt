// Copyright 2024, Philip Claridge
// SPDX-License-Identifier: MIT

// TypeScript code
import {DigitalFilter} from "./filters.js";
import {PointOnOff} from "./vectorRomCDC6602.js";

type Point = [number, number];
type FilteredPoint = [number, number, number];

// type VectorData = Record<string, VectorTriplet[]>;


export function convertRomToDrawnVectorSegments(characterData: PointOnOff[]): Point[][] {
    const lines: Point[][] = [];
    let currentLine: Point[] = [];
    let isDrawing = false;

    for (const [x, y, beamOn] of characterData) {
        if (beamOn) {
            currentLine.push([x, y]);
            isDrawing = true;
        } else if (isDrawing) {
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

export function simplifyLines(lines: Point[][]): Point[][] {
    return lines.map(simplifyLine);
}

function simplifyLine(line: Point[]): Point[] {
    if (line.length <= 2) return line;

    const simplified: Point[] = [line[0]];
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

function isCollinear(p1: Point, p2: Point, p3: Point): boolean {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;

    return Math.abs((y2 - y1) * (x3 - x2) - (y3 - y2) * (x2 - x1)) < 1e-10;
}

export function repeatCRTData(inputData: PointOnOff[], repetitions: number = 10): FilteredPoint[] {
    return inputData.flatMap(point => {
        const [x, y, beam] = point;
        const repeatedPoint: FilteredPoint = [x, y, beam ? 1 : 0]; // Convert boolean to 1 or 0
        return Array(repetitions).fill(repeatedPoint);
    });
}

export function applyFilters(
    inputData: FilteredPoint[],
    xFilter: DigitalFilter,
    yFilter: DigitalFilter,
    beamFilter: DigitalFilter
): FilteredPoint[] {
    return inputData.map((point, index) => {
        const [x, y, beam] = point;

        let filteredX, filteredY, filteredBeam;

        if (index === 0) {
            filteredX = xFilter.applyFirst(x);
            filteredY = yFilter.applyFirst(y);
            filteredBeam = beamFilter.applyFirst(beam);
        } else {
            filteredX = xFilter.apply(x);
            filteredY = yFilter.apply(y);
            filteredBeam = beamFilter.apply(beam);
        }

        return [filteredX, filteredY, filteredBeam];
    });
}


function isPathClosed(path: Point[]): boolean {
    if (path.length < 3) return false;
    const [startX, startY] = path[0];
    const [endX, endY] = path[path.length - 1];
    return Math.abs(startX - endX) < 0.01 && Math.abs(startY - endY) < 0.01;
}

function convertVectorToPixelLocation(vectorLocation: Point, pixelsPerVectorStep: number): Point {
    // Center drawing on correct sub pixels
    const [x, y] = vectorLocation;
    return [
        (x * pixelsPerVectorStep) + (pixelsPerVectorStep / 2),
        (y * pixelsPerVectorStep) + (pixelsPerVectorStep / 2)
    ] as Point;
}

function drawVectorUsingCanvas(context2D: CanvasRenderingContext2D,
                               xStartPixel: number,
                               yStartPixel: number,
                               strokeStyle: string,
                               lineWidthPixel: number,
                               lineCap: "butt" | "round" | "square",
                               lineJoin: "round" | "bevel" | "miter",
                               line: Point[],
                               pixelsPerVectorStep: number) {

    const isClosedPath = isPathClosed(line)

    context2D.beginPath();
    context2D.strokeStyle = strokeStyle;
    context2D.lineWidth = lineWidthPixel;
    context2D.lineCap = lineCap;
    context2D.lineJoin = lineJoin;

    // Assumes origin at top left of bitmap
    for (let i = 0; i < line.length; i++) {

        const [x, y] = convertVectorToPixelLocation(line[i], pixelsPerVectorStep);
        const scaledX = xStartPixel + x;
        const scaledY = yStartPixel - y;

        if (i === 0) {
            context2D.moveTo(scaledX, scaledY);
        } else if ((i < (line.length - 1)) || !isClosedPath) {
            context2D.lineTo(scaledX, scaledY);
        }
    }

    if (isClosedPath) {
        context2D.closePath();
    }

    context2D.stroke();
}


export function drawVectorsUsingCanvas(context2D: CanvasRenderingContext2D,
                                       xStartPixel: number,
                                       yStartPixel: number,
                                       strokeStyle: string,
                                       lineWidthPixel: number,
                                       lineCap: "butt" | "round" | "square",
                                       lineJoin: "round" | "bevel" | "miter",
                                       lines: Point[][],
                                       pixelsPerVectorStep: number) {
    for (const line of lines) {
        drawVectorUsingCanvas(context2D, xStartPixel, yStartPixel, strokeStyle, lineWidthPixel, lineCap,
            lineJoin, line, pixelsPerVectorStep)
    }
}

