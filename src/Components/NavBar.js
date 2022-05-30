import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles.css";

const linkStyle={
    textDecoration: "none",
    color: 'blue',
}

const NavBar = () => {
    return ( 
        <Container className="mt-3">
            <Row>
                <Col md={6} xs={6}>
                    <h3 style={{color:"#E60965"}}>Mini Blog</h3>
                </Col>
                <Col md={6} xs={6}>
                   <Row>
                       <Col md={6} xs={6} className="navbar">
                           <Link to="/blogs" style={linkStyle}>                                
                                <h5>Home</h5>
                           </Link>
                        </Col>
                       <Col md={6} xs={6} className="navbar">
                        <Link to="/addBlog" style={linkStyle}>                                
                                <h5>Add Blog</h5>
                           </Link>
                        </Col>
                   </Row>
                </Col>
            </Row>
        </Container>
     );
}
 
export default NavBar;