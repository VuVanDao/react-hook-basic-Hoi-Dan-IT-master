import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Header from "./Header";
import TableUser from "./TableUser";
import FormAddUser from "./FormAddUser";

const Home = (props) => {
  return (
    <>
      <Header />
      <FormAddUser />
      <TableUser />
    </>
  );
};
export default Home;
