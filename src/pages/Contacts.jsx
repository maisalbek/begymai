import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contactscont">
      <div className="secCont">
        <div className="box1">
          <h3 style={{ margin: "20px 0" }}>Будьте с нами в:</h3>
          <div className="imagescont">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ margin: "0 10px" }}
                width="40px"
                src="https://www.iconpacks.net/icons/1/free-whatsapp-icon-121-thumb.png"
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ margin: "0 20px" }}
                width="40px"
                src="https://icon-library.com/images/instagram-png-icon/instagram-png-icon-12.jpg"
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <img
                style={{ margin: "0 20px" }}
                width="40px"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png"
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <img
                style={{ margin: "0 20px" }}
                width="40px"
                src="https://cdn-icons-png.flaticon.com/512/60/60543.png"
                alt=""
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ marginBottom: "0" }}>+996(705) 819 944</p>
            <p style={{ marginTop: "2px" }}>+996(508) 819 944</p>
          </div>
        </div>
      </div>
      <iframe
        style={{
          marginTop: "10px",
          bottom: "0",
          width: "70%",
          height: "400px",
          allowfullscreen: "",
          loading: "lazy",
          referrerpolicy: "no-referrer-when-downgrade",
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5808.651057460523!2d74.58688184281486!3d42.847459951135825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9dbdc3d4eef%3A0x6a75a5244d9c79f8!2sKgtu%20Im.%20I.%20Razzakova!5e0!3m2!1sen!2skg!4v1650197416101!5m2!1sen!2skg"
      ></iframe>
    </div>
  );
};

export default Contacts;
