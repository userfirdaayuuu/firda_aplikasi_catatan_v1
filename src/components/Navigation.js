import {Navbar, Container, Nav, NavbarBrand, NavLink} from "react-bootstrap"

const Navigation = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <NavbarBrand>Memochou</NavbarBrand>
                    <Nav>
                        <NavLink>Other</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation