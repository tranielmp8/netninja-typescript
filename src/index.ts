
import {appendFileSync} from 'fs'
// CSVWriter project

interface Payment {
  id: number 
  amount: number 
  to: string 
  notes: string 
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

class CSVWriter {
  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(',') + '\n'
  }

  private csv: string 

  save(filename: string): void {
    appendFileSync(filename, this.csv)
    this.csv = '\n'

    console.log('file saved to', filename);
  }

  addRows(values: Payment[]): void {
    let rows = values.map((v) => this.formatRow(v))

    this.csv += rows.join('\n') + '\n'

    console.log(this.csv)
  }

  private formatRow(p: Payment): string {
    return this.columns.map((col) => p[col]).join(',')
  }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])

writer.addRows([
  {id: 1, amount: 25, to:'kakashi', notes: 'That copy ninja'},
  {id: 2, amount: 16, to:'naruto', notes: 'That cloning ninja'}
])

writer.save('./data/payments.csv')

