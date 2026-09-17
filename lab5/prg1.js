import express from "express";
import path from 'path'
import { fileURLToPath } from"node:url";
const port = 3333;
const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname  = path.dirname(filename);

app.get("/",(req,res)=>{
    res.sendFile(path.join(dirname, "public", "index.html"));
})

app.get("/story",(req,res)=>{
    res.sendFile(path.join(dirname, "public", "story.html"));
})

app.get("/comparison",(req,res)=>{
    res.sendFile(path.join(dirname, "public", "compare.html"));
})

app.listen(port,()=>console.log("prg1 is running at",port))