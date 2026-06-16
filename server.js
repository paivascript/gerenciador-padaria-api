 import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("SERVIDOR CARREGOU")

  console.log(`Servidor rodando http://localhost:${PORT}`);
});

