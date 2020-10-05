import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'excel-import';
  OriginalColumnDataSource: any[];
  ColumnDataSource: any[];
  OriginalDataSource: AOA;
  TableDataSource: AOA;

  constructor() {
  }

  clearData(event) {
    this.TableDataSource = [];
    this.ColumnDataSource = [...this.OriginalColumnDataSource];
  }

  onFileReadCompleted(data: AOA) {
    this.OriginalColumnDataSource = [...data[0]];
    this.ColumnDataSource = [...data[0]];
    this.OriginalDataSource = [...data];
    this.TableDataSource = data;
  }

  getColumnData(data, colIndex) {
    const colData = [];
    for (let i = 0; i < data.length; i++) {
      colData.push(data[i][colIndex]);
    }
    return colData;
  }

  tableDataSourceChanged(columnNames) {
    const tableDataSource = [];
    columnNames.forEach(element => {
      const colIndex = this.OriginalColumnDataSource.indexOf(element);
      const columnDataByIndex = this.getColumnData(this.OriginalDataSource, colIndex);
      tableDataSource.push(columnDataByIndex);
    });
    this.TableDataSource = this.transpose(tableDataSource);
  }

  transpose(tableDataSource) {
    const sd = tableDataSource[0].map((_, colIndex) => tableDataSource.map(row => row[colIndex]));
    return sd;
  }
}
