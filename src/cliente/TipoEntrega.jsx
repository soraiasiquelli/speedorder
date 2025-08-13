import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './TipoEntrega.module.css';
import ButtonVoltar from "../layout/ButtonVoltar";

export default function TipoEntrega() {
  const navigate = useNavigate();
  const [opcao, setOpcao] = useState("");
  const [horario, setHorario] = useState("");
  const [data, setData] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Salvar no localStorage para usar depois ao fechar pedido
    localStorage.setItem("tipoEntrega", opcao);

    if (opcao === "Agendar") {
      localStorage.setItem("dataAgendada", data);
      localStorage.setItem("horaAgendada", horario);
    } else {
      localStorage.removeItem("dataAgendada");
      localStorage.removeItem("horaAgendada");
    }

    alert("Opção de entrega registrada com sucesso!");
    navigate("/novopedido")
  };

  return (

   <div className={styles.containerTipoEntrega}>
  
  {/* Header com botão de voltar */}
  <div className={styles.headerTipoEntrega}>
    <ButtonVoltar to={"/homecliente"}/>
    <h1>Escolha quando deseja receber seu pedido</h1>
  </div>

  <form onSubmit={handleSubmit} className={styles.formTipoEntrega}>
    <label>
      <input
        type="radio"
        name="opcao"
        value="Agora"
        checked={opcao === "Agora"}
        onChange={() => setOpcao("Agora")}
      />
      Para agora
    </label>

    <label>
      <input
        type="radio"
        name="opcao"
        value="Viagem"
        checked={opcao === "Viagem"}
        onChange={() => setOpcao("Viagem")}
      />
      Para viagem
    </label>

    <label>
      <input
        type="radio"
        name="opcao"
        value="Agendar"
        checked={opcao === "Agendar"}
        onChange={() => setOpcao("Agendar")}
      />
      Agendar para horário específico
    </label>

    {opcao === "Agendar" && (
      <div className={styles.agendarContainer}>
        <label>
          Data:
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </label>
        <label>
          Horário:
          <input
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
          />
        </label>
      </div>
    )}

    <button type="submit" className={styles.btnConfirmar} disabled={!opcao}>
      Confirmar
    </button>
  </form>
</div>

  );
}
