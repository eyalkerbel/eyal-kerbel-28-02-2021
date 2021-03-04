import { Switch, Route } from "react-router-dom";
import List from "./Components/BoughtItems/List";
import RecivedItems from "./Components/ReceivedItems/ReceivedItems";
import Home from "./Components/Home";
export default function Switcher() {
    return (<Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/Received" component={RecivedItems} />
    </Switch>);


}