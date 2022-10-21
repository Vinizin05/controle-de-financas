import React from "react";
import Item from "../Itens";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Text = ({ income, expense, total }) => {
  return (
    <C.Container>
      <Item title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <Item title="Saidas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <Item title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Text;
