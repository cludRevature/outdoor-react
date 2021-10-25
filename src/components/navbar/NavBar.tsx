import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory, NavLink } from 'react-router-dom'; 

const NavBar: React.FC<unknown> = () => {
  const history = useHistory();

  const someCallback = (): void => {
    // do some logic

    history.push('meetups');
  }

  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">
                outDoor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto container-fluid">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/meetups">Meetups</Nav.Link>
                <Nav.Link href="/parks">Parks</Nav.Link>
                <Nav.Link href="/friends">Friends</Nav.Link>
                <Nav.Link href="/login" className="ms-auto">Login</Nav.Link>
                
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    // <nav className="navbar navbar-expand-md navbar-light bg-light">
    //   <div id="nav" className="container-fluid">
    //     <NavLink className="navbar-brand" to="/">Home</NavLink>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarCollapse">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/meetups">Meetups</NavLink>
    //         </li>
    //         {/* <li className="nav-item">
    //           <NavLink className="nav-link" to="/clicker">Clicker</NavLink>
    //         </li> */}
    //       </ul>
    //       <ul className="navbar-nav ms-auto">
    //         {/* { !user ? (
    //           <>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="/login">Login</NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="/register">Register</NavLink>
    //             </li>
    //           </>
    //           ) : (
    //           <li className="nav-item">
    //             <input type='submit' onClick={handleLogout} value='Logout' />
    //           </li>
    //           )
    //         } */}
    //         <Button onClick={() => someCallback()}>
    //           Go to Meetups
    //         </Button>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default NavBar;