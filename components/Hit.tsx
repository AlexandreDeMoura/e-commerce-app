import styles from '../styles/Home.module.css'
import { Highlight } from 'react-instantsearch-dom'

export default function Hit({ hit, addItemToShoppingList, deleteItemToShoppingList, isAlreadyInShoppingList, isPriceDiscounted }) {
    const handleClick = () => {
        if (!isAlreadyInShoppingList) {
            addItemToShoppingList({
                name: hit.name,
                price: hit.salePrice
            })
        } else {
            deleteItemToShoppingList(hit.name)
        }
    }

    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={hit.image} alt={hit.name} />
            <div className={styles.cardName}>
                <Highlight attribute="name" hit={hit} />
            </div>
            <div className={styles.cardPriceContainer}>
                <div className={styles.cardPrice}>{isPriceDiscounted ? hit.salePrice / 2 : hit.salePrice}$</div>
                {isPriceDiscounted ? <div className={styles.previousCardPrice}>{hit.salePrice}</div> : ''}
            </div>
            <button
                onClick={handleClick}
                className={styles.cardButton}
                style={{ backgroundColor: isAlreadyInShoppingList ? '#e53935' : '#2196f3' }}
            >
                {isAlreadyInShoppingList ? "supprimer du panier" : "ajouter au panier"}
            </button>
        </div>
    )
}