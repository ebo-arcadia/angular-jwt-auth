exports.allAccess = (req, res) => { res.status(200).send("you have successfully accesseed the unrestricted public content") };
exports.adminBoard = (req, res) => { res.status(200).send("Access to ADMIN role scope content: success") };
exports.consumerBoard = (req, res) => { res.status(200).send("Access to CONSUMER role scope content: success") };
exports.developerBoard = (req, res) => { res.status(200).send("Access to DEVELOPER role scope content: success") };