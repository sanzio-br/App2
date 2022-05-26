import { Container, Nav, Navbar } from 'react-bootstrap'
export default function Navigation() {
    return (
        <header>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/App2">App 2</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/App2">Home</Nav.Link>
                                <Nav.Link href="App2/users">Users</Nav.Link>
                                <Nav.Link href="https://sanzio-br.github.io/App1">App 1</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </header>
    )
}