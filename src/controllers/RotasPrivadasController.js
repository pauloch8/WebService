class GenericoController {

    ler(req, res){
        return res.status(200).json({
            resposta: "Resposta Genérica" 
        });
    }

    gravar(){

    }

}

module.exports = new GenericoController;