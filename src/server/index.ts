import express from "express";

const app = express();
app.get("/api/hello", (_, res) => res.send("Hi"));
app.use(express.static(process.cwd() + "/dist")); // running when use vite bundle code
app.listen(2001, () => console.log("Started"));
