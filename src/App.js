import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { UserAuthContextProvider } from "./context/Auth";
import ProtectedRoutes from  "./components/ProtectedRoutes";
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" 
              element=
              {<ProtectedRoutes>
                <Home/>
                </ProtectedRoutes>} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
