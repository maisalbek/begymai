import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDContext } from "../components/ContextProvider";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./Laboratory.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
            sx={{
              width: 300,
              height: 440,
              margin: "10px",
              cursor: "pointer",
            }}
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
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "30%",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: "16px" }}
              >
                {item.surname} {item.name} {item.midName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {"Кабинет № " + item.id}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Laboratory;
