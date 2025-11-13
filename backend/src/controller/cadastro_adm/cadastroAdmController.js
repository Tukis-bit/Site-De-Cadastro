import { Router } from "express";
import { cadastrarAdmService } from "../../service/cadastro_adm/cadastroAdmService.js";

const cadAdm = Router();

cadAdm.post('/cadastrarAdm', async(req,resp) => {
    try {
    const infos = req.body;
    
    const resposta = await cadastrarAdmService(infos);

    resp.status(201).send({
        resposta
    })
    } 
    catch (error) {
         global.logErro(error);
     resp.status(400).send(global.criarErro(error));
    }
})

export default cadAdm;