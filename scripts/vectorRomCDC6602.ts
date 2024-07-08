// Transcoded from CDC 6600 Diagrams and Circuit Description
// http://www.bitsavers.org/pdf/cdc/cyber/cyber_70/fieldEngr/60125000C_6602_6603_6622_6681_6682_Data_Channel_Diagrams_Dec65.pdf
// See pages 26 to 30 for character fonts

// This font representation:
// Copyright 2024, Philip Claridge
// SPDX-License-Identifier: MIT

// CDC documentation has been released for personal use under: [TODO add ref to release letter].

// The character format here is simpler than the CDC manual.
// Here it is x, and y from a bottom left corner origin in a 7x7 matrix, not the H1/2, V1/2, U as other vector fonts
// many be used with the same software in the future.

// However the format here includes the original timing slots from the CDC hardware to allow beam smoothing to be applied
// matching the low pass filtering applied to both the X and Y deflection and the rise/fall time of the CRT beam current
// amplifier as the beam is turned on and off.



export interface VectorData {
    [key: string]: [number, number, boolean][];
}

export const vectorCharacterRomCDC6602: VectorData = {
    "0": [[0, 1, false], [0, 1, false], [0, 1, true], [0, 3, true], [0, 5, true], [1, 6, true], [3, 6, true], [5, 6, true], [6, 5, true], [6, 3, true], [6, 1, true], [5, 0, true], [3, 0, true], [1, 0, true], [0, 1, true], [0, 1, true], [0, 1, false], [0, 1, false], [0, 1, false], [0, 1, false], [0, 1, false], [0, 1, false]],
    "1": [[2, 0, false], [3, 0, false], [3, 0, false], [3, 0, true], [3, 2, true], [3, 4, true], [3, 6, true], [3, 6, true], [1, 5, true], [1, 5, true], [1, 5, false], [1, 5, false], [1, 5, false], [1, 5, false], [1, 5, false], [1, 5, false], [1, 5, false], [1, 5, false], [1, 5, false], [1, 5, false], [1, 5, false], [1, 5, false]],
    "2": [[0, 2, false], [0, 4, false], [0, 5, false], [0, 5, false], [0, 5, true], [2, 6, true], [4, 6, true], [6, 5, true], [6, 4, true], [4, 3, true], [2, 2, true], [0, 0, true], [0, 0, true], [2, 0, true], [4, 0, true], [6, 0, true], [6, 0, true], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false]],
    "3": [[0, 1, false], [0, 1, false], [0, 1, true], [2, 0, true], [4, 0, true], [6, 1, true], [6, 3, true], [4, 4, true], [2, 4, true], [2, 4, true], [4, 5, true], [6, 6, true], [6, 6, true], [4, 6, true], [2, 6, true], [0, 6, true], [0, 6, true], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false]],
    "4": [[2, 0, false], [4, 0, false], [4, 0, false], [4, 0, true], [4, 2, true], [4, 4, true], [4, 6, true], [4, 6, true], [2, 4, true], [0, 2, true], [0, 2, true], [2, 2, true], [4, 2, true], [6, 2, true], [6, 2, true], [6, 2, false], [6, 2, false], [6, 2, false], [6, 2, false], [6, 2, false], [6, 2, false], [6, 2, false]],
    "5": [[0, 1, false], [0, 1, false], [0, 1, true], [2, 0, true], [4, 0, true], [6, 1, true], [6, 3, true], [4, 4, true], [2, 4, true], [0, 4, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 6, true], [4, 6, true], [6, 6, true], [6, 6, true], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false]],
    "6": [[0, 0, false], [0, 2, false], [0, 3, false], [0, 3, true], [2, 4, true], [4, 4, true], [6, 3, true], [6, 1, true], [4, 0, true], [2, 0, true], [0, 1, true], [0, 3, true], [0, 5, true], [2, 6, true], [4, 6, true], [6, 5, true], [6, 5, true], [6, 5, false], [6, 5, false], [6, 5, false], [6, 5, false], [6, 5, false]],
    "7": [[2, 0, false], [2, 0, false], [2, 0, true], [2, 1, true], [3, 3, true], [5, 5, true], [6, 6, true], [6, 6, true], [4, 6, true], [2, 6, true], [0, 6, true], [0, 6, true], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false]],
    "8": [[0, 1, false], [0, 1, false], [0, 1, true], [0, 2, true], [2, 3, true], [4, 3, true], [6, 4, true], [6, 5, true], [4, 6, true], [2, 6, true], [0, 5, true], [0, 4, true], [2, 3, true], [4, 3, true], [6, 2, true], [6, 1, true], [4, 0, true], [2, 0, true], [0, 1, true], [0, 1, true], [0, 1, false], [0, 1, false]],
    "9": [[0, 1, false], [0, 1, false], [0, 1, true], [2, 0, true], [4, 0, true], [6, 1, true], [6, 3, true], [6, 5, true], [4, 6, true], [2, 6, true], [0, 5, true], [0, 3, true], [2, 2, true], [4, 2, true], [6, 3, true], [6, 3, true], [6, 3, false], [6, 3, false], [6, 3, false], [6, 3, false], [6, 3, false], [6, 3, false]],
    " ": [[0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false]],
    "A": [[0, 0, false], [0, 0, true], [1, 2, true], [2, 4, true], [3, 6, true], [3, 6, true], [4, 4, true], [5, 2, true], [6, 0, true], [6, 0, true], [5, 2, false], [5, 2, false], [3, 2, true], [1, 2, true], [1, 2, true], [1, 2, false], [1, 2, false], [1, 2, false], [1, 2, false], [1, 2, false], [1, 2, false], [1, 2, false]],
    "B": [[0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 6, true], [4, 6, true], [6, 5, true], [6, 4, true], [4, 3, true], [2, 3, true], [0, 3, true], [0, 3, true], [2, 3, false], [4, 3, false], [6, 2, true], [6, 1, true], [4, 0, true], [2, 0, true], [0, 0, true], [0, 0, true], [0, 0, false]],
    "C": [[2, 2, false], [4, 4, false], [6, 5, false], [6, 5, false], [6, 5, true], [4, 6, true], [2, 6, true], [0, 5, true], [0, 3, true], [0, 1, true], [2, 0, true], [4, 0, true], [6, 1, true], [6, 1, true], [6, 1, false], [6, 1, false], [6, 1, false], [6, 1, false], [6, 1, false], [6, 1, false], [6, 1, false], [6, 1, false]],
    "D": [[0, 0, false], [0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 6, true], [4, 6, true], [6, 5, true], [6, 3, true], [6, 1, true], [4, 0, true], [2, 0, true], [0, 0, true], [0, 0, true], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false]],
    "E": [[0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 6, true], [4, 6, true], [6, 6, true], [6, 6, true], [4, 4, false], [4, 4, false], [2, 4, true], [0, 4, true], [0, 4, true], [0, 2, false], [0, 0, false], [0, 0, false], [2, 0, true], [4, 0, true], [6, 0, true], [6, 0, true], [6, 0, false]],
    "F": [[0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 6, true], [4, 6, true], [6, 6, true], [6, 6, true], [4, 4, false], [4, 3, false], [4, 3, true], [2, 3, true], [0, 3, true], [0, 3, true], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false]],
    "G": [[2, 1, false], [4, 3, false], [4, 3, false], [4, 3, true], [6, 3, true], [6, 3, true], [6, 1, true], [4, 0, true], [2, 0, true], [0, 1, true], [0, 3, true], [0, 5, true], [2, 6, true], [4, 6, true], [6, 5, true], [6, 5, true], [6, 5, false], [6, 5, false], [6, 5, false], [6, 5, false], [6, 5, false], [6, 5, false]],
    "H": [[0, 0, false], [0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [0, 4, false], [0, 3, false], [0, 3, true], [2, 3, true], [4, 3, true], [6, 3, true], [6, 3, true], [6, 1, false], [6, 0, false], [6, 0, true], [6, 2, true], [6, 4, true], [6, 6, true], [6, 6, true], [6, 6, false], [6, 6, false]],
    "I": [[2, 0, false], [3, 0, false], [3, 0, false], [3, 0, true], [3, 2, true], [3, 4, true], [3, 6, true], [3, 6, true], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false], [3, 6, false]],
    "J": [[0, 2, false], [0, 2, false], [0, 2, true], [2, 0, true], [4, 0, true], [6, 2, true], [6, 4, true], [6, 6, true], [6, 6, true], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false]],
    "K": [[0, 0, false], [0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 6, false], [4, 6, false], [6, 6, false], [6, 6, true], [4, 5, true], [2, 4, true], [0, 3, true], [0, 3, true], [2, 2, true], [4, 1, true], [6, 0, true], [6, 0, true], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false]],
    "L": [[0, 0, false], [0, 2, false], [0, 4, false], [0, 6, false], [0, 6, true], [0, 4, true], [0, 2, true], [0, 0, true], [0, 0, true], [2, 0, true], [4, 0, true], [6, 0, true], [6, 0, true], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false]],
    "M": [[0, 0, false], [0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 4, true], [3, 3, true], [3, 3, true], [5, 5, true], [6, 6, true], [6, 6, true], [6, 4, true], [6, 2, true], [6, 0, true], [6, 0, true], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false]],
    "N": [[0, 0, false], [0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 4, true], [4, 2, true], [6, 0, true], [6, 0, true], [6, 2, true], [6, 4, true], [6, 6, true], [6, 6, true], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false]],
    "O": [[0, 2, false], [0, 2, false], [0, 2, true], [0, 4, true], [2, 6, true], [4, 6, true], [6, 4, true], [6, 2, true], [4, 0, true], [2, 0, true], [0, 2, true], [0, 2, true], [0, 2, false], [0, 2, false], [0, 2, false], [0, 2, false], [0, 2, false], [0, 2, false], [0, 2, false], [0, 2, false], [0, 2, false], [0, 2, false]],
    "P": [[0, 0, false], [0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 6, true], [4, 6, true], [6, 5, true], [6, 4, true], [4, 3, true], [2, 3, true], [0, 3, true], [0, 3, true], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false]],
    "Q": [[2, 0, false], [2, 0, false], [2, 0, true], [4, 0, true], [6, 2, true], [6, 4, true], [4, 6, true], [2, 6, true], [0, 4, true], [0, 2, true], [2, 0, true], [2, 0, true], [4, 2, false], [4, 2, false], [4, 2, true], [6, 0, true], [6, 0, true], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false]],
    "R": [[0, 0, false], [0, 0, true], [0, 2, true], [0, 4, true], [0, 6, true], [0, 6, true], [2, 6, true], [4, 6, true], [6, 5, true], [6, 4, true], [4, 3, true], [2, 3, true], [0, 3, true], [0, 3, true], [2, 2, true], [4, 1, true], [6, 0, true], [6, 0, true], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false]],
    "S": [[0, 1, false], [0, 1, false], [0, 1, true], [2, 0, true], [4, 0, true], [6, 1, true], [6, 2, true], [4, 3, true], [2, 3, true], [0, 4, true], [0, 5, true], [2, 6, true], [4, 6, true], [6, 5, true], [6, 5, true], [6, 5, false], [6, 5, false], [6, 5, false], [6, 5, false], [6, 5, false], [6, 5, false], [6, 5, false]],
    "T": [[2, 0, false], [3, 0, false], [3, 0, false], [3, 0, true], [3, 2, true], [3, 4, true], [3, 6, true], [3, 6, true], [5, 6, false], [6, 6, false], [6, 6, true], [4, 6, true], [2, 6, true], [0, 6, true], [0, 6, true], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false]],
    "U": [[0, 0, false], [0, 2, false], [0, 4, false], [0, 6, false], [0, 6, true], [0, 4, true], [0, 2, true], [1, 0, true], [3, 0, true], [5, 0, true], [6, 2, true], [6, 4, true], [6, 6, true], [6, 6, true], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false]],
    "V": [[0, 0, false], [0, 2, false], [0, 4, false], [0, 6, false], [0, 6, true], [1, 4, true], [2, 2, true], [3, 0, true], [3, 0, true], [4, 2, true], [5, 4, true], [6, 6, true], [6, 6, true], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false]],
    "W": [[0, 0, false], [0, 2, false], [0, 4, false], [0, 6, false], [0, 6, true], [0, 4, true], [0, 2, true], [0, 0, true], [0, 0, true], [2, 2, true], [3, 3, true], [3, 3, true], [5, 1, true], [6, 0, true], [6, 0, true], [6, 2, true], [6, 4, true], [6, 6, true], [6, 6, true], [6, 6, false], [6, 6, false], [6, 6, false]],
    "X": [[0, 0, false], [0, 0, true], [2, 2, true], [4, 4, true], [6, 6, true], [6, 6, true], [6, 4, false], [6, 2, false], [6, 0, false], [6, 0, true], [4, 2, true], [2, 4, true], [0, 6, true], [0, 6, true], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false]],
    "Y": [[2, 0, false], [3, 0, false], [3, 0, false], [3, 0, true], [3, 2, true], [3, 3, true], [3, 3, true], [5, 5, false], [6, 6, false], [6, 6, true], [4, 4, true], [3, 3, true], [3, 3, true], [1, 5, true], [0, 6, true], [0, 6, true], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false], [0, 6, false]],
    "Z": [[0, 2, false], [0, 2, false], [0, 4, false], [0, 6, false], [0, 6, true], [2, 6, true], [4, 6, true], [6, 6, true], [6, 6, true], [4, 4, true], [2, 2, true], [0, 0, true], [0, 0, true], [2, 0, true], [4, 0, true], [6, 0, true], [6, 0, true], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false], [6, 0, false]],
    "+": [[2, 0, false], [3, 0, false], [3, 0, false], [3, 0, true], [3, 2, true], [3, 4, true], [3, 6, true], [3, 6, true], [5, 4, false], [6, 3, false], [6, 3, true], [4, 3, true], [2, 3, true], [0, 3, true], [0, 3, true], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, false]],
    "-": [[0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 2, false], [0, 3, false], [0, 3, false], [0, 3, false], [0, 3, true], [2, 3, true], [4, 3, true], [6, 3, true], [6, 3, true], [6, 3, false], [6, 3, false], [6, 3, false], [6, 3, false], [6, 3, false]],
    "*": [[0, 1, false], [1, 1, false], [1, 1, true], [3, 3, true], [5, 5, true], [5, 5, true], [5, 3, false], [5, 3, false], [3, 3, true], [1, 3, true], [1, 3, true], [1, 5, false], [1, 5, false], [1, 5, true], [3, 3, true], [5, 1, true], [5, 1, true], [5, 1, false], [5, 1, false], [5, 1, false], [5, 1, false], [5, 1, false]],
    "/": [[0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, true], [2, 2, true], [4, 4, true], [6, 6, true], [6, 6, true], [6, 6, false], [6, 6, false], [6, 6, false], [6, 6, false]],
    "(": [[2, 0, false], [4, 0, false], [4, 0, false], [4, 0, true], [3, 1, true], [3, 3, true], [3, 5, true], [4, 6, true], [4, 6, true], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false], [4, 6, false]],
    ")": [[0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [2, 0, false], [2, 0, false], [2, 0, true], [3, 1, true], [3, 3, true], [3, 5, true], [2, 6, true], [2, 6, true], [2, 6, false], [2, 6, false], [2, 6, false], [2, 6, false], [2, 6, false]],
    "=": [[0, 2, false], [0, 2, false], [0, 2, true], [2, 2, true], [4, 2, true], [6, 2, true], [6, 2, true], [6, 4, false], [6, 4, false], [6, 4, false], [6, 4, false], [6, 4, false], [6, 4, false], [6, 4, true], [4, 4, true], [2, 4, true], [0, 4, true], [0, 4, true], [0, 4, false], [0, 4, false], [0, 4, false], [0, 4, false]],
    ",": [[0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [1, 1, true], [1, 2, true], [1, 2, true], [1, 2, false], [1, 2, false], [1, 2, false], [1, 2, false], [1, 2, false]],
    ".": [[0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, true], [0, 0, true], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false]]
}

export function generateCdcCheckTable(data: [number, number, boolean][]): string {
    let tableHTML: string = `
            <table id="character-table">
            <thead>
            <tr>
                <th>Label</th>
                <th>V1</th>
                <th>V2</th>
                <th>H1</th>
                <th>H2</th>
                <th>&nbsp;U</th>
            </tr>
            </thead>
            <tbody>
    `;
    let prevX: number = 0, prevY: number = 0, prevDraw: boolean = false;

    for (let i = 0; i < data.length; i++) {
        const [x, y, draw] = data[i];
        const deltaX: number = Math.abs(x - prevX);
        const deltaY: number = Math.abs(y - prevY);
        const toggleDraw: boolean = draw !== prevDraw;

        let label: string;
        if (i === 0) {
            label = '76';
        } else {
            label = (i - 1).toString(8)
        }

        tableHTML += `
                    <tr>
                        <td>${label}</td>
                        <td>${deltaY === 1 ? 'X' : ' '}</td>
                        <td>${deltaY === 2 ? 'X' : ' '}</td>
                        <td>${deltaX === 1 ? 'X' : ' '}</td>
                        <td>${deltaX === 2 ? 'X' : ' '}</td>
                        <td>${toggleDraw ? 'X' : ' '}</td>
                    </tr>
                `;

        prevX = x;
        prevY = y;
        prevDraw = draw;
    }
    tableHTML += '</tbody> </table>'
    return tableHTML
}