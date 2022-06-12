const { upload } = require("../../utils/s3Utils");

module.exports = (req, res) => {
    const { image, userId } = req.body || {};
    if(!image || !userId) res.status(400).send({error: "Missing required inputs"});
    upload(image, userId);
    res.status(201).send();
}