# vector-crt
Vector font drawing for mainframe emulation including CDC6600

## Description

Work in progress to develop an increasingly accurate character generator for an emulation for 
CDC 6600 mainframe system console.

This is version 1 that simply shows how to set the correct HTML canvas options to nicely draw 
single characters on normal web pages and to ensure that font table is correct.

Work in progress / futures:
* Save option to save PNG of all characters 'sprite style' suitable for use by various 
bitmap font generators and sprite systems.
* Replace vector line draw by simulation of CRT X/Y filters using to draw more accurate character path using simple IIR filter.
* Extend filter from IIR to biquad filter if needed for more accuracy.
* Generate dedicated bitmaps for different character sizes (x1, x2, x4)
* Add simulation of rise/fall time of CRT beam when turn on and off. 
* Some basic variation of line width as function of beam sweep velocity over CRT
* (Offline font/bitmap generation) Draw beam as repeated additive plotting of gaussian shaped spot.
* (Offline font/bitmap generation) Simulate saturation - (1) enlarged spot when beam slow/stationary.
* (Offline font/bitmap generation) Simulate saturation - (2) colour change due to secondary emission 

As work in progress pull request for major changes not yet accepted. 

## Getting Started

### Dependencies

* Install typescript compiler version 5.

### Installing

* No install needed, very opinionated programming using no web frameworks at all, but using Typescript for typechecking. 

### Executing program

* Clone and open index.html

## Authors

Philip Claridge

## License

This source code is licensed under the Mit License - see the LICENSE.md file for details. 
Except, however, see licence details in Vector Rom file(s).

## Acknowledgments

* [CDC 6600 Diagrams and Circuit Description](http://www.bitsavers.org/pdf/cdc/cyber/cyber_70/fieldEngr/60125000C_6602_6603_6622_6681_6682_Data_Channel_Diagrams_Dec65.pdf) See pages 26 to 30 for 
* character forms
* [Design of a Computer: The Control Data 6600](http://ygdes.com/CDC/DesignOfAComputer_CDC6600.pdf)
* [Video of CDC console](https://www.youtube.com/watch?v=wcSmUEaCRp8)
* [Retro1.org](https://codex.retro1.org/cdc:start) Everything CDC
* [Retro 1 mail archive](https://archer.retro1.org/login)
* [Cathode Ray Tubes: Getting Down To Basics](https://w140.com/tekwiki/images/2/2b/068-0313-00.pdf)
* [Digital biquad filters - wikipedia](https://en.wikipedia.org/wiki/Digital_biquad_filter)
* [simple.css](https://simplecss.org) (MIT Licence)
