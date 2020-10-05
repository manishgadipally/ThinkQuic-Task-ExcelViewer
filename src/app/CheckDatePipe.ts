import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({ name: 'checkdate' })
export class CheckDatePipe implements PipeTransform {
    constructor(private datePipe: DatePipe) {

    }
    transform(str: any): string {
        if (str instanceof Date) {
            return this.datePipe.transform(str, 'dd-MM-yyyy');
        } else {
            return str;
        }
    }
}
