import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizza] = useState([])
  const [p, setP] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:3001/pizzas')
    .then (res => res.json())
    .then (setPizza)
  },[])

  function handleChangeForm (name, value){
    setP({
      ...p,[name]: value
    })
  }

  function handleEdit(updatePizza){
    const updatePizzas = pizzas.map((pizza)=> pizza.id === updatePizza.id ? updatePizza : pizza)
    setP(updatePizza)
    setPizza(updatePizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={p} onChangeForm={handleChangeForm} onEdit={handleEdit}/>
      <PizzaList pizzas={pizzas} onSelectPizza={setP}/>
    </>
  );
}

export default App;
