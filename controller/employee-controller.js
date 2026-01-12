const connection = require("../db/db-connection");

/* SAVE EMPLOYEE */
const saveEmployee = (req, res) => {
    const { name, age, salary } = req.body;

    connection.query(
        "INSERT INTO employee (name, age, salary) VALUES (?, ?, ?)",
        [name, age, salary],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error saving data");
            }
            res.status(201).send("Employee saved successfully");
        }
    );
};

/* GET ALL EMPLOYEES */
const getAllEmployees = (req, res) => {
    connection.query(
        "SELECT * FROM employee",
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error fetching employees");
            }
            res.status(200).json(results);
        }
    );
};

/* UPDATE EMPLOYEE */
const updateEmployee = (req, res) => {
    const { id } = req.params;
    const { name, age, salary } = req.body;

    connection.query(
        "UPDATE employee SET name = ?, age = ?, salary = ? WHERE id = ?",
        [name, age, salary, id],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error updating employee");
            }

            if (results.affectedRows === 0) {
                return res.status(404).send("Employee not found");
            }

            res.status(200).send("Employee updated successfully");
        }
    );
};

/* DELETE EMPLOYEE */
const deleteEmployee = (req, res) => {
    const { id } = req.params;

    connection.query(
        "DELETE FROM employee WHERE id = ?",
        [id],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error deleting employee");
            }

            if (results.affectedRows === 0) {
                return res.status(404).send("Employee not found");
            }

            res.status(200).send("Employee deleted successfully");
        }
    );
};

module.exports = {
    saveEmployee,
    getAllEmployees,
    updateEmployee,
    deleteEmployee
};
