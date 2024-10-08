import { object, string, number } from "yup";

const userSchema = object({
    fname: string()
      .max(5, "Cannot be more than 5 characters in length")
      .required("This field is required"),
    lname: string()
    .min(1, "must be greater than 1 character")
    .max(6, "must be less than 6 characters"),
    age: number()
    .positive("must be a positive number")
    .lessThan(100, "must be less than 100"),
    email: string()
    .required("Email is required")
    .email("Must be correct email format"),
    password: string()
    .min(8, "must be minimum of 8 characters")
    .max(12, "must be less than 12 characters")
  });

  export default userSchema