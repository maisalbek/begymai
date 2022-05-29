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
import { useDContext } from "../components/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

const Db = () => {
  const { data, getData, delData } = useDContext();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <button
        style={{
          width: "100px",
          height: "50px",
          backgroundColor: "black",
          color: "#c2c1be",
          margin: "30px 0",
        }}
        onClick={() => navigate("/admin")}
      >
        Назад
      </button>
      <TableContainer
        style={{ backgroundColor: "rgb(154, 137, 112)" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 320 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "rgba(71, 57, 36, 0.73)" }}>
            <TableRow>
              <TableCell width="20%">Имя</TableCell>
              <TableCell width="20%">Пин</TableCell>
              <TableCell width="20%">Телефон</TableCell>
              <TableCell width="20%">Врач</TableCell>
              <TableCell width="20%">Дата</TableCell>
              <TableCell width="40%">Время</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell width="19%" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell width="15%">{row.PIN}</TableCell>
                <TableCell width="15%">{row.number}</TableCell>
                <TableCell width="20%">{row.doctor}</TableCell>
                <TableCell width="20%">{row.date}</TableCell>
                <TableCell width="20%">{row.time}</TableCell>
                <TableCell width="8%">
                  <HighlightOffRoundedIcon onClick={() => delData(row.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Db;
