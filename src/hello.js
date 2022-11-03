import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("Hallo Ay");
});

app.listen (3000, () => {
    console.info("Server berjalan di 3000");
});

