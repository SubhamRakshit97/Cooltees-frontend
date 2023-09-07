import React, { useEffect } from 'react'
import Item from '../components/Common/Item'
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../reducks/items/selectors';
import { fetchItems } from '../reducks/items/operations';
import Header from '../components/Common/Header';
import { fetchCarts } from '../reducks/carts/operations';





export default function Home() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);

  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem('LOGIN_USER_KEY')) {
      dispatch(fetchCarts())
      console.log(items);
    }
  }, []);

  return (
    <>
      <Header />

      <div class="selected">Selected Just for You</div>
      <div class="selected-just-for-you">

        {items && items.map(item => (
          <Item key={item.id} item={item} />))
        }

      </div>

    </>

  )
}

