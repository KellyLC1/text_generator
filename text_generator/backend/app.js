require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");


const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// routes
app.use("/api/auth", require("./routes/auth.routes"));
app.get("/generate", (req, res) => {
  const { seed = "Début", length = 100 } = req.query;
  const texte = `Voici un texte généré temporaire pour tester le flux. Seed: ${seed}, Length: ${length}`;
  res.json({ texte });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
