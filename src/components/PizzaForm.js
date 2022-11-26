import React from "react";

function PizzaForm({onEdit,pizza,onChangeForm}) {

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizza),
    })
    .then (res=>res.json())
    .then(onEdit)
  }

  function handleInput(e){
    onChangeForm(e.target.name, e.target.value)
  }

  function handleRadio(e){
    onChangeForm(e.target.name, e.target.value === "Vegetarian")
  }

  if (!pizza) return null
  const{topping, size, vegetarian } = pizza


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleInput}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size"
          value={size}
          onChange={handleInput}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleRadio}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleRadio}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
