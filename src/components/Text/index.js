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
      <Item title="entradas" Icon={FaRegArrowAltCircleUp} />
      <Item title="saidas" Icon={FaRegArrowAltCircleDown} />
      <Item title="total" Icon={FaDollarSign} />
    </C.Container>
  );
};
export default Text;
