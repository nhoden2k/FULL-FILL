import db from "../models/index";
let getHomPage = async (req, res) => {
  try {
    let getData = await db.User.findAll();
    return res.render("index.ejs", {
      getData: JSON.stringify(getData),
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHomPage: getHomPage,
};
