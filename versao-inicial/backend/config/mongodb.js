const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/knowledge_stats")
  .then((_) => {
    const msg = "MongoDB Conectado!";
    console.log(msg);
  })
  .catch((e) => {
    const msg = "ERRO! Não foi possível conectar com o MongoDB!";
    console.log("\x1b[41%s\x1b[37m", msg, "\x1b[0m");
  });
