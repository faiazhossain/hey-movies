import { Layout, Menu } from "antd";

const { Header } = Layout;
const Navbar = () => (
  <Header>
    <div className="logo" />
    <Menu
      mode="horizontal"
      items={[
        { label: "Home", key: "home" },
        { label: "Login", key: "login" },
        { label: "Register", key: "register" },
      ]}
    ></Menu>
  </Header>
);
export default Navbar;
