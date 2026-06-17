const express = require("express");
const router = express.Router();

const { users } = require("../data");

// Yeni kullanıcı kaydı oluşturur
router.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    return res.status(400).json({
      message: "Ad ve e-mail zorunludur"
    });
  }

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.json({
      message: "Bu e-mail ile zaten kayıt yapılmış",
      user: existingUser
    });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email
  };

  users.push(newUser);

  res.json({
    message: "Kayıt başarılı",
    user: newUser
  });
});

// Tüm kullanıcıları getirir
router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;