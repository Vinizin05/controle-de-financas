import React from "react";
import GridItem from "../GridItem";
import Item from "../Itens";
import * as C from "./styles";

const Grid = ({ Itens, SetItens }) => {
  const onDelete = (ID) => {
    const newArray = Item.filter((transaction) => transaction.id !== ID);
    SetItens(newArray);
    localStorage.setItens("transactions", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Decrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {Itens?.map((Item, index) => (
          <GridItem key={index} Item={Item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
