import { Router } from "express";
import { cadastrarAdmService, logarAdmService, permitirAdmService } from "../../service/cadastro_adm/cadastroAdmService.js";
import { generateToken, getAuthentication } from "../../utils/jwt.js";

const Autenticador = getAuthentication();
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
});

cadAdm.post('/logarAdm', async(req,resp) => {
    try {
    const infos = req.body;

    const registros = await logarAdmService(infos);

    resp.status(201).send({
        token: generateToken(registros),
        id: registros.id
    })
    } 
    catch (error) {
          global.logErro(error);
     resp.status(400).send(global.criarErro(error));
    }
})

cadAdm.post('/permitirADM/:id_requerido',Autenticador , async(req,resp) => {
    try {
    const id_adm = req.user.id;
    
    const id_requerido = req.params.id_requerido;

    const resposta = await permitirAdmService(id_adm,id_requerido);

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