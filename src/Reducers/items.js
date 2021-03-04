import { ADD_ITEMS, RECEIVED_ITEMS } from "../Actions/itemsList";
const initialUserState = {

    listItems: [],
    received: []
}
export const items = (state = initialUserState, action) => {
    switch (action.type) {
        case ADD_ITEMS:
            return {
                listItems: [...state.listItems, action.item],
                received: []
            }
        case RECEIVED_ITEMS:
            return {
                listItems: [...state.listItems.filter(element => action.item.itemID != element.itemID)]
                ,
                received: [...state.received, action.item]
            }

        default:
            return state;
    }
}
