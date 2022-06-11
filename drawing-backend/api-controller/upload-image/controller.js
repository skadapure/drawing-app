const { upload } = require("../../utils/s3Utils");

module.exports = (req, res) => {
    const { body } = req;
    upload(body.image);
    res.status(201).send();
}