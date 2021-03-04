import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import ItemRow from "./ItemRow";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axios from "axios";
import useInterval from '@use-it/interval';
import CurrentRateContext from "../../Contexts/CurrentRateContext";
export default function ItemList() {
    const itemsOriginal = useSelector(state => state.items.listItems);
    const [order, setOrder] = React.useState("false");
    const [newItems, setItems] = React.useState([]);
    const currentRate = useContext(CurrentRateContext);

    useEffect(() => {
        setItems(itemsOriginal);
        // fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,GBP,ILS") // data source is an object, not an array.
        //     .then(res => res.json())
        //     .then(result => setRates(result.rates));
    });


    const sorting = (num) => {
        var temp = [];
        temp = newItems.sort(function (a, b) {
            if (a["date"] < b["date"]) { return -num; }
            if (a["date"] > b["date"]) { return num; }
            return 0;
        });
        setItems(temp);
    }

    const changeOrder = () => {
        let temp;
        if (order == "asc") {
            temp = "desc";
            sorting(-1);
        } else {
            temp = "asc";
            sorting(1);
        }
        setOrder(temp);
        // props.changeOrder(temp);
    }
    const getFormatt = (date) => {
        var todayTime = new Date(date);
        var month = (todayTime.getMonth() + 1) % 13;
        var day = todayTime.getDate();
        var year = todayTime.getFullYear();
        return day + "/" + month + "/" + year;
    }






    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Online Store</th>
                    <th>Price ({currentRate})</th>
                    <th onClick={changeOrder}>Date </th>
                </tr>
            </thead>
            <tbody>
                {newItems.map((item, index) => (
                    <tr>
                        <ItemRow index={index} item={item} />
                    </tr>

                ))}
            </tbody>
        </Table>
    )
}
