import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function OlaUsuario() {
  const [nome, setNome] = useState("");
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarNome() {
      try {
        const token = localStorage.getItem("token");
        const resposta = await axios.get("http://localhost:5010/pegarNome", {
          headers: { "x-access-token": token },
        });
        setNome(resposta.data.nome);
      } catch (error) {
        alert("Erro ao carregar nome: " + (error.response?.data?.erro || "erro desconhecido"));
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } finally {
        setCarregando(false);
      }
    }

    carregarNome();
  }, [navigate]);

  if (carregando) return <p>Carregando...</p>;

  return (
    <div className="ola-usuario">
      {nome ? <h1>Olá, {nome}!</h1> : <h1>Nome não encontrado</h1>}
      <button onClick={() => navigate("/logar")}>Voltar para Login</button>
    </div>
  );
}
