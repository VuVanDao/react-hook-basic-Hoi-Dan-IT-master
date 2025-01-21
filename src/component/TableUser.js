import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUser } from "../action/actions";
import "./loading.css";
const TableUser = (props) => {
  let dispatch = useDispatch();
  const listUserRedux = useSelector((state) => state.user.listUser);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);
  // const [listUser, setListUser] = useState();
  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);
  const handleDeleteUser = (user) => {
    console.log(">>", user);
  };
  return (
    <>
      {isError ? (
        <div>Error.......</div>
      ) : (
        <>
          {isLoading ? (
            <div
              aria-label="Orange and tan hamster running in a metal wheel"
              role="img"
              className="wheel-and-hamster"
            >
              <div className="wheel"></div>
              <div className="hamster">
                <div className="hamster__body">
                  <div className="hamster__head">
                    <div className="hamster__ear"></div>
                    <div className="hamster__eye"></div>
                    <div className="hamster__nose"></div>
                  </div>
                  <div className="hamster__limb hamster__limb--fr"></div>
                  <div className="hamster__limb hamster__limb--fl"></div>
                  <div className="hamster__limb hamster__limb--br"></div>
                  <div className="hamster__limb hamster__limb--bl"></div>
                  <div className="hamster__tail"></div>
                </div>
              </div>
              <div className="spoke"></div>
            </div>
          ) : (
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
          )}
        </>
      )}
    </>
  );
};
export default TableUser;
