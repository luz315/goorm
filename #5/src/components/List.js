import React from "react";
import Item from "./Item";
import { MdDelete } from "react-icons/md";
const List = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn1" onClick={clearItems}>
          목록 지우기
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default List;