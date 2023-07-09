const express = require("express");
const router = express.Router();

// router.route("/api/contacts", (req, res) => {
//     res.status(200).json({message : "Get all contacts"});
// })

router.route("/").get((req, res) => {
    res.status(200).json({ message : "Get all contacts" });
});

router.route("/").post((req, res) => {
    res.status(200).json({ message : "Create Contact" });
})

router.route("/:id").get((req, res) => {
    res.status(200).json({ message : `Get Contact for ${req.params.id}` });
})

router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
})

router.route("/:id").delete((req, res) => {
    res.status(200).json({ message : `Deleted contact for ${req.params.id}` });
})



module.exports = router;