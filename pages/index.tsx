import React, { useContext } from 'react'
import { ShoppingListContext } from '../provider/shoppingListProvider'
import Link from 'next/link'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import styles from '../styles/Home.module.css'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, connectHits } from 'react-instantsearch-dom'
import HitContainer from 'components/HitContainer'

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
)

export default function Home() {
  const CustomHits = connectHits(HitContainer)
  const { shoppingList } = useContext(ShoppingListContext)

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
        <CustomHits />
      </InstantSearch>
    </div>
  )
}