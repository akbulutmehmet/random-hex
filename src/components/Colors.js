import { Container } from "react-bootstrap";
import Color from "./Color";

function Colors({colors}) {
    return (
        <Container fluid={true}>
            {colors.map((color,key) => 
                <Color backgroundColor={color} key={key} />
            )}
        </Container>
    );
}

export default Colors;