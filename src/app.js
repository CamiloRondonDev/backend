import express from 'express'
import categoriasRouters from "./routes/categorias.routes.js"

const app = express();
app.set("port",5000);

app.use("/api/categorias",categoriasRouters)

export default app;