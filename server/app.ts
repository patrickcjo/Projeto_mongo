import express from "express";
import mongoose from "mongoose";
import notepadController from "./src/controllers/notepad.controller";

const app = express();
app.use(express.json());

// Conecta ao MongoDB (certifique-se de ter o servidor MongoDB em execução)
mongoose.connect("mongodb://localhost:27017/seu-banco-de-dados", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/notepads", notepadController);

export default app;
