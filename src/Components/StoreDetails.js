import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import CurrentRateContext from "../Contexts/CurrentRateContext";
import RatesContext from "../Contexts/RatesContext";
export default function StoreDetails(props) {
    const rates = useContext(RatesContext);
    const storePrice = {
        amazon: 0,
        ebey: 0,
        aliExpress: 0
    };
    const currentRate = useContext(CurrentRateContext);
    const returnArray = () => {
        props.itemsOriginal.forEach(element => {
            storePrice[element.onlineStore] = Number(storePrice[element.onlineStore]) + Number(element.price);
        });
        return (<React.Fragment> <tr>
            <td>amazon</td>
            <td>{calcaluate(storePrice["amazon"])}</td>
        </tr>
            <tr>
                <td>ebey</td>
                <td>{calcaluate(storePrice["ebey"])}</td>
            </tr>
            <tr>
                <td>aliExpress</td>
                <td>{calcaluate(storePrice["aliExpress"])}</td>
            </tr></React.Fragment>);
    }
    const calcaluate = (num) => {
        return Math.round((Number(num) * Number(rates[currentRate])) * 100) / 100;
    }

    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Store Name</th>
                        <th>price({currentRate})</th>
                    </tr>
                </thead>
                <tbody>
                    {returnArray()}
                </tbody>
            </Table>
        </div>
    );
}