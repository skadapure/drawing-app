const { getListOfImages, getImage } = require("../../utils/s3Utils");

module.exports = async (req, res) => {
    const { userId } = req.params;
    if(!userId) res.status(400).send({error: "Missing required inputs"});
    const keys = await getListOfImages(userId);
    let images = [];
    for(let i = 0; i < keys.length; i++) {
        images.push([keys[i], await getImage(keys[i], userId)]);
    }
    
    res.send({ images });
}