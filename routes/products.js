const express = require("express");
const router = express.Router();

const { products } = require("../data");
const { connectRabbitMQ, EXCHANGE_NAME } = require("../rabbitmq");


router.get("/", (req, res) => {
  res.json(products);
});

router.post("/:id/update-size-stock", async (req, res) => {
  try {
    const productId = Number(req.params.id);
    const size = req.body.size;
    const newStock = Number(req.body.stock);

    const product = products.find(p => p.id === productId);

    if (!product) {
      return res.status(404).json({
        message: "Ürün bulunamadı"
      });
    }

    if (!size || product.sizes[size] === undefined) {
      return res.status(400).json({
        message: "Geçerli bir beden seçilmedi"
      });
    }

    const oldStock = product.sizes[size];

    product.sizes[size] = newStock;

  
    if (oldStock === 0 && newStock > 0) {
      const eventData = {
        eventType: "ProductSizeRestocked",
        productId: product.id,
        productName: product.name,
        size: size,
        newStock: newStock
      };

      const channel = await connectRabbitMQ();

      channel.publish(
        EXCHANGE_NAME,
        "",
        Buffer.from(JSON.stringify(eventData))
      );

      console.log("RabbitMQ event yayınlandı:", eventData);
    }

    res.json({
      message: `${product.name} ürününün ${size} beden stoğu güncellendi`,
      product
    });

  } catch (error) {
    console.error("Beden stoğu güncelleme hatası:", error);

    res.status(500).json({
      message: "Beden stoğu güncellenirken hata oluştu"
    });
  }
});

module.exports = router;
