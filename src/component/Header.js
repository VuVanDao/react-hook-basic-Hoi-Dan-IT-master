import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import TableUser from "./TableUser";

const Header = (props) => {
  let countUser = useSelector((state) => state.user.listUser);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Header</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown
              title={`total ${countUser.length} user`}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>
                <TableUser />
              </NavDropdown.Item>
              {/* {countUser &&
                countUser.length > 0 &&
                countUser.map((item, index) => {
                  return (
                    <NavDropdown.Item href="#" key={`user-${index}`}>
                      {item.username}|| {item.email}
                    </NavDropdown.Item>
                  );
                })} */}
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
