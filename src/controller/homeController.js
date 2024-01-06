let getHomPage = (req, res) => {
  return res.render("index.ejs");
};

module.exports = {
  getHomPage: getHomPage,
};
