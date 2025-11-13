import "./index.scss";
import { useState } from "react";
import axios from "axios";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function CadastrarAdm() {
    const navigate = useNavigate()
  const [registros, setRegistros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setRegistros((prev) => ({ ...prev, [name]: value }));
  }

  async function enviarDados(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5010/cadastrarAdm", registros);
      alert(response.data.resposta);
      navigate('/logarAdm')
    } catch (error) {
      alert("Erro ao fazer cadastro: " + error.response.data.erro);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Criar Conta</h1>
        <form onSubmit={enviarDados}>
          <label>Nome Completo</label>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={handleChange}
          />


          <label>Email</label>
          <input
            type="text"
            placeholder="seuemail@gmail.com"
            name="email"
            onChange={handleChange}
          />

          <label>Senha</label>
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            onChange={handleChange}
          />

          <button type="submit">Cadastrar</button>
        </form>

        <div className="link-alt">
          <p>
            Já tem uma conta ADM?{" "}
            <Link to="/logarAdm">Entrar aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
