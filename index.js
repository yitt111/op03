import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("首頁");
});

app.get("/selly", (req, res)=>{
    res.send("selly 的首頁");
});

app.listen(3005,()=>{})