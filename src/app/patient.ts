import { StringUtils } from 'turbocommons-ts';

export class Patient {
    id: number;
    firstName: string;
    lastName: string;
    dob: string;
    sex: string;
    address: string;
    phone: string;
    lastAccessedDate: Date;
    lastUpdatedDate: Date;
    createDate: Date;

    constructor(jsonString: string) {
        const jsonObj: any = JSON.parse(jsonString);

        jsonObj.forEach(function (property) {
            const propertyCC = StringUtils.formatCase(property, StringUtils.FORMAT_CAMEL_CASE);
            this[propertyCC] = jsonObj[property];
        });
    }
}
