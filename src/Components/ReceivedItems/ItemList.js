import React, { useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import ItemRow from "./ItemRow";
import CurrentRateContext from "../../Contexts/CurrentRateContext";
export default function ItemList() {
    const itemsOriginal = useSelector(state => state.items.received);
    const [order, setOrder] = React.useState("false");
    const [newItems, setItems] = React.useState([]);
    const currentRate = useContext(CurrentRateContext);

    useEffect(() => {
        setItems(itemsOriginal);
    }, [itemsOriginal]);


    const sorting = (num) => {
        var temp = [];
        temp = itemsOriginal.sort(function (a, b) {
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
