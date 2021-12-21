const React = require("react");
const {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} = require("react-bootstrap");
const { useHistory } = require("react-router-dom");
const { useDispatch, useSelector } = require("react-redux");
const { logout } = require("../../actions/userActions");
const Header = () => {
  const history = useHistory();
  // const history = useHistory();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <Navbar bg="success" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <h3>Guvi Tech</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex m-auto ">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>

          {userInfo ? (
            <Nav className="mr-auto my-2 my-lg " navbarScroll>
              {/* <Nav.Link href="/mynotes">My Notes</Nav.Link>

              <NavDropdown title={userInfo?.name} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown> */}

              <Nav.Link href="/profile">
                <h3>
                  <b>Profile</b>
                </h3>
              </Nav.Link>
              <Nav.Link href="/" onClick={logoutHandler}>
                <h3>
                  <b>Logout</b>
                </h3>
              </Nav.Link>

              {/* <NavDropdown title={userInfo?.name} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/login">
                <h3>Login</h3>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
