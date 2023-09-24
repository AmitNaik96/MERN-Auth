import { Container, Col, Row } from "react-bootstrap";

// children - > props
const FormContainer = ({children}) => {
    return (
        <Container>
            <Row className='justify-content-md-center mt-5'>
                <Col xs={12} md={6} className='card p-5'>
                {/* 12 slices breakpoints */}
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default FormContainer;