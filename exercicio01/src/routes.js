const express = require("express");
const router = express.Router();
const DB = require("./characters");

router.get("/characters", (req, res) => {
    return res.json(DB.characters);
});

router.get("/characters/:id", (req, res) => {
    if(isNaN(req.params.id)){

       return res.sendStatus(400);
    
    }else{
        const id = parseInt(req.params.id);
        const character = DB.characters.find((element) => element.id === id);

        if(character){
            return res.json(character);
        }else{
            return res.status(404).json({msg:"Personagem não encontrado"});
        }
    }
});

router.delete("/characters/:id", (req, res) => {
    if(isNaN(req.params.id)){

       return res.sendStatus(400);
    
    }else{
        const id = parseInt(req.params.id);
        const index = DB.characters.findIndex((element) => element.id === id);

        if(index == -1){
            return res.status(404).json({msg:"Personagem não encontrado!"});
        }else{
            DB.characters.splice(index, 1);
            return res.json({msg:"Personagem foi deletado!"});
        }
    }
});

router.put("/characters/:id", (req, res) => {
    if(isNaN(req.params.id)){

       return res.sendStatus(400);
    
    }else{
        const id = parseInt(req.params.id);
        const index = DB.characters.findIndex((element) => element.id === id);

        if(index != undefined){
            
        }else{
            
        }
    }
});

module.exports = router;