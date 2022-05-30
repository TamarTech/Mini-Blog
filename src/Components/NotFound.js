import { Container } from "react-bootstrap";
import notFound from '../img/404error.svg';

const NotFound = () => {
    return ( 
        <Container>
            <img src={notFound} alt="404 error vector" style={{width:"60%"}}/>
        </Container>
     );
}
 /**https://storyset.com/illustration/404-error-lost-in-space/pana#FF725EFF&hide=&hide=complete */

 export default NotFound;