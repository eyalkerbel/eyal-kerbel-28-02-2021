import React from "react";
import { useContext } from "react";
import CurrentRateContext from "../../Contexts/CurrentRateContext";
import RatesContext from "../../Contexts/RatesContext";
export default function ItemRow(props) {
    const rates = useContext(RatesContext);
    const currentRate = useContext(CurrentRateContext);
    const getFormatt = (date) => {
        var todayTime = new Date(date);
        var month = (todayTime.getMonth() + 1) % 13;
        var day = todayTime.getDate();
        var year = todayTime.getFullYear();
        return day + "/" + month + "/" + year;
    }
    return (
        <React.Fragment>
            <td>{props.index}</td>
            <td>{props.item.itemName}</td>
            <td>{props.item.onlineStore}</td>
            <td>{Math.round((Number(props.item.price) * Number(rates[currentRate])) * 100) / 100}</td>
            <td>{getFormatt(props.item.date)}</td>
        </React.Fragment>
    );
} 