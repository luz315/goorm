import React, { useState, useEffect } from "react";
import "./App.css";
import Add from "./components/Add";
import List from "./components/List";
import Alert from "./components/Alert";
import {v4 as uuid} from "uuid";

// ];
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function App() {
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [cost, setCost] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // id
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("called");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  // *********** functionality **************
  //add charge
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  // add amount
  const handleCost = e => {
    let cost = e.target.value;
    if (cost === "") {
      setCost(cost);
    } else {
      setCost(parseInt(cost));
    }
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && cost > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, cost } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: uuid(), charge, cost };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
      }
      // set charge back to empty string
      setCharge("");
      // set amount back to zero
      setCost("");
    } else {
      handleAlert({
        type: "danger",
        text: `데이터가 입력되지 않거나 지출항목이 중복되었습니다.`
      });
    }
  };
  // handle delete
  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "아이템이 삭제되었습니다." });
  };
  //clear all items
  const clearItems = () => {
    setExpenses([]);
  };
  // handle edit
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, cost } = expense;
    setCharge(charge);
    setCost(cost);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>예산 계산기</h1>
      <main className="App">
        <Add
          handleSubmit={handleSubmit}
          name={charge}
          handleCharge={handleCharge}
          cost={cost}
          handleCost={handleCost}
          edit={edit}
        />
        <List
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h2>
        총지출: {" "}
          {expenses.reduce((acc, curr)=>{
          return acc+= curr.cost;
        },0)}원
      </h2>
    </>
  );
}

export default App;