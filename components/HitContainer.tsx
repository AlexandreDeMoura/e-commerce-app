import React, { useContext } from 'react'
import styles from '../styles/Home.module.css'
import { ShoppingListContext } from '../provider/shoppingListProvider'
import Hit from './Hit'

export default function HitContainer({ hits }) {
    const { shoppingList, addItemToShoppingList, deleteItemToShoppingList } = useContext(ShoppingListContext)

    return (
        <div className={styles.cardsContainer}>
            {hits.map(hit => {
                const isAlreadyInShoppingList = shoppingList.some(item => item.name === hit.name)
                const isDiscountAvailable = shoppingList.some(item => item.price >= 200)

                return <Hit
                    hit={hit}
                    addItemToShoppingList={addItemToShoppingList}
                    deleteItemToShoppingList={deleteItemToShoppingList}
                    isAlreadyInShoppingList={isAlreadyInShoppingList}
                    isPriceDiscounted={isDiscountAvailable && hit.salePrice >= 250}
                />
            })}
        </div>
    )
}