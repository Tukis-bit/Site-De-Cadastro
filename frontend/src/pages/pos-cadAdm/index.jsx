import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PosCadAdm() {
  const navigate = useNavigate();
  const [admsAguardando, setAdmsAguardando] = useState([]);
  const [quantidadeCadastros, setQuantidadeCadastros] = useState(0);
  const [quantidadeAdmsPermitidos, setQuantidadeAdmsPermitidos] = useState(0);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Token não encontrado. Faça login novamente.");
          navigate("/logarAdm");
          return;
        }
        const respostaAdms = await axios.get("http://localhost:5010/pegarNomes", {
          headers: { "x-access-token": token }
        });
        setAdmsAguardando(respostaAdms.data.registros);

        const respostaContagem = await axios.get("http://localhost:5010/contarCadastros", {
          headers: { "x-access-token": token }
        });
        setQuantidadeCadastros(respostaContagem.data.registros.quantidade);

        const respostaAdmsPermitidos = await axios.get("http://localhost:5010/contarAdmsPermitidos", {
          headers: { "x-access-token": token }
        });
        setQuantidadeAdmsPermitidos(respostaAdmsPermitidos.data.registros.quantidade);
      } catch (error) {
        alert("Erro ao carregar dados: " + (error.response?.data?.erro || "Erro desconhecido"));
      } finally {
        setCarregando(false);
      }
    }

    carregarDados();
  }, [navigate]);

  async function concederPermissao(id) {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Token não encontrado. Faça login novamente.");
        navigate("/logarAdm");
        return;
      }
      const resposta = await axios.post(`http://localhost:5010/permitirADM/${id}`, {}, {
        headers: { "x-access-token": token }
      });
      alert(resposta.data.resposta);
      // Recarregar a lista após conceder permissão
      const respostaLista = await axios.get("http://localhost:5010/pegarNomes", {
        headers: { "x-access-token": token }
      });
      setAdmsAguardando(respostaLista.data.registros);
    } catch (error) {
      alert("Erro ao conceder permissão: " + (error.response?.data?.erro || "Erro desconhecido"));
    }
  }

  if (carregando) return <p>Carregando...</p>;

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Painel do ADM</h1>
        <div className="quantidade-cadastros">
          <p>Total de cadastros: {quantidadeCadastros}</p>
          <p>Adms permitidos: {quantidadeAdmsPermitidos}</p>
        </div>
        <h2>Admins aguardando permissão:</h2>
        {admsAguardando.length === 0 ? (
          <p>Nenhum admin aguardando permissão.</p>
        ) : (
          <ul>
            {admsAguardando.map((adm) => (
              <li key={adm.id}>
                {adm.nome}
                <button onClick={() => concederPermissao(adm.id)}>Permitir Acesso</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => navigate("/logarAdm")}>Voltar para Login</button>
      </div>
    </div>
  );
}
