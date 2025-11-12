import "./index.scss";
import { useState } from "react";
import axios from "axios";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function Inicio() {
    const navigate = useNavigate()
  const [registros, setRegistros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setRegistros((prev) => ({ ...prev, [name]: value }));
  }

  async function enviarDados(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5010/cadastrar", registros);
      alert("Cadastro realizado com sucesso!");
      navigate('/logar')
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

          <label>Data de Nascimento</label>
          <IMaskInput
            mask="00/00/0000"
            placeholder="DD/MM/AAAA"
            name="nascimento"
            onChange={handleChange}
            type="text"
          />

          <label>CPF</label>
          <IMaskInput
            mask="000.000.000-00"
            placeholder="000.000.000-00"
            name="cpf"
            value={registros.cpf || ""}
            onAccept={(value) =>
              handleChange({ target: { name: "cpf", value } })
            }
          />

          <label>Email</label>
          <input
            type="text"
            placeholder="seuemail@gmail.com"
            name="email"
            onChange={handleChange}
          />

          <label>Sexo</label>
          <select name="sexo" onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outros">Outros</option>
          </select>

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
            Já tem uma conta?{" "}
            <Link to="/logar">Entrar aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
