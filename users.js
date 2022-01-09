const express = require("express");
const router = express.Router();
const db = require("./database");


router.get("/", (req, res) => {
    db.query("SELECT * FROM USERS", (err, result) => {
        if (err) {
            throw err
        } else {
            res.send(result)
        }
    });
})

router.post("/", (req, res) => {
    const { id, name, lastname } = req.body;
    db.query(`INSERT INTO USERS VALUES('${id}', '${name}', '${lastname}')`, (err) => {
        if (err && err.code != "ER_DUP_ENTRY") {
            throw err
        } else {
            res.send(200)
        }
    })

})


router.get("/:id", (req, res) => {
    const id = req.params.id;
    if(id) {
        db.query(`SELECT * FROM USERS WHERE id = ${id}`, (err, result) => {
            if (err) {
                throw err;
            } else {
                res.send(result);
            }
        });
    }
})

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    if(id) {
        db.query(`DELETE FROM USERS WHERE id = ${id}`, (err, result) => {
            if (err) {
                throw err;
            } else {
                res.sendStatus(200)
            }
        });
}})





module.exports = router;