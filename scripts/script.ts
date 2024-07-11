// Copyright 2024, Philip Claridge
// SPDX-License-Identifier: MIT

import {generateCdcCheckTable, vectorCharacterRomCDC6602} from './vectorRomCDC6602.js';
import {convertRomToDrawnVectorSegments, drawCharacterPathUsingCanvas, simplifyLines} from "./lineDraw.js";

const bitmapCanvas = document.getElementById('bitmapCanvas') as HTMLCanvasElement;
const bitmapCanvasContext = bitmapCanvas.getContext('2d', {willReadFrequently: true}) as CanvasRenderingContext2D;
const sizeSlider = document.getElementById('sizeSlider') as HTMLInputElement;
const sizeValue = document.getElementById('sizeValue') as HTMLSpanElement;
const characterSelect = document.getElementById('characterSelect') as HTMLSelectElement;
const pixelsPerVectorStepSlider = document.getElementById('scaleFactorSlider') as HTMLInputElement;
const pixelsPerVectorStepValue = document.getElementById('scaleFactorValue') as HTMLSpanElement;
const borderWidthSlider = document.getElementById('borderWidthSlider') as HTMLInputElement;
const borderWidthValue = document.getElementById('borderWidthValue') as HTMLSpanElement;
const lineWidthSlider = document.getElementById('lineWidthSlider') as HTMLInputElement;
const lineWidthValue = document.getElementById('lineWidthValue') as HTMLSpanElement;
const lineCapSelect = document.getElementById('lineCapSelect') as HTMLSelectElement;
const lineJoinSelect = document.getElementById('lineJoinSelect') as HTMLSelectElement;
const drawPixelReferenceCheckerboardToggle = document.getElementById('drawPixelReferenceCheckerboardToggle') as HTMLInputElement;
const lineAlphaSelect = document.getElementById('lineAlphaSelect') as HTMLSelectElement;
const redrawButton = document.getElementById('redrawButton') as HTMLButtonElement;
const checkTableContainerContent = document.getElementById('checkTableContainerContent') as HTMLDivElement;
const debugOutputContent = document.getElementById('debugOutputContent') as HTMLDivElement;

let pixelsPerVectorStep: number;
let strokeStyle: string;
let lineWidthPixels: number;
let borderWidthVectorSteps: number;
let lineCap: CanvasLineCap;
let lineJoin: CanvasLineJoin
let displayZoomFactor: number;
let drawPixelReferenceCheckerboard: boolean;

let canvasSizeVectorDots = 7;

function readAllControls(): void {
    pixelsPerVectorStep = parseFloat(pixelsPerVectorStepSlider.value);
    strokeStyle = `rgba(0, 0, 0, ${lineAlphaSelect.value})`;
    lineWidthPixels = parseFloat(lineWidthSlider.value);
    borderWidthVectorSteps = parseFloat(borderWidthSlider.value);
    lineCap = lineCapSelect.value as CanvasLineCap;
    lineJoin = lineJoinSelect.value as CanvasLineJoin;
    drawPixelReferenceCheckerboard = drawPixelReferenceCheckerboardToggle.checked;
    displayZoomFactor = parseInt(sizeSlider.value);

    pixelsPerVectorStepValue.textContent = `${pixelsPerVectorStepSlider.value} px`;
    lineWidthValue.textContent = `${lineWidthSlider.value} px`;
    borderWidthValue.textContent = `${borderWidthSlider.value} step`;
    sizeValue.textContent = `${displayZoomFactor}x`;
}

function updateCanvasSize(): void {
    const canvasSize = (canvasSizeVectorDots * pixelsPerVectorStep) + (pixelsPerVectorStep * borderWidthVectorSteps * 2);
    bitmapCanvas.width = canvasSize;
    bitmapCanvas.height = canvasSize;
}

function drawCheckerboard(): void {
    const canvasWidth = bitmapCanvas.width;
    const canvasHeight = bitmapCanvas.height;
    for (let y = 0; y < canvasHeight; y++) {
        for (let x = 0; x < canvasWidth; x++) {
            bitmapCanvasContext.fillStyle = (x + y) % 2 === 0 ? 'white' : 'rgb(230, 230, 230)';
            bitmapCanvasContext.fillRect(x, y, 1, 1);
        }
    }
}

function drawCharacter(): void {
    const character = characterSelect.value;

    const characterFromVectorCharacterRomCDC6602 = vectorCharacterRomCDC6602[character];

    drawCharacterPathUsingCanvas(
        bitmapCanvasContext,
        pixelsPerVectorStep * borderWidthVectorSteps,
        (canvasSizeVectorDots * pixelsPerVectorStep) + (pixelsPerVectorStep * borderWidthVectorSteps),
        strokeStyle,
        lineWidthPixels,
        lineCap,
        lineJoin,
        characterFromVectorCharacterRomCDC6602,
        pixelsPerVectorStep);

    const segmentsFromRom = convertRomToDrawnVectorSegments(characterFromVectorCharacterRomCDC6602);
    const simplifiedLineSegments = simplifyLines(segmentsFromRom);

    debugOutputContent.innerHTML = `<p>Character: ${character}</p>`;
    debugOutputContent.innerHTML += `<p>Vector Drawn Segments From Rom: ${JSON.stringify(segmentsFromRom)}</p>`;
    debugOutputContent.innerHTML += `<p>Vector Drawn Simplified Segments: ${JSON.stringify(simplifiedLineSegments)}</p>`;

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

function updateZoom(): void {
    bitmapCanvas.style.width = `${bitmapCanvas.width * displayZoomFactor}px`;
    bitmapCanvas.style.height = `${bitmapCanvas.height * displayZoomFactor}px`;
}

function updateDisplay(): void {
    readAllControls();
    updateCanvasSize();
    bitmapCanvasContext.clearRect(0, 0, bitmapCanvas.width, bitmapCanvas.height);
    if (drawPixelReferenceCheckerboard) {
        drawCheckerboard();
    }
    drawCharacter();
    updateZoom();
}

function initialise(): void {
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


