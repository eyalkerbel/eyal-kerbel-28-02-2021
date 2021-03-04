import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import CurrentRateContext from "../../Contexts/CurrentRateContext";
import RatesContext from "../../Contexts/RatesContext";
export default function StoreDetails(props) {
    const rates = useContext(RatesContext);
    const currentRate = useContext(CurrentRateContext);
    const itemsOriginal = useSelector(state => state.items.listItems);
    const [storePrice, setStorePrice] = React.useState({
        amazon: 0,
        ebey: 0,
        aliExpress: 0
    });
    useEffect(() => {
        var storePrice = {
            amazon: 0,
            ebey: 0,
            aliExpress: 0
        };

        itemsOriginal.forEach(element => {
            storePrice[element.onlineStore] = Number(storePrice[element.onlineStore]) + Number(element.price);
        });
        setStorePrice(storePrice);
    });
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
                    <tr>
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
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}