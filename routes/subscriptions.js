const express = require("express");
const router = express.Router();

const {
  products,
  subscriptions,
  favorites,
  carts,
  notifications
} = require("../data");


router.post("/", (req, res) => {
  const userId = Number(req.body.userId);
  const productId = Number(req.body.productId);
  const size = req.body.size;

  const product = products.find(product => product.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "Ürün bulunamadı"
    });
  }

  if (!size || product.sizes[size] === undefined) {
    return res.status(400).json({
      message: "Lütfen geçerli bir beden seçiniz"
    });
  }

  const alreadySubscribed = subscriptions.find(
    subscription =>
      subscription.userId === userId &&
      subscription.productId === productId &&
      subscription.size === size
  );

  if (alreadySubscribed) {
    return res.json({
      message: `${product.name} ürününün ${size} bedeni için zaten stok bildirimi açılmış`
    });
  }

  subscriptions.push({
    userId,
    productId,
    size
  });

  res.json({
    message: `${product.name} ürününün ${size} bedeni için stok bildirimi açıldı`
  });
});


router.post("/favorites", (req, res) => {
  const userId = Number(req.body.userId);
  const productId = Number(req.body.productId);

  const product = products.find(product => product.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "Ürün bulunamadı"
    });
  }

  const alreadyFavorite = favorites.find(
    favorite => favorite.userId === userId && favorite.productId === productId
  );

  if (alreadyFavorite) {
    return res.json({
      message: "Bu ürün zaten favorilerde"
    });
  }

  favorites.push({
    id: favorites.length + 1,
    userId,
    productId
  });

  res.json({
    message: `${product.name} favorilere eklendi`
  });
});


router.get("/favorites/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const userFavorites = favorites
    .filter(favorite => favorite.userId === userId)
    .map(favorite => {
      const product = products.find(product => product.id === favorite.productId);

      return {
        ...favorite,
        product
      };
    })
    .filter(favorite => favorite.product);

  res.json(userFavorites);
});


router.post("/cart", (req, res) => {
  const userId = Number(req.body.userId);
  const productId = Number(req.body.productId);
  const size = req.body.size;

  const product = products.find(product => product.id === productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Ürün bulunamadı"
    });
  }

  if (!size || product.sizes[size] === undefined) {
    return res.json({
      success: false,
      message: "Lütfen geçerli bir beden seçiniz"
    });
  }

  if (product.sizes[size] === 0) {
    return res.json({
      success: false,
      message: `${product.name} ürününün ${size} bedeni stokta yok. Stok gelince haber ver seçeneğini kullanabilirsiniz.`
    });
  }

  carts.push({
    id: carts.length + 1,
    userId,
    productId,
    size
  });

  res.json({
    success: true,
    message: `${product.name} ${size} beden sepete eklendi`,
    product,
    size
  });
});


router.get("/cart/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const userCart = carts
    .filter(cartItem => cartItem.userId === userId)
    .map(cartItem => {
      const product = products.find(product => product.id === cartItem.productId);

      return {
        ...cartItem,
        product
      };
    })
    .filter(cartItem => cartItem.product);

  res.json(userCart);
});


router.get("/notifications/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const userNotifications = notifications.filter(
    notification => notification.userId === userId
  );

  res.json(userNotifications);
});

module.exports = router;
