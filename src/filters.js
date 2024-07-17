export class IIRFilter {
    constructor(filterPct = 0.05) {
        this.filteredValue = 0;
        this.filterPct = filterPct;
    }
    applyFirst(input) {
        this.filteredValue = input;
        return this.filteredValue;
    }
    apply(input) {
        this.filteredValue = this.filteredValue * (1 - this.filterPct) + input * this.filterPct;
        return this.filteredValue;
    }
}
//# sourceMappingURL=filters.js.map