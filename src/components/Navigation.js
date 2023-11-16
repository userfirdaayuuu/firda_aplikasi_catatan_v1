import { Navbar, Container, nav, NavbarBrand } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FiFile, FiEdit3 } from "react-icons/fi"

const Navigation = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <NavbarBrand>Memochou</NavbarBrand>
                    <nav className="link">
                        <Link className="linka" to="/">
                            <FiFile />
                        </Link>
                        <Link className="linkb" to="/second">
                            <FiEdit3 />
                        </Link>
                    </nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation