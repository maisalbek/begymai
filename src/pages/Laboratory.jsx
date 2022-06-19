import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDContext } from "../components/ContextProvider";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./Laboratory.css";

const Laboratory = () => {
  const navigate = useNavigate();
  const { doctors, getDoctor } = useDContext();

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <div className="doctorcont">
      {doctors && doctors.length > 0 ? (
        doctors.map((item) => (
          <Card
            key={item.id}
            sx={{ maxWidth: 320, height: 440, margin: "10px" }}
            onClick={() => {
              navigate(`/room/${item.id}`);
            }}
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
              <Typography gutterBottom variant="h6" component="div">
                {"Кабинет № " + item.id}
              </Typography>
              {/* <Room item={item} /> */}
            </CardContent>
          </Card>
        ))
      ) : (
        <h1>asas</h1>
      )}
    </div>
  );
};

export default Laboratory;
