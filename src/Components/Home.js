import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addItems } from "../Actions/itemsList";
import shortid from "shortid";
export default function Home() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [itemName, setItemName] = React.useState("");
    const [onlineStore, setOnlineStore] = React.useState("amazon");
    const [price, setPrice] = React.useState(0);
    const [date, setDate] = React.useState(null);


    const addItem = () => {
        const item = {
            itemName: itemName,
            onlineStore: onlineStore,
            price: price,
            date: date,
            itemID: shortid.generate()
        };
        dispatch(addItems(item));
    }

    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>item name</Form.Label>
                    <Form.Control value={itemName} onChange={event => setItemName(event.target.value)} type="text" placeholder="enter item name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Online Store</Form.Label>
                    <Form.Control onChange={(event) => setOnlineStore(event.target.value)} as="select">
                        <option value="amazon">amazon</option>
                        <option value="ebey">Ebey</option>
                        <option value="aliExpress">Ali Express</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>price(USD)</Form.Label>
                    <Form.Control value={price} onChange={event => setPrice(event.target.value)} type="number" placeholder="enter price" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>enter Date</Form.Label>
                    <Form.Control onChange={(event) => setDate(event.target.value)} type="datetime-local" placeholder="enter date" />
                </Form.Group>
                <Button variant="primary" onClick={() => addItem()}>
                    Submit
        </Button>

            </Form>
            <Container style={{ marginTop: "10%" }}>
                <Row>
                    <Col style={{ justifyContent: "center", display: "flex" }}> <Button variant="primary" onClick={() => history.push("/list")}>
                        move to List
        </Button></Col>
                    <Col style={{ justifyContent: "center", display: "flex" }}><Button variant="primary" onClick={() => history.push("/Received")}>
                        move to Recived
        </Button></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}