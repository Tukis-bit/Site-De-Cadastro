import { Router } from "express";
import { cadastrarService, logarService, pegarNomeService } from "../../service/cadastro/cadastroService.js";
import { generateToken,getAuthentication } from "../../utils/jwt.js";

const Autenticador = getAuthentication();
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

cad.post('/logar', async(req,resp) => {
try {
const infos = req.body;

const conta = await logarService(infos);

resp.status(201).send({
  token: generateToken(conta),
  id: conta.id
})
} 
catch (error) {
     global.logErro(error);
     resp.status(400).send(global.criarErro(error));
}

})

cad.get('/pegarNome', Autenticador, async(req,resp) => {
  try {
  const id = req.user.id;
  
  const nome = await pegarNomeService(id);

  resp.status(201).send({
    nome: nome.nome
  })
  } 
  catch (error) {
       global.logErro(error);
     resp.status(400).send(global.criarErro(error));
  }
})
export default cad;
