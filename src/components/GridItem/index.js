import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ Item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{Item.desc}</C.Td>
      <C.Td>{Item.amount}</C.Td>
      <C.Td alignCenter>
        {Item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(Item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
