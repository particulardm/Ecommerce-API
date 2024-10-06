import { storeItems, StoreItem } from "./storeItems";

const shoppingCart: Map<string, StoreItem[]> = new Map();

export const addItem = function(itemID: number, userID: string): string {
    if (!storeItems.has(itemID)) {
        return "please provide a correct id!!";
    };

    const curItem = storeItems.get(itemID)!;
    const curCart = shoppingCart.get(userID) || [];
    curCart.push(curItem);
    shoppingCart.set(userID, curCart);

    console.log(userID, shoppingCart.get(userID));
    return ("added to your cart: " + curItem.name + " of " + curItem.category + " category ");
};