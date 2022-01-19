import { useState } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header/header";
import { Sidebar } from "./components/Sidebar/sidebar";
import { LoginScreen } from "./Display/loginscreen/login";
import { Homescreen } from "./Display/Screen/screen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./_app.scss";

const [menu, setMenu] = useState(false);
const handlemenu = () => setMenu((value) => !value);

const Layout = ({ child }) => {
  <>
    <Header handlemenu={handlemenu} />
    <div className="app_container  ">
      <Sidebar menu={menu} handlemenu={handlemenu} />
      <Container fluid className="app_main  ">
        {child}
      </Container>
    </div>
  </>;
};

function App() {
  return (
    <Route>
      <Route path="/">
        <Layout>
          <Homescreen />
        </Layout>
      </Route>
      <Route path="/auth">
        <LoginScreen />
      </Route>
    </Route>
  );
}

export default App;
