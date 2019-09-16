let express = require('express');
let app = express();

/* GET patients listing. */
app.get('/', function(req, res) {
    res.locals.connection.query('SELECT * from patients', function (error, results) {
        if (error) {
            // If there is error, we send the error in the error section with 500 status
            res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
        } else {
            // If there is no error, all is good and response is 200OK.
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    });
});

app.get('/:patientId', function(req, res) {
    res.locals.connection.query('SELECT * from patients WHERE patient_id = ' + req.params.patientId, function (error, results) {
        if (error) {
            // If there is error, we send the error in the error section with 500 status
            res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
        } else {
            // If there is no error, all is good and response is 200OK.
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    });
});

// app.post('/add', function(req, res) {
//     let patient = req.patient;
//     res.local.connection.query(
//         ('INSERT INTO patients(firstName, lastName, dob, sex, address, phone)' +
//         'VALUES($[firstName], $[lastName], $[dob], $[sex], $[address], $[phone]);' +
//         'SELECT LAST_INSERT_ID();', {...req}), function(error, result) {
//          // TODO: Use spread operator here to populate values. Then, select the new record's id.
//         }
//
//     )
// });

module.exports = app;
