import { useForm } from "react-hook-form";

export default function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleRegistration = (formData) => {
    console.log("Form submitted!");
    console.log(formData);
  };
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name cannot be blank. " },
    email: { required: "Email cannot be blank." },
    password: {
      required: "Password is required.",
      minLength: {
        value: 10,
        message: "Passwor must be at least 10 characters",
      },
    },
    quantity: {
      required: "Quantity is required",
      min: { value: 0, message: "Quantity must be greater than 0" },
      max: {
        value: 10,
        message: "Quantity must be less than 10",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <label htmlFor="username">
          <input type="text" id="username"></input>
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}
