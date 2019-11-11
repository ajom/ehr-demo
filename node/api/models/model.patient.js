class PatientModel
{
    constructor(patient_id, first_name, last_name, dob, sex, address, phone, last_accessed_date, last_updated_date, create_date)
    {
        this.patient_id = patient_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.dob = dob;
        this.sex = sex;
        this.address = address;
        this.phone = phone;
        this.last_accessed_date = last_accessed_date;
        this.last_updated_date = last_updated_date;
        this.create_date = create_date;
    }
}

module.exports = PatientModel;
