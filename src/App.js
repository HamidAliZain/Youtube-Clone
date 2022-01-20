import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header/header";
import { Sidebar } from "./components/Sidebar/sidebar";
import { LoginScreen } from "./Display/loginscreen/login";
import { Homescreen } from "./Display/Screen/screen";
import "./_app.scss";
import {BrowserRouter,Routes,Route} from "react-router-dom"


export default function App () {
  const [menu, setMenu] = useState(false);
  const handlemenu = () => setMenu((value) => !value);
  return (
    <>
      <Header handlemenu={handlemenu} />
      <div className="app_container  ">
        <Sidebar menu={menu} handlemenu={handlemenu} />
        <Container fluid className="app_main">
          <Homescreen />
        </Container>
      </div>
    </>
  );
};

