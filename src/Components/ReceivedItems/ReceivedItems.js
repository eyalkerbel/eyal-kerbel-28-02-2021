import React from 'react';
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import StoreDetails from "../StoreDetails";
import { useHistory } from 'react-router-dom';
import { Button, Container, Col, Row, Tabs, Tab } from "react-bootstrap";

export default function RecivedItems() {
    const history = useHistory();
    const itemsOriginal = useSelector(state => state.items.received);

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="ItemList"
                            id="controlled-tab-example">
                            <Tab eventKey="ItemList" title="itemList">
                                <ItemList />
                            </Tab>
                            <Tab eventKey="storeDetaild" title="store Detaild">
                                <StoreDetails itemsOriginal={itemsOriginal} />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>

            <Container style={{ marginTop: "10%" }}>
                <Row>
                    <Col style={{ justifyContent: "center", display: "flex" }}> <Button variant="primary" onClick={() => history.push("/")}>
                        move to Home
        </Button></Col>
                    <Col style={{ justifyContent: "center", display: "flex" }}><Button variant="primary" onClick={() => history.push("/list")}>
                        move to List
        </Button></Col>
                </Row>

            </Container>
        </React.Fragment>
    );
}