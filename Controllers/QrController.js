const qrcode = require("qrcode");

exports.index = (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.error(error);
  }
};

exports.generate = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.send("Text is required");
  }

  try {
    const qrImage = await qrcode.toDataURL(text);
    res.render("result", { qrImage, text });
  } catch (err) {
    console.error(err);
    res.status(500).send("QR code generation failed");
  }
};
