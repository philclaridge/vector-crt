export interface DigitalFilter {
    applyFirst(input: number): number;
    apply(input: number): number;
}

export class IIRFilter implements DigitalFilter {
    private filteredValue: number = 0;
    private readonly filterPct: number;

    constructor(filterPct: number = 0.05) {
        this.filterPct = filterPct;
    }

    applyFirst(input: number): number {
        this.filteredValue = input;
        return this.filteredValue;
    }

    apply(input: number): number {
        this.filteredValue = this.filteredValue * (1 - this.filterPct) + input * this.filterPct;
        return this.filteredValue;
    }
}
