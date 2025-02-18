import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API conectada com sucesso!" });
});

app.post("/dados", (req, res) => {
  console.log("Recebido:", req.body);
  res.json({ status: "OK", recebido: req.body });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));
