import { useState } from "react";
import { Button, Row,Col ,Container} from "react-bootstrap";
import Color from "./components/Color";
import RandomHex from "./utils/RandomHex";
import { ToastContainer ,toast} from 'react-toastify';

function App() {
  const [colors,setColors] = useState([]);
  const createColors = () => {
    setColors([RandomHex(),RandomHex(),RandomHex(),RandomHex()]);
    toast.success('Its created !');
  };
  const colorList = colors.map((color,key) => <Color backgroundColor={color} key={key} /> );
  return (
    <>
    <ToastContainer 
    position="top-right"
    autoClose={1000}
    />
    <Container fluid={true}>
          {colorList}
    <Row >
      <Col align='center' className="mt-1 ">
      <Button variant="success text-center" onClick={createColors}>Make Random Hex</Button>
      </Col>
    </Row>
    </Container>
    
    </>
  );
}

export default App;
