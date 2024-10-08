import { useState } from "react";
import { useForm } from "react-hook-form";
// import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "./components/helper";

function App() {
  // const userSchema = object({
  //   fname: string()
  //     .max(5, "Cannot be more than 5 characters in length")
  //     .required("This field is required"),
  //   lname: string()
  //   .min(1, "must be greater than 1 character")
  //   .max(6, "must be less than 6 characters"),
  //   age: number()
  //   .positive("must be a positive number")
  //   .lessThan(100, "must be less than 100"),
  //   email: string()
  //   .required("Email is required")
  //   .email("Must be correct email format"),
  //   password: string()
  //   .min(8, "must be minimum of 8 characters")
  //   .max(12, "must be less than 12 characters")
  // });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleChange = (event) => {
    setValue(event.target.name, event.target.value);
    {
      /* Set value takes 2 inputs: name of input and value assigned to that target*/
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        {/* Utilizing built in handleSubmit from useForm*/}
        <label htmlFor="fname"> First Name: </label>
        <input
          type="text"
          {...register("fname")}
          id="fname"
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.fname && <span>{errors.fname.message}</span>}
        {/* replaced name with useForm format*/}
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          {...register("lname")}
          id="lname"
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.lname && <span>{errors.lname.message}</span>}
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          {...register("age")}
          id="age"
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.age && <span>{errors.age.message}</span>}
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          {...register("email")}
          id="email"
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.email && <span>{errors.email.message}</span>}
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          {...register("password")}
          id="password"
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
