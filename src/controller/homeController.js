import db from "../models/index";
import CRUDServer from "../services/CRUDServer";
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

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDServer.createNewUser(req.body);
  console.log(message);
  return res.send("post CRUD from server");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDServer.getAllUsers();
  console.log("------------------------------");
  console.log(data);
  console.log("------------------------------");

  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDServer.getUserInfoById(userId);
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("User not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUser = await CRUDServer.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUser,
  });
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDServer.deleteUserByID(id);
    return res.render("User deleted");
  } else {
    return res.send("User not found");
  }
};
module.exports = {
  getHomPage: getHomPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
