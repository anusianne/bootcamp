import { useState } from "react";

export default function ValidatedShoppingListForm() {
  const [formData, setFormData] = useState({ product: "", qty: 0 });
  const [productIsValid, setProductIsValid] = useState(false)
  const handleChange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };
  return (
    <form action="">
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
      <label htmlFor="qty">Product name: </label>
      <input
        type="number"
        placeholder="1"
        name="qty"
        id="qty"
        onChange={handleChange}
        value = {formData.qty}
      />
    </form>
  );
}
