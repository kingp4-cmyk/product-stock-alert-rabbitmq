require("dotenv").config();

const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


async function sendStockEmail(user, productName, size, newStock) {
  if (!user || !user.email) {
    console.log("Mail gönderilemedi: kullanıcı e-mail bilgisi yok.");

    return {
      success: false,
      message: "Kullanıcı e-mail bilgisi yok"
    };
  }

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";

  const mailOptions = {
    from: `"${process.env.EMAIL_FROM}" <${process.env.EMAIL_USER}>`,
    //mailin kime gideceğini belirliyor.
    to: user.email,
    subject: `${productName} ${size} bedeni tekrar stokta!`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
        <h2>Stok Bildirimi</h2>

        <p>Merhaba ${user.name},</p>

        <p>
          Takip ettiğin <strong>${productName}</strong> ürününün
          <strong>${size}</strong> bedeni tekrar stokta!
        </p>

        <p>
          Yeni stok miktarı: <strong>${newStock}</strong>
        </p>

        <p>
          Ürünü kaçırmadan incelemek için aşağıdaki butona tıklayabilirsin.
        </p>

        <a 
          href="${siteUrl}" 
          target="_blank"
          style="
            display: inline-block;
            background: #111;
            color: white;
            text-decoration: none;
            padding: 12px 18px;
            font-weight: bold;
            margin-top: 12px;
          "
        >
          Siteye Git
        </a>

        <p style="margin-top: 24px; font-size: 12px; color: #666;">
          Bu bildirim, StockWear stok takip sistemi tarafından gönderilmiştir.
        </p>
      </div>
    `
  };

  try {

    const info = await transporter.sendMail(mailOptions);

    console.log("E-mail gönderildi:", user.email);

    return {
      success: true,
      message: `E-mail gönderildi: ${user.email}`,
      messageId: info.messageId
    };

  } catch (error) {
    console.error("E-mail gönderme hatası:", error.message);

    return {
      success: false,
      message: `E-mail gönderilemedi: ${error.message}`
    };
  }
}

module.exports = {
  sendStockEmail
};
