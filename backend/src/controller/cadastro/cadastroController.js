import { Router } from "express";
import { cadastrarService } from "../../service/cadastro/cadastroService.js";

const cad = Router();

cad.post('/cadastrar', async (req,resp) => {
try {
const informacoes = req.body;

const resposta = await cadastrarService(informacoes);

resp.status(201).send({
    resposta
})
} 
catch (error) {
       global.logErro(error);
     resp.status(400).send(global.criarErro(error));
}

})

export default cad;
