const { getListOfImages } = require("../../utils/s3Utils");

module.exports = async (req, res, next) => {
    const resp = await getListOfImages();
    res.send({ imageKeys: resp});
}