import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import CircularProgress from "@mui/material/CircularProgress";
import { useDContext } from "../ContextProvider";
import { Link, useNavigate } from "react-router-dom";

const AdminDoctors = () => {
  const { doctors, getDoctor, delDoctor, idForEdit, clearzapis, clearpas } =
    useDContext();
  const navigate = useNavigate();
  useEffect(() => {
    getDoctor();
  }, []);
  return doctors && doctors.length > 0 ? (
    <TableContainer
      style={{ backgroundColor: "rgb(154, 137, 112)" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: "rgba(71, 57, 36, 0.73)" }}>
          <TableRow>
            <TableCell width="20%">Имя</TableCell>
            <TableCell width="20%">Фамилия</TableCell>
            <TableCell width="20%">Отечество</TableCell>
            <TableCell width="20%">Фото</TableCell>
            <TableCell width="20%">Возраст</TableCell>
            <TableCell width="20%">Моб тел</TableCell>
            <TableCell width="20%">Спец-ть</TableCell>
            <TableCell width="20%">Очистить запись</TableCell>
            <TableCell width="20%">Очистить пациентов</TableCell>
            <TableCell>Изменить</TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell width="19%" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell width="15%">{row.surname}</TableCell>
              <TableCell width="15%">{row.midName}</TableCell>
              <TableCell width="15%">
                <img width="40px" src={row.photo} alt="product/image" />
              </TableCell>
              <TableCell width="20%">{row.age}</TableCell>
              <TableCell width="20%">{row.phone}</TableCell>
              <TableCell width="20%">{row.category}</TableCell>
              <TableCell width="20%">
                <HighlightOffRoundedIcon
                  onClick={() => {
                    clearzapis(row.id);
                  }}
                />
              </TableCell>
              <TableCell width="20%">
                <HighlightOffRoundedIcon
                  onClick={() => {
                    clearpas(row.id);
                  }}
                />
              </TableCell>
              <TableCell width="8%">
                <EditIcon
                  onClick={() => {
                    idForEdit(row.id);
                    navigate("/editdoctor");
                  }}
                />
              </TableCell>
              <TableCell width="8%">
                <HighlightOffRoundedIcon onClick={() => delDoctor(row.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <CircularProgress />
  );
};

export default AdminDoctors;
