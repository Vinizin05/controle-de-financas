import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Text from "./components/Text";
import GlobalStyle from "./styles/global";

const App = () => {
  const Data = localStorage.getItem("transactions");
  const [transactionsList, SetTransactionsList] = useState(
    Data ? JSON.parse(Data) : []
  );
  const [income, SetIncome] = useState(0);
  const [expense, SetExpense] = useState(0);
  const [total, SetTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((Item) => Item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((Item) => !Item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    SetIncome(`R$ ${income}`);
    SetExpense(`R$ ${expense}`);
    SetTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    SetTransactionsList(newArrayTransactions);

    localStorage.SetItem("transactions",JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Text income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} SetTransactionsList={SetTransactionsList}/>
      <GlobalStyle />
    </>
  );
};

export default App;
