const dotenv= require("dotenv");

dotenv.config();

const fs= require("fs")
const express = require("express");
const app= express();

const PORT = process.env.PORT|| 4000;

app.get("/",(require,response)=>{
    response.send("estamos vivos")
})
app.get("/jugadores",(require,response)=>{
    fs.readFile(__dirname+"/jugadores.json","utf-8",(err,data)=>{
        if(err){
            console.error(err);
            return response.status(500).json({error:"Error al leer el archivo"});
        }
        const jsonData = JSON.parse(data);
        response.json(jsonData);
    });
})
app.listen(PORT,()=>{
    console.log("esta funcionando todo bien en el puerto "+PORT)

})

