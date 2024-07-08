// Copyright 2024, Philip Claridge
// SPDX-License-Identifier: MIT
import { generateCdcCheckTable, vectorCharacterRomCDC6602 } from './vectorRomCDC6602.js';
import { convertRomToDrawnVectorSegments, drawCharacterPathUsingCanvas, simplifyLines } from "./lineDraw.js";
const bitmapCanvas = document.getElementById('bitmapCanvas');
const bitmapCanvasContext = bitmapCanvas.getContext('2d', { willReadFrequently: true });
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
const characterSelect = document.getElementById('characterSelect');
const pixelsPerVectorStepSlider = document.getElementById('scaleFactorSlider');
const pixelsPerVectorStepValue = document.getElementById('scaleFactorValue');
const borderWidthSlider = document.getElementById('borderWidthSlider');
const borderWidthValue = document.getElementById('borderWidthValue');
const lineWidthSlider = document.getElementById('lineWidthSlider');
const lineWidthValue = document.getElementById('lineWidthValue');
const lineCapSelect = document.getElementById('lineCapSelect');
const lineJoinSelect = document.getElementById('lineJoinSelect');
const drawPixelReferenceCheckerboardToggle = document.getElementById('drawPixelReferenceCheckerboardToggle');
const lineAlphaSelect = document.getElementById('lineAlphaSelect');
const redrawButton = document.getElementById('redrawButton');
const checkTableContainerContent = document.getElementById('checkTableContainerContent');
let pixelsPerVectorStep;
let strokeStyle;
let lineWidthPixels;
let borderWidthVectorSteps;
let lineCap;
let lineJoin;
let displayZoomFactor;
let drawPixelReferenceCheckerboard;
let canvasSizeVectorDots = 7;
function readAllControls() {
    pixelsPerVectorStep = parseFloat(pixelsPerVectorStepSlider.value);
    strokeStyle = `rgba(0, 0, 0, ${lineAlphaSelect.value})`;
    lineWidthPixels = parseFloat(lineWidthSlider.value);
    borderWidthVectorSteps = parseFloat(borderWidthSlider.value);
    lineCap = lineCapSelect.value;
    lineJoin = lineJoinSelect.value;
    drawPixelReferenceCheckerboard = drawPixelReferenceCheckerboardToggle.checked;
    displayZoomFactor = parseInt(sizeSlider.value);
    pixelsPerVectorStepValue.textContent = `${pixelsPerVectorStepSlider.value} px`;
    lineWidthValue.textContent = `${lineWidthSlider.value} px`;
    borderWidthValue.textContent = `${borderWidthSlider.value} step`;
    sizeValue.textContent = `${displayZoomFactor}x`;
}
function updateCanvasSize() {
    const canvasSize = (canvasSizeVectorDots * pixelsPerVectorStep) + (pixelsPerVectorStep * borderWidthVectorSteps * 2);
    bitmapCanvas.width = canvasSize;
    bitmapCanvas.height = canvasSize;
}
function drawCheckerboard() {
    const canvasWidth = bitmapCanvas.width;
    const canvasHeight = bitmapCanvas.height;
    for (let y = 0; y < canvasHeight; y++) {
        for (let x = 0; x < canvasWidth; x++) {
            bitmapCanvasContext.fillStyle = (x + y) % 2 === 0 ? 'white' : 'rgb(230, 230, 230)';
            bitmapCanvasContext.fillRect(x, y, 1, 1);
        }
    }
}
function drawCharacter() {
    const character = characterSelect.value;
    let characterFromVectorCharacterRomCDC6602 = vectorCharacterRomCDC6602[character];
    drawCharacterPathUsingCanvas(bitmapCanvasContext, pixelsPerVectorStep * borderWidthVectorSteps, (canvasSizeVectorDots * pixelsPerVectorStep) + (pixelsPerVectorStep * borderWidthVectorSteps), strokeStyle, lineWidthPixels, lineCap, lineJoin, characterFromVectorCharacterRomCDC6602, pixelsPerVectorStep);
    let segmentsFromRom = convertRomToDrawnVectorSegments(characterFromVectorCharacterRomCDC6602);
    let simplifiedLineSegments = simplifyLines(segmentsFromRom);
    checkTableContainerContent.innerHTML = generateCdcCheckTable(characterFromVectorCharacterRomCDC6602);
    /*        const resultsDiv = document.getElementById('results');
            if (resultsDiv) {
                resultsDiv.innerHTML += `<h3>Character: ${character}</h3>`;
                resultsDiv.innerHTML += `<h4>Processed Data:</h4>`;
                resultsDiv.innerHTML += `<pre>${JSON.stringify(processedData, null, 2)}</pre>`;
                resultsDiv.innerHTML += `<h4>Simplified Data:</h4>`;
                resultsDiv.innerHTML += `<pre>${JSON.stringify(simplifiedData, null, 2)}</pre>`;
            }*/
}
function updateZoom() {
    bitmapCanvas.style.width = `${bitmapCanvas.width * displayZoomFactor}px`;
    bitmapCanvas.style.height = `${bitmapCanvas.height * displayZoomFactor}px`;
}
function updateDisplay() {
    readAllControls();
    updateCanvasSize();
    bitmapCanvasContext.clearRect(0, 0, bitmapCanvas.width, bitmapCanvas.height);
    if (drawPixelReferenceCheckerboard) {
        drawCheckerboard();
    }
    drawCharacter();
    updateZoom();
}
function initialise() {
    sizeSlider.addEventListener('input', updateDisplay);
    pixelsPerVectorStepSlider.addEventListener('input', updateDisplay);
    redrawButton.addEventListener('click', updateDisplay);
    characterSelect.addEventListener('change', updateDisplay);
    lineWidthSlider.addEventListener('input', updateDisplay);
    borderWidthSlider.addEventListener('input', updateDisplay);
    lineCapSelect.addEventListener('change', updateDisplay);
    lineJoinSelect.addEventListener('change', updateDisplay);
    drawPixelReferenceCheckerboardToggle.addEventListener('change', updateDisplay);
    lineAlphaSelect.addEventListener('change', updateDisplay);
    // Initial draw
    updateDisplay();
}
initialise();
//# sourceMappingURL=script.js.map