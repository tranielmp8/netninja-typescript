"use strict";
//--------------------
// CSV Writer Project
//--------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWriter = void 0;
const fs_1 = require("fs");
class CSVWriter {
    columns;
    // keyof Is basically the Key portion of values in an object
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
    }
    csv;
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    formatRow(value) {
        return this.columns.map((col) => value[col]).join(',');
    }
}
exports.CSVWriter = CSVWriter;
