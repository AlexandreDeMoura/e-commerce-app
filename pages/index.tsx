import React, { useContext } from 'react'
import { ShoppingListContext } from '../shoppingListProvider'
import Link from 'next/link'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import styles from '../styles/Home.module.css'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Highlight, connectHits } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
)

export default function Home() {
  const CustomHits = connectHits(HitContainer)
  const { shoppingList, addItemToShoppingList, deleteItemToShoppingList } = useContext(ShoppingListContext)

  return (
    <div className="ais-InstantSearch">
      <div className={styles.top}>
        <Link href={"/cart"}><div className={styles.shoppingIconContainer}>
          <ShoppingCartIcon style={{ fontSize: 45, color: '#2196f3' }} />
          <div>{shoppingList.length}</div>
        </div></Link>
      </div>
      <InstantSearch indexName="bestbuy" searchClient={searchClient}>
        <SearchBox />
        <CustomHits
          addItemToShoppingList={addItemToShoppingList}
          deleteItemToShoppingList={deleteItemToShoppingList}
          shoppingList={shoppingList}
        />
      </InstantSearch>
    </div>
  )
}

function HitContainer({ hits, addItemToShoppingList, deleteItemToShoppingList, shoppingList }) {
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

function Hit({ hit, addItemToShoppingList, deleteItemToShoppingList, isAlreadyInShoppingList, isPriceDiscounted }) {
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