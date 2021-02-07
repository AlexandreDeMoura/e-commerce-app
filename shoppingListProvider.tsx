import { useState, createContext } from "react";

export interface ShoppingItem {
    name: string
    price: number
}

interface IShoppingListContext {
    shoppingList: ShoppingItem[]
    addItemToShoppingList: (shoppingItem: ShoppingItem) => void
    deleteItemToShoppingList: (itemName: string) => void
}

export const ShoppingListContext = createContext<IShoppingListContext>({} as IShoppingListContext)

const ShoppingListProvider = ({ children }) => {

    const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([])

    const addItemToShoppingList = (shoppingItem: ShoppingItem) => {
        setShoppingList([...shoppingList, shoppingItem])
    }
    const deleteItemToShoppingList = (itemName: string) => {
        const newShoppingList = shoppingList.filter(item => item.name !== itemName)
        setShoppingList([...newShoppingList])
    }

    const contextValue = {
        shoppingList,
        addItemToShoppingList,
        deleteItemToShoppingList
    }

    return (
        <ShoppingListContext.Provider value={contextValue}>
            { children}
        </ShoppingListContext.Provider>
    )
}

export default ShoppingListProvider
