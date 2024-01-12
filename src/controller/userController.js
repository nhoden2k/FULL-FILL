import userService from "../services/userService";
let handlerLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      massage: "Missing email or password",
    });
  }

  let userData = await userService.handlerUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    errCodeMessage: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

module.exports = {
  handlerLogin: handlerLogin,
};
