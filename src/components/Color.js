import { Row,Col, Button } from "react-bootstrap";
import {  toast } from 'react-toastify';
function Color (props) {

    return (
        <Row className="p-3" style={{backgroundColor:props.backgroundColor}}>
            <Col align='center'>
                <Button 
                onClick={(e) => {
                    navigator.clipboard.writeText(e.target.value);
                    toast.success('Copied !', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }}
                
                variant="outline-dark" 
                value={props.backgroundColor}>{props.backgroundColor}
                
                </Button>
            </Col>
        </Row>
    );
}

export default Color;