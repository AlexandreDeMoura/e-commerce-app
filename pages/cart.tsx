import React, { useContext } from 'react'
import Link from 'next/link'
import styles from '../styles/Cart.module.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { ShoppingListContext } from '../provider/shoppingListProvider'

export default function Cart() {
    const { shoppingList, addItemToShoppingList, deleteItemToShoppingList } = useContext(ShoppingListContext)

    const displayPriceTag = (price: number) => {
        const isDiscountable = price >= 250
        const actualPrice = isDiscountable ? price / 2 : price
        return (
            <>
                <div className={styles.actualPrice}>{actualPrice}$</div>
                {isDiscountable ? <div className={styles.previousPrice}>{price}</div> : ''}
            </>
        )
    }

    const displayArticleNumber = () => {
        const plurial = shoppingList.length >= 2 ? 's' : ''
        return `${shoppingList.length} article${plurial}`
    }

    const displayTotalPrice = () => {
        let total = 0
        shoppingList.forEach(item => total += item.price)
        return total
    }

    return (
        <div className={styles.main}>
            <div className={styles.cartContainer}>
                <div className={styles.top}>
                    <Link href="/"><ArrowBackIcon style={{ fontSize: 40, cursor: 'pointer' }} /></Link>
                </div>
                <div className={styles.shoppingListContainer}>
                    {shoppingList.map(item => {
                        return (
                            <div className={styles.shoppingItem}>
                                <div className={styles.shoppingItemName}>{item.name}</div>
                                <div className={styles.priceContainer}>{displayPriceTag(item.price)}</div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.totalPrice}>
                    Total ({displayArticleNumber()}) : {displayTotalPrice()}$
                </div>
            </div>
        </div>
    )
}