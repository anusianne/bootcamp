import { useState } from "react";

export default function ValidatedShoppingListForm({addItem}) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [productIsValid, setProductIsValid] = useState(false)
  const validate = (product) => {
    if (product.length === 0) {
        setProductIsValid(false)
    } else {
        setProductIsValid(true)
    }
  }
  
  const handleChange = (e) => {
    if (e.target.name === 'product') {
        validate(e.target.value)
    }
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(productIsValid) {
        addItem(formData);
        setFormData({product: '', quantity: 0})
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <h1>Product is: {formData.product}</h1>
      <label htmlFor="product">Product name: </label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value = {formData.product}
      />
      {!productIsValid && ( <p style={{color: "red"}}>Product name canoot be empty!</p>)}
      <h1>Qty is: {formData.qty}</h1>
      <label htmlFor="quantity">Product name: </label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value = {formData.qty}
      />
      <button onClick={handleSubmit}>Add Item</button>
    </form>
  );
}
