const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Crear la app de Express
const app = express();
app.use(cors()); // Habilitar CORS para permitir solicitudes del frontend
app.use(express.json()); // Habilitar el parsing de JSON en solicitudes

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Puedes usar Gmail o cualquier otro servicio
  auth: {
    user: "joserozpide@gmail.com", // Reemplaza con tu correo de Gmail
    pass: "1970JLrhEuldlmdcnnqa0791", // Reemplaza con tu contraseña de Gmail
  },
});

// Ruta para enviar correos electrónicos
app.post("/send-email", (req, res) => {
  const { comments, likes } = req.body;

  // Configuración del correo electrónico
  const mailOptions = {
    from: "tu-correo@gmail.com", // El remitente
    to: "joserozpide@yahoo.es", // El correo al que se enviará (el destinatario)
    subject: "Comentarios y Likes de la Publicación", // Asunto del correo
    text: `Likes totales: ${likes}\n\nComentarios:\n${comments}`, // El cuerpo del correo
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).json({ message: "Error al enviar el correo" });
    } else {
      console.log("Correo enviado:", info.response);
      res.status(200).json({ message: "Correo enviado exitosamente" });
    }
  });
});

// Iniciar el servidor en el puerto 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
