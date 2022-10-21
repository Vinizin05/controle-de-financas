import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList ,SetTransactionsList }) => {
  const [desc, SetDesc] = useState("");
  const [amount, SetAmount] = useState("");
  const [isExpense, SetExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    SetDesc("");
    SetAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.label>Descrição</C.label>
          <C.Input value={desc} onChange={(e) => SetDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.label>Valor</C.label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => SetAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChenge={() => SetExpense(!isExpense)}
          />
          <C.label htmlFor="rIncome">Entrada</C.label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => SetExpense(!isExpense)}
          />
          <C.label htmlFor="rIcome">Saida</C.label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>
      <Grid Itens={transactionsList} setItens={SetTransactionsList} />
    </>
  );
};

export default Form;
