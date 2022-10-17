import React from "react";
import Item from "../Itens";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Text = () => {
  return (
    <C.Container>
      <Item title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
      <Item title="Saidas" Icon={FaRegArrowAltCircleDown} value="1000" />
      <Item title="Total" Icon={FaDollarSign} value="1000" /> 
    </C.Container>
  );
};
export default Text;
