import { Card, Container, Row, Col , Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles.css";

const Blog = (props) => {
    return ( 
        <Container className="mt-4">
            <Card className="blog-card">
                <Row className="mb-1">
                    <Col md={4}>
                    <div style={{backgroundColor:"#f9f9f9"}}>
                        <img src={props.blog.src} 
                            alt={props.blog.alt} 
                            style={{width:"60%",height:"auto"}}
                        />
                    </div>
                    </Col>

                    <Col md={8}>
                    <Card.Body>
                        <Card.Title style={{color:"#E60965"}}>
                            {props.blog.title}
                        </Card.Title>
                        <Card.Subtitle>{props.blog.time}</Card.Subtitle>
                        <Card.Text className="mt-2">
                           <b>Description : </b> {props.blog.description}
                        </Card.Text>
                    <b>
                        Written by {props.blog.user}
                    </b>
                    
                        <Link to={`/blogs/${props.blog.id}`}>
                            <Button type="button"
                                className="float-end">
                                Details
                            </Button>
                        </Link>                        
                </Card.Body>
                    </Col>
                </Row>         
            </Card>
        </Container>
     );
}
 
export default Blog;