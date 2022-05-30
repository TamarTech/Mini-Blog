import { Button, Container, Row , Col} from "react-bootstrap";
import useFetch from "../useFetch";
import {useParams,useNavigate} from 'react-router-dom';
import { useState } from "react";

const Details = () => {
   const navigate = useNavigate();
   const [pending,setPending] = useState(true);
   const {id} = useParams();
   const [blog] = useFetch("http://localhost:8000/blogs/"+id)

   //console.log(blog)

   const onDeleteHandler = (id) =>{
       fetch("http://localhost:8000/blogs/"+id,{
        method:"DELETE",  
       }).then(()=>{
           console.log("Delete BLog")
           navigate('/')
           setPending(false);
           
       }).catch((err)=>{
           console.log(err.message);
       })
   }
       return ( 
        <Container>
            {blog && <div>
                <h2 style={{color:"#E60965"}}>
                    {blog.title}
                </h2>
                <Row className="mt-5">
                <Col md={6} xs={6}>
                    <h6>Written By {blog.user}</h6>
                </Col>
                <Col md={6} xs={6}>
                    <b>{blog.time}</b>
                </Col>
            </Row>
            <img src={blog.src} alt={blog.alt} 
                className="rounded mt-4"
                style={{width:"30%"}}
                />
                <div className="mt-4" style={{fontSize:"18px",lineHeight:"30px"}}>
                    {blog.details}
                </div>
            <Button type="button"
                    className="float-end mt-4 mb-5"
                    disabled={!pending}
                    onClick={()=>onDeleteHandler(blog.id)}
                    >
                            Delete
            </Button>

            </div> }
        </Container>
     );
}
 
export default Details;