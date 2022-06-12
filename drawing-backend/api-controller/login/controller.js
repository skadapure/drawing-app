module.exports = async (req, res, next) => {
    const { body = {} } = req;
    const { userId, password } = body;
    if((userId === "user1" && password === "password1") || (userId === "user2" && password === "password2")) {
      res.status(200).send(userId);
    }
    else res.status(403).send();
}