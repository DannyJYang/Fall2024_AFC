import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, Button, Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string, number } from "yup";

export default function Form() {
  const personSchema = object({
    first_name: string().required("Must have a first name").min(2),
    last_name: string().max(7, "Must be less than 7 chars"),
  });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personSchema),
  });

  const handleChange = (e) => {
    setValue(e.target.name, e.target.value);
    // let fname = watch("first_name")
    console.log(watch());
  };

  const onSubmit = (data) => {
    let JSONData = JSON.stringify(data) //and then send this data somewhere
    //Something like this:
    // let options = {
    //     method: "POST",
    //     body: JSONData
    // }
    // axios.request()
    // .then()
    // .catch()
    console.log(JSONData);
    
    reset();
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate //don't use MUI built in HTML validation
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        {...register("first_name")}
        onChange={handleChange}
        helperText={
          errors.first_name && <span>{errors.first_name.message}</span>
        }
        error={errors.first_name !== undefined}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        {...register("last_name")}
        onChange={handleChange}
        helperText={
          errors.last_name && <span>{errors.last_name.message}</span>
        }
        error={errors.first_name !== undefined}
      />
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained" color="success">
          Submit
        </Button>
        <Button onClick={() => reset()} variant="outlined" color="error">
          Reset
        </Button>
      </Stack>
    </Box>
  );
}
