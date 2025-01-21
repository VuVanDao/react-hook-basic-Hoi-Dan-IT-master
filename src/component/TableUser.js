import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUser } from "../action/actions";
const TableUser = (props) => {
  let dispatch = useDispatch();
  const listUserRedux = useSelector((state) => state.user.listUser);
  // const [listUser, setListUser] = useState();
  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);
  const handleDeleteUser = (user) => {
    console.log(">>", user);
  };
  return (
    <>
      <Container className="mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listUserRedux &&
              listUserRedux.length > 0 &&
              listUserRedux.map((item, index) => {
                return (
                  <tr key={`item-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>
                      <button className="btn btn-outline-primary mx-2">
                        Change
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDeleteUser(item)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default TableUser;
