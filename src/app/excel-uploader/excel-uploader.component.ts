import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-uploader',
  templateUrl: './excel-uploader.component.html',
  styleUrls: ['./excel-uploader.component.scss']
})
export class ExcelUploaderComponent implements OnInit {
  constructor() { }
  data: AOA = [[], []];
  @Output() fileReadCompletedEvent = new EventEmitter<AOA>();
  @Output() clearFileData = new EventEmitter();

  ngOnInit() {
  }

  onFileInput(evt: any) {
    /* file reader */
    const target: DataTransfer = (evt.target) as DataTransfer;
    if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary', cellDates: true });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 })) as AOA;
      this.fileReadCompletedEvent.emit(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  clearClick($event) {
    this.clearFileData.emit(this.data);
  }

}
