// import { StringUtils } from 'turbocommons-ts';
import {DatePipe} from '@angular/common';

export class Patient {
    patient_id: number;
    first_name: string;
    last_name: string;
    dob: string;
    sex: string;
    address: string;
    phone: string;
    last_accessed_date: Date;
    last_updated_date: Date;
    create_date: Date;

    constructor(obj: any = null, private datePipe: DatePipe) {
        this.patient_id = obj.patient_id;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.dob = obj.dob;
        this.sex = obj.sex;
        this.address = obj.address;
        this.phone = obj.phone;
        this.last_accessed_date = obj.last_accessed_date;
        this.last_updated_date = obj.last_updated_date;
        this.create_date = obj.create_date;

        // Object.keys(this).forEach(key => typeof key === typeof Date ? datePipe.transform(this[key], 'MM/dd/yyyy') : null);
    }

     /*constructor(jsonString: string) {
         const jsonObj: any = JSON.parse(jsonString);

         jsonObj.forEach(function (property) {
             const propertyCC = StringUtils.formatCase(property, StringUtils.FORMAT_CAMEL_CASE);
             this[propertyCC] = jsonObj[property];
         });
    }*/
}
