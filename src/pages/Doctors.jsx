import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDContext } from "../components/ContextProvider";
import "./Doctors.css";

const Doctors = () => {
  const { doctors, getDoctor, delDoctor, idForEdit } = useDContext();
  useEffect(() => {
    getDoctor();
  }, []);
  return (
    <div
      className="doctorcont1"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="doctorcont">
        {doctors && doctors.length > 0 ? (
          doctors.map((item) => (
            <Card
              key={item.id}
              sx={{ maxWidth: 320, height: 460, margin: "10px" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={item.photo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.surname} {item.name} {item.midName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.category} <br />
                  {`Возраст: ${item.age}`} <br />
                  {`Контакты: ${item.phone}`}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <h1>asas</h1>
        )}
      </div>
    </div>
  );
};

export default Doctors;
