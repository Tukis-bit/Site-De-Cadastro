import "./index.scss";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export function Login() {
  const navigate = useNavigate();
    const [registros, setRegistros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setRegistros((prev) => ({ ...prev, [name]: value }));
  }

  async function enviarDados(e) {
    e.preventDefault();
    try {
      const resposta = await axios.post("http://localhost:5010/logar", registros);
      const token = resposta.data.token;
      if (!token) {
        alert("Nenhum token recebido. Verifique o backend.");
        return;
      }
      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-access-token"] = token;
      alert("Login realizado com sucesso!");

      navigate('/olaUsuario')
    } catch (error) {
      alert("Erro ao fazer login: " + error.response.data.erro);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Entrar</h1>
        <form onSubmit={enviarDados}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="seuemail@gmail.com"
            onChange={handleChange}
          />
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            placeholder="Sua senha"
            onChange={handleChange}
          />
          <button type="submit">Entrar</button>
        </form>

        <div className="link-alt">
          <p>
            Ainda não tem conta?{" "}
            <Link to="/">Cadastre-se aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
