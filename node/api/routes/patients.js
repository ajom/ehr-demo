let express = require('express');
let app = express();
const PatientDTO = require('../models/model.patient');

/* GET patients listing. */
app.get('/', function(req, res) {
    res.locals.connection.query('SELECT * from patients', function (error, results) {
        if (error) {
            // If there is error, we send the error in the error section with 500 status
            // res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
            res.status(500).send(error);
        } else {
            // If there is no error, all is good and response is 200OK.
            // res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            res.status(200).send(results);
        }
    });
});

app.get('/:id', function(req, res) {
    res.locals.connection.query(
        'SELECT * from patients WHERE patient_id = ?',
        [req.params.id],
        function (error, results) {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).send(results);
            }
        }
    );
});

app.post('/', function(req, res) {
    let patient = new PatientDTO(req.body);
    res.locals.connection.query(
        'INSERT INTO patients(first_name, last_name, dob, sex, address, phone) VALUES(?, ?, ?, ?, ?, ?)',
        [patient.last_name, patient.last_name, patient.dob, patient.sex, patient.address, patient.phone],
        // TODO: Add another function to return SELECT LAST_INSERT_ID();

        function(error, results) { // TODO: Use spread operator here to populate values. Then, select the new record's id.
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).send(results);
            }
        }
    );
});

app.delete('/:patient', function(req, res) {
    res.locals.connection.query(
        'DELETE FROM patients WHERE patient_id = ?',
        [req.params.patient],
        function(error, results) {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).send(results);
            }
        }
    );
});

module.exports = app;
