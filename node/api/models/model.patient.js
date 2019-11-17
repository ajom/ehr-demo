class PatientDTO {
    constructor(obj) {
        Object.keys(obj).map(function(key, index) {
            if (obj[key] === null || obj[key] === '') {
                obj[key] = null;
            }
        });

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

        // obj && Object.assign(this, obj);
    }
}

module.exports = PatientDTO;
