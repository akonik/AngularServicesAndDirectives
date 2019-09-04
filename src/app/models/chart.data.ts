export class ChartData {
    public label: string;
    public values: number[];
    public valueLabels: string[];

    constructor(label: string, values: number[], valueLabels: string[]) {
        this.label = label;
        this.values = values;
        this.valueLabels = valueLabels;
    }
}