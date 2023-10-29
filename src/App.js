import React, { useState, useEffect } from "react";

import Router from "./Routers";
import Home from "./components/Home";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Tick from "./assests/images/tick1.png";
import Cross from "./assests/images/cross1.png";

function App() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("message here");
  const [alertStatus, setAlertStatus] = useState("error");

  const alert = {
    setShow: setShow,
    setAlertStatus: setAlertStatus,
    setMessage: setMessage,
  };

  const divStyle = {
    background: alertStatus === "success" ? "#1aae13" : "#FF0000",
  };

  return (
    <div>
      <div>
        <ToastContainer
          className="p-3 fixed-toast"
          position="bottom-end"
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            autohide
            delay={3000}
            style={divStyle}
          >
            <Toast.Body>
              {alertStatus === "success" ? (
                <img src={Tick} height="30px" />
              ) : (
                <img src={Cross} height="30px" />
              )}
              <span className="text-white ms-2 " style={{ fontWeight: "450" }}>
                {message}
              </span>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
      <Router alert={alert} />
    </div>
  );
}

export default App;
