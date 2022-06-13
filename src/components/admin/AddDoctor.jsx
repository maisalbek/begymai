import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useDContext } from "../ContextProvider";

export default function AddDoctor() {
  const initValues = {
    name: "",
    surname: "",
    midName: "",
    age: "",
    photo: "",
    phone: "",
    category: "",
  };
  const { addDoctor } = useDContext();
  const [inpValues, setInpValues] = React.useState(initValues);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSubmit = () => {
    if (
      inpValues.name ||
      inpValues.category ||
      inpValues.age ||
      inpValues.surname ||
      inpValues.midName ||
      inpValues.phone ||
      inpValues.photo
    ) {
      addDoctor(inpValues);
      setInpValues(initValues);
    } else {
      alert("Ошибка заполните поля!");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { minwidth: "320px" },
      }}
    >
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.name}
        name="name"
        label={"Имя"}
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.surname}
        name="surname"
        label={"Фамилия"}
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.midName}
        name="midName"
        label={"Отечество"}
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.photo}
        name="photo"
        label={"Фото"}
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.age}
        name="age"
        label={"Возраст"}
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.phone}
        name="phone"
        label={"Мобиьный телефон"}
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        value={inpValues.category}
        name="category"
        label={"Специальность"}
        sx={{ backgroundColor: "#e0e0e0" }}
      />
      <Button
        variant="contained"
        style={{ marginTop: "5px" }}
        onClick={() => handleSubmit()}
      >
        Add
      </Button>
    </Box>
  );
}
