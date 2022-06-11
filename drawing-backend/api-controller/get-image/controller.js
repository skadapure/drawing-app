const { getListOfImages, getImage } = require("../../utils/s3Utils");

module.exports = async (req, res, next) => {
    const keys = await getListOfImages();
    let images = [];
    for(let i = 0; i < keys.length; i++) {
        images.push([keys[i], await getImage(keys[i])]);
    }
    
    res.send({ images });
}