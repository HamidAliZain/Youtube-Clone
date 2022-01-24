import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header/header";
import { Sidebar } from "./components/Sidebar/sidebar";
import { LoginScreen } from "./Display/loginscreen/login";
import { Homescreen } from "./Display/Screen/screen";
import "./_app.scss";
import { render } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const [menu, setMenu] = useState(false);

  const handlemenu = () => setMenu((value) => !value);

  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      history("/login");
    }
  }, [accessToken, loading, history]);
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
}
