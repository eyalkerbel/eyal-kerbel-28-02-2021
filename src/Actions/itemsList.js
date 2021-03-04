export const ADD_ITEMS = "ADD_ITEMS";
export const RECEIVED_ITEMS = "RECEIVED_ITEMS";
export function addItems(item) {
    return {
        type: ADD_ITEMS,
        item: item
    }
}
export function receivedItem(item) {
    return {
        type: RECEIVED_ITEMS,
        item: item
    }
}