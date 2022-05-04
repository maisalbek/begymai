import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useDContext } from "../ContextProvider";
import "./Edit.css";
import { useNavigate } from "react-router-dom";

export default function EditDoctor() {
  const initValues = {
    name: "",
    surname: "",
    midName: "",
    age: "",
    photo: "",
    phone: "",
    category: "",
  };
  const { objForEdit, saveDoctor } = useDContext();
  const [editValues, setEditValues] = React.useState(initValues);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (objForEdit) {
      setEditValues(objForEdit);
    }
  }, [objForEdit]);

  const handleChange = (e) => {
    let obj = {
      ...editValues,
      [e.target.name]: e.target.value,
    };
    setEditValues(obj);
  };

  const handleSubmit = () => {
    if (
      editValues.name ||
      editValues.category ||
      editValues.age ||
      editValues.surname ||
      editValues.midName ||
      editValues.phone ||
      editValues.photo
    ) {
      saveDoctor(editValues);
      setEditValues(initValues);
      navigate("/admin");
    } else {
      alert("Ошибка заполните поля!");
    }
  };
  return (
    <div className="editcont">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "320px" },
        }}
      >
        <TextField
          onChange={(e) => handleChange(e)}
          value={editValues.name}
          name="name"
          label={"Имя"}
          sx={{ backgroundColor: "#e0e0e0" }}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          value={editValues.surname}
          name="surname"
          label={"Фамилия"}
          sx={{ backgroundColor: "#e0e0e0" }}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          value={editValues.midName}
          name="midName"
          label={"Отечество"}
          sx={{ backgroundColor: "#e0e0e0" }}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          value={editValues.photo}
          name="photo"
          label={"Фото"}
          sx={{ backgroundColor: "#e0e0e0" }}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          value={editValues.age}
          name="age"
          label={"Возраст"}
          sx={{ backgroundColor: "#e0e0e0" }}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          value={editValues.phone}
          name="phone"
          label={"Мобиьный телефон"}
          sx={{ backgroundColor: "#e0e0e0" }}
        />
        <FormControl sx={{ width: "320px" }}>
          <InputLabel id="demo-simple-select-label">Специальность</InputLabel>
          <Select
            value={editValues.category}
            name="category"
            labelId="demo-simple-select-label"
            label="Категория"
            onChange={(e) => handleChange(e)}
            sx={{ backgroundColor: "#e0e0e0" }}
          >
            <MenuItem sx={{ backgroundColor: "#e0e0e0" }} value="Хирург">
              Хирург
            </MenuItem>
            <MenuItem sx={{ backgroundColor: "#e0e0e0" }} value="Нерволог">
              Нерволог
            </MenuItem>
            <MenuItem sx={{ backgroundColor: "#e0e0e0" }} value="Кардиолог">
              Кардиолог
            </MenuItem>
            <MenuItem sx={{ backgroundColor: "#e0e0e0" }} value="Стомотолог">
              Стомотолог
            </MenuItem>
            <MenuItem sx={{ backgroundColor: "#e0e0e0" }} value="Детский врач">
              Детский врач
            </MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button
            variant="contained"
            style={{ margin: "5px 3px 0 0", width: "45%" }}
            onClick={() => handleSubmit()}
          >
            Save
          </Button>
          <Button
            variant="contained"
            style={{ marginTop: "5px 0 0 3px", width: "45%" }}
            onClick={() => navigate("/admin")}
          >
            Отмена
          </Button>
        </div>
      </Box>
    </div>
  );
}
