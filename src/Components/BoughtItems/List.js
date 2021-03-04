import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ItemList from "./ItemList";
import StoreDetails from "../StoreDetails";
import { Button, Container, Col, Row, Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";



export default function List() {
    const history = useHistory();
    const itemsOriginal = useSelector(state => state.items.listItems);
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
                    <Col style={{ justifyContent: "center", display: "flex" }}><Button variant="primary" onClick={() => history.push("/Received")}>
                        move to Recived
        </Button></Col>
                </Row>

            </Container>
        </React.Fragment >
    );
}