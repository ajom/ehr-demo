import { StringUtils } from 'turbocommons-ts';

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

    constructor(obj: any = null) {
        console.log(obj);
        if (obj != null) {
            Object.assign(this, obj);
        }
    }

     /*constructor(jsonString: string) {
         const jsonObj: any = JSON.parse(jsonString);

         jsonObj.forEach(function (property) {
             const propertyCC = StringUtils.formatCase(property, StringUtils.FORMAT_CAMEL_CASE);
             this[propertyCC] = jsonObj[property];
         });
    }*/
}
