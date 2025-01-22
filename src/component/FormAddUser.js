import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNewUser } from "../action/actions";
const FormAddUser = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const isLoading = useSelector((state) => state.user.isLoading);
  const handleCreateUser = () => {
    dispatch(createNewUser({ email, password, username }));
    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    <>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Vu Van Dao"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={() => handleCreateUser()}
            disabled={isLoading}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default FormAddUser;
