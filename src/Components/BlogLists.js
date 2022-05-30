import { Container } from "react-bootstrap";
import "../styles.css";
import useFetch from "../useFetch";
import Blog from "./Blog";

const BlogLists = () => {
    const [blogs,isPending,error] = useFetch("http://localhost:8000/blogs")
   
    return ( 
        <Container className="mb-5">
            {error && <h3>{error}</h3>}
            {isPending && <h5>Loading...</h5>}
            {blogs && blogs.map(blog => {
            return (
                <div key={blog.id}>
                    <Blog blog={blog} />
                </div>
                )
            }
        )}
        </Container>
     );
}
 
export default BlogLists;