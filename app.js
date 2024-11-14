const express = require("express");
const bodyParser = require("body-parser");
const seriesRoutes = require("./routes/seriesRoutes");
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error de conexión a la base de datos", error);
    process.exit(1);
  }
};

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use("/api", seriesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
