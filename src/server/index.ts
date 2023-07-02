import express from "express";

const app = express();
app.get("/api/hello", (req, res) => res.send("Hi"));
app.listen(2001, () => console.log("Started"));
