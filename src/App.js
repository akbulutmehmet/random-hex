import { useState } from "react";
import { Button, Row,Col } from "react-bootstrap";
import Colors from "./components/Colors";
import RandomHex from "./utils/RandomHex";
import { ToastContainer ,toast} from 'react-toastify';

function App() {
  const [colors,setColors] = useState([]);
  const createColors = () => {
    setColors([RandomHex(),RandomHex(),RandomHex(),RandomHex()]);
    toast.success('Its created !');
  };
  return (
    <>
    <ToastContainer 
    position="top-right"
    autoClose={1000}
    />
    <Colors colors={colors} >

    </Colors>
    <Row >
      <Col align='center' className="mt-1 ">
      <Button variant="success text-center" onClick={createColors}>Make Random Hex</Button>
      </Col>
    </Row>

    
    </>
  );
}

export default App;
