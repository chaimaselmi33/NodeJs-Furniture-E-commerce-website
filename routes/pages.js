const express = require("express");
const dbConnection = require("../database/config");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home-page");
});

router.get("/products", (req, res) => {
  let sql = "select * from furniture";
  dbConnection.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      result.forEach((frn) => {
        var b64 = frn.furn_image.toString("base64");
        var image = "data:image/jpeg;base64," + b64;
        frn.furn_image = image;
      });

      res.render("products-page", {
        products: result,
      });
    }
  });
});

var qte = 1;
router.get("/products/:id", (req, res) => {
  const prod_id = req.params.id;
  let sql = `select * from furniture where furn_id = ${prod_id}`;
  dbConnection.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      var b64 = result[0].furn_image.toString("base64");
      var image = "data:image/jpeg;base64," + b64;
      res.render("productDetails-page", {
        product: result[0],
        image: image,
        image2: "./green.jpg",
        qte: qte,
      });
    }
  });
});

router.get("/contact", (req, res) => {
  res.render("contact-page");
});

router.post("/postform", (req, res) => {
  data = req.body;
  sql = "insert into contact set ?";

  dbConnection.query(sql, data, (err) => {
    if (err) {
      console.log("server error", err);
    }
    res.redirect("/contact");
  });
});

module.exports = router;
