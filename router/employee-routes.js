const express = require("express");
const router = express.Router();

const {
    saveEmployee,
    getAllEmployees,
    updateEmployee,
    deleteEmployee
} = require("../controller/employee-controller");

/* CREATE */
router.post("/save", saveEmployee);

/* READ */
router.get("/getAll", getAllEmployees);

/* UPDATE */
router.put("/update/:id", updateEmployee);

/* DELETE */
router.delete("/delete/:id", deleteEmployee);

module.exports = router;
