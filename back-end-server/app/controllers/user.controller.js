exports.allAccess = (req, res) => { res.status(200).send("Public Content") };
exports.adminBoard = (req, res) => { res.status(200).send("Admin Content") };
exports.consumerBoard = (req, res) => { res.status(200).send("Consumer Content") };
exports.developerBoard = (req, res) => { res.status(200).send("Developer Content") };