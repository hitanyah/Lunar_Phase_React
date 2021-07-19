import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import React, { useState } from 'react'

// Ruby
import EventList from './pages/Event/EventList'
import EventDetail from './pages/Event/EventDetail'
import EventIndex2 from './pages/Event/EventIndex2'
// import Home from './pages/Home'
import EventCategoryCard from './pages/Event/components/EventCategoryCard'
import  Calendar  from './pages/Event/Calendar1'
import  CalendarChild  from './pages/Event/CalendarChild'


// Tanya
import ScrollToTop from './components/ScrollToTop'
// pages
import IndexMy from './pages/Index/IndexMy'
import Product from './pages/Product/Product'
import ProductDetail from './pages/Product/ProductDetail'

// 小J
import CartItem from './pages/Cart/CartItem'
import CartEv from './pages/Cart/CartEv'
import CartKit from './pages/Cart/CartKit'
import DisplayBookMark from './pages/Cart/DisplayBookMark'

// 晴
import ArticleIndex1 from "./pages/article/ArticleIndex1.js";
import ArticleIndex2 from "./pages/article/ArticleIndex2.js";
import ArticleIndex3 from "./pages/article/ArticleIndex3.js";
import ArticleHealth from "./pages/article/ArticleHealth.js";
import ArticleDetail from "./pages/article/ArticleDetail.js";
import PeriodRecord from "./pages/article/PeriodRecord.js";

// Apple
import KitIndex from './pages/Kit/KitIndex'
import KitTest1 from './pages/Kit/KitTest1'
import KitTest2 from './pages/Kit/KitTest2'
import KitTest3 from './pages/Kit/KitTest3'
import KitTest4 from './pages/Kit/KitTest4'
import KitSetList from './pages/Kit/KitSetList'
import KitShoppingList from './pages/Kit/KitShoppingList'
import Calendar1 from './pages/Event/Calendar1'
import CalendarChild2 from './pages/Event/CalendarChild2'

const _ = require('lodash');


function App() {

  /* J */
  const [cartQty, setCartQty] = useState(
    {
      itemsQty: 0,
      eventsQty: 0,
      kitsQty: 0,
      totalQty: 0,
    })

  const [bmQty, setBmQty] = useState(0)
  
    function updateQty (){
      const orderItems = localStorage.getItem('cart') || 0
      const orderItemsArr = JSON.parse(orderItems)
      const orderEvents = localStorage.getItem('evcart') || 0
      const orderEventsArr = JSON.parse(orderEvents)
      const orderKits = localStorage.getItem('kitcart') || 0
      const orderKitsArr = JSON.parse(orderKits)
  
      const newItemsQty = {...cartQty,
        itemsQty: _.sumBy(orderItemsArr, function(o){return o.amount}),
        eventsQty: _.sumBy(orderEventsArr, function(o){return o.amount}),
        kitsQty: _.sumBy(orderKitsArr, function(o){return o.amount}),
        totalQty: _.sumBy(orderItemsArr, function(o){return o.amount})+_.sumBy(orderEventsArr, function(o){return o.amount})+_.sumBy(orderKitsArr, function(o){return o.amount}),
      }
      setCartQty(newItemsQty)
    }

    
    function updateBmQty (){
      const localBookmark = localStorage.getItem('bookmark') || 0
      const localBookmarkArr = JSON.parse(localBookmark)
      const newBmQty =  _.size(localBookmarkArr)
      console.log('bmQty',bmQty)
      setBmQty(newBmQty)
    }
  




  return (
    <Router>
      <>
        
        {/* 路由表 */}

        <Switch>
          <ScrollToTop>
          <Route path="/category/:id?">
            <EventCategoryCard cartQty={cartQty}/>
          </Route>
          <Route path="/event-list">
            <EventList cartQty={cartQty}/>
          </Route>
          <Route path="/event-detail/:id?">
            <EventDetail cartQty={cartQty}/>
          </Route>
          <Route path="/event">
            <EventIndex2 renderItem cartQty={cartQty}/>
          </Route>
          <Route exact path="/calendar">
              <Calendar1 />
            </Route>
            <Route exact path="/calendar-child">
              <CalendarChild />
            </Route>
            <Route exact path="/calendar-child2">
              <CalendarChild2/>
            </Route>

          {/* J */}
          <Route path="/bookmark">
            <DisplayBookMark
              cartQty={cartQty} bmQty={bmQty} updateBmQty={updateBmQty}
            />
          </Route>
          <Route path="/cart/event">
            <CartEv 
            />
          </Route>
          <Route path="/cart/kit">
            <CartKit 
            />
          </Route>
          
          <Route path="/cart/item">
            <CartItem 
              updateQty={updateQty}
              cartQty={cartQty}
              setCartQty={setCartQty}
            />
          </Route>
          {/* J */}

          {/* Tanya Route */}
          <Route path="/product">
              <Product cartQty={cartQty} updateBmQty={updateBmQty} bmQty={bmQty} />
            </Route>
            <Route path="/product-detail/:itemId">
              <ProductDetail cartQty={cartQty}/>
            </Route>
            <Route exact path="/">
              <IndexMy cartQty={cartQty}/>
            </Route>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          {/* Tanya Route */}

          {/* 晴 */}
          <Route path="/article/health">
            <ArticleHealth />
          </Route>

          <Route path="/article/detail/:id?">
            <ArticleDetail />
          </Route>
          <Route path="/periodrecord">
            <PeriodRecord />
          </Route>

          <Route path="/article1">
            <ArticleIndex1 />
          </Route>
          <Route path="/article2">
            <ArticleIndex2 />
          </Route>
          <Route path="/article3">
            <ArticleIndex3 />
          </Route>
          {/* 晴 */}

          {/* Apple */}
          <Route path="/kitIndex" component={KitIndex}>
            {/* <KitIndex /> */}
          </Route>
          <Route path="/kitTest1">
            <KitTest1 />
          </Route>
          <Route path="/kitTest2">
            <KitTest2 />
          </Route>
          <Route path="/kitTest3">
            <KitTest3 />
          </Route>
          <Route path="/kitTest4">
            <KitTest4 />
          </Route>
          <Route path="/kitSetList">
            <KitSetList />
          </Route>
          <Route path="/kitShoppingList" component={KitShoppingList}>
            {/* <KitShoppingList /> */}
          </Route>
          {/* Apple */}
          </ScrollToTop>
        </Switch>
      </>
    </Router>
  )
}

export default App
