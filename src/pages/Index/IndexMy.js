import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './IndexMy.scss'

// component
import HeroSlider from './IndexHeroSlider'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import IndexLineA from './components/IndexLineA'
import IndexLineB from './components/IndexLineB'

// react-icon
import { GrFacebookOption, GrInstagram } from 'react-icons/gr'
// import { GrInstagram } from 'react-icons/gr'
// import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
// import { VscChevronRight } from 'react-icons/vsc'
import { RiMoonClearFill } from 'react-icons/ri'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

function IndexMy(props) {
  // nav sticky
  const [sticky, setSticky] = useState(false)
  // drawing animate
  const [drawing, setDrawing] = useState(false)

  useEffect(() => {
    // AOS
    AOS.init({ offset: 120, duration: 800 })
  })

  useEffect(() => {
    // navbar sticky
    const navbar = document.getElementById('navbar')
    const sticky = navbar.offsetTop
    function navbarSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
        setSticky(true)
      } else {
        navbar.classList.remove('sticky')
      }
    }

    // drawing animate
    const block = document.getElementById('pd-title')
    const drawMe = block.offsetTop

    function drawing() {
      if (window.pageYOffset >= drawMe) {
        setDrawing(true)
      } else {
        setDrawing(false)
      }
    }
    window.onscroll = function () {
      drawing()
      navbarSticky()
    }

    updateQty()
    updateBmQty()
  }, [])

  const displayDraw = (
    <>
      <IndexLineA />
    </>
  )
  const displayDraw2 = (
    <>
      <IndexLineB />
    </>
  )

  const { cartQty, bmQty, updateQty, updateBmQty } = props
  return (
    <>
      {/* HEADER */}
      <header id="top">
        <div className="index-top-wrap">
          <h1 className="text-left mb-3">
            <Link to="#home">
              <img
                className="index-top-logo"
                src="/img/Index/logo-l-dark.svg"
                alt=""
              />
            </Link>
          </h1>
          <div className="index-top-sns">
            <Link to="https://www.facebook.com/IIIEDU.TW" className="mr-3">
              <GrFacebookOption />
            </Link>
            <Link to="https://www.iiiedu.org.tw/">
              <GrInstagram />
            </Link>
          </div>
          <nav className="index-top-menu">
            <ul className="d-flex flex-column index-top-nav align-items-end">
              <li className="col">
                <Link to="/product">PRODUCT</Link>
              </li>
              <li className="col">
                <Link to="/article1">ARTICLE</Link>
              </li>
              <li className="col">
                <Link to="/kitindex">KIT</Link>
              </li>
              <li className="col">
                <Link to="/event">EVENT</Link>
              </li>
              <li className="col">
                <Link to="/calendar">CALCULATOR</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="index-top-letter">
          <img src="/img/Index/calligraphy002.svg" alt="StayTrue" />
        </div>

        <div className="index-top-bottom d-flex justify-content-between py-3">
          <div className="index-login-bar d-flex my-auto">
            <Link to="/login">LOG IN</Link>
            <p> / </p>
            <Link to="/cart/item">CART</Link>
          </div>
          <div data-aos="fade-left" className="index-news-bar d-flex my-auto">
            <Link
              className="index-news-bar-info my-auto py-0"
              to="/product-detail/30"
            >
              <RiMoonClearFill className="mr-2" /> 盈月杯新登場
            </Link>
          </div>
          {/* <div className="btn-soft-green mx-auto">
            <a href>SHOP NOW</a>
          </div> */}
        </div>
        {/* carousel */}
        <HeroSlider />
      </header>

      {/* NAVBAR */}

      <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty} />

      {/* ABOUT */}
      <div id="about" className="index-about container-fluid">
        <div className="index-about-row">
          <h2 className="text-center col-12">Our Mission</h2>
          <img
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            className="index-about-content col-12 col-md-9 col-lg-7 mx-auto"
            src="/img/Index/calligraphy001.svg"
            alt="Our_Mission"
          />
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="row col-12 index-about-unit justify-content-between"
          >
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <Link to="/product">
                <span>01.</span>
                <h3>PRODUCT</h3>
                <p className="p-tc">
                  提供各式生理用品
                  <br />
                  選用有機天然素材製作
                  <br />
                  照顧身體 也照顧環境
                </p>
              </Link>
            </div>
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <Link to="/article">
                <span>02.</span>
                <h3>ARTICLE</h3>
                <p className="p-tc">
                  關於女人 關於身體
                  <br />
                  分享更多小秘密
                </p>
              </Link>
            </div>
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <Link to="/kit">
                <span>03.</span>
                <h3>KIT</h3>
                <p className="p-tc">
                  月訂專區
                  <br />
                  生理期採購新提案
                </p>
              </Link>
            </div>
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <Link to="/event">
                <span>04.</span>
                <h3>EVENT</h3>
                <p className="p-tc">和我們一起探索身心靈</p>
              </Link>
            </div>
          </div>
        </div>
        <div id="bodyline-l" className="index-bodyline-l">
          {drawing ? displayDraw : ''}
          {/* <IndexLineA /> */}
        </div>
        <div className="index-bodyline-r">
          {drawing ? displayDraw2 : ''}
          {/* <IndexLineB /> */}
        </div>
      </div>

      {/* product */}
      <div id="product" className="index-product container-fluid text-center">
        <div className="row index-product-row">
          <h2 id="pd-title" className="col-12 text-center">
            PRODUCT
          </h2>
          <div className="index-product-bg-mountain">
            <img src="/img/Index/mountain-w.svg" alt="mountain-bg" />
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            className="col-12 row index-product-unit-wrap justify-content-between mx-auto"
          >
            <div className="index-product-unit product-unit-move col-12 col-md-2 mt-md-5">
              <div className="index-product-moon-frame mx-auto text-center">
                <Link to>
                  <div className="index-moon moon1">
                    <img src="/img/Index/panties.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">月亮褲</h6>
                </Link>
              </div>
            </div>
            <div className="index-product-unit product-unit-move col-12 col-md-2 mt-3 mt-md-3">
              <div className="index-product-moon-frame mx-auto">
                <Link to>
                  <div className="index-moon moon2">
                    <img src="/img/Index/cloth-pad.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">布衛生棉</h6>
                </Link>
              </div>
            </div>
            <div className="index-product-unit product-unit-move col-12 col-md-2 ">
              <div className="index-product-moon-frame  mx-auto">
                <Link to>
                  <div className="index-moon moon3">
                    <img src="/img/Index/pad.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">衛生棉</h6>
                </Link>
              </div>
            </div>
            <div className="index-product-unit product-unit-move col-12 col-md-2 mt-3 mt-md-3">
              <div className="index-product-moon-frame mx-auto">
                <Link to>
                  <div className="index-moon moon4">
                    <img src="/img/Index/tampon.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">衛生棉條</h6>
                </Link>
              </div>
            </div>
            <div className="index-product-unit product-unit-move col-12 col-md-2 mt-3 mt-md-5">
              <div className="index-product-moon-frame mx-auto">
                <Link to>
                  <div className="index-moon moon5">
                    <img src="/img/Index/menstrual-cup.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">月亮杯</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="col text-center">
            <button className="btn-soft-pink">
              <Link to="/product">SHOP ALL</Link>
            </button>
          </div>
        </div>
      </div>
      {/* ARTICLE */}
      <div id="article" className="index-article container-fluid">
        <div className="index-row">
          <div className="index-article-header d-flex flex-wrap justify-content-between col-12 mx-0 px-0">
            <Link to="/article1">
              <h2 className="col-12 col-sm-4 px-0">ARTICLE</h2>
            </Link>
            <div className="index-article-tags col-12 col-sm-8 px-0">
              <h6 className="h6-tc ml-3 text-center text-sm-right px-0">
                生理期小知識 / 兩性學堂 / 流言終結
              </h6>
            </div>
          </div>
          <div
            data-aos="fade-up"
            // data-aos="fade-zoom-in"
            // data-aos-easing="ease-in-back"
            data-aos-delay="300"
            // data-aos-offset="0"
            className="index-article-topic row col-12"
          >
            <div className="index-article-topic-content text-left col-12 col-md-6 col-lg-8 ml-0 pl-0 pr-0 pr-md-3">
              <div className="">
                <p className="index-article-date mb-1">2021.07.26</p>
                <Link to="/article/detail/48">
                  <h4 className="index-article-h4 h4-tc">
                    新種月事用品　溫柔對待你的「好朋友」
                  </h4>
                </Link>
                <p className="p-tc">
                  除了衛生棉外，你還能選擇棉條、月事杯、布衛生棉。
                  了解你自己的身體需求，解開每個月的周期密碼。
                </p>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/48">read</Link>
                </div>
                <div>
                  <Link to="/article1" className="btn-tag mr-0">
                    #衛教資訊
                  </Link>
                </div>
              </div>
            </div>
            <div className="index-article-topic-img col-12 col-md-6 col-lg-4 p-0 my-4 my-md-auto">
              <Link to="/article/detail/48">
                <img src="/img/Index/article001.jpg" alt="" />
              </Link>
            </div>
          </div>
          <div className="index-article-unit-wrap row text-left col-12">
            <div
              data-aos="fade-up"
              // data-aos="fade-zoom-in"
              // data-aos-easing="ease-in-back"
              data-aos-delay="600"
              // data-aos-offset="0"
              className="border-right-1 index-article-unit col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0"
            >
              <div className="p-0 m-0">
                <p className="index-article-date mb-1">2021.07.19</p>
                <div className="index-article-unit-img col-12 p-0">
                  <Link to="/article/detail/39">
                    <img src="/img/Index/article002.jpg" alt="" />
                  </Link>
                </div>
                <Link to="/article/detail/39">
                  <h5 className="index-article-h5 h5-tc my-2">
                    瑞典學校性平教育將強化認知「合意文化」，不把性騷擾「正常化」
                  </h5>
                </Link>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/39">read</Link>
                </div>
                <div className="text-right">
                  <Link to="/article2" className="btn-tag ml-2">
                    #性教育
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              // data-aos="fade-zoom-in"
              // data-aos-easing="ease-in-back"
              data-aos-delay="600"
              // data-aos-offset="0"
              className="border-right-2 index-article-unit col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0"
            >
              <div className="p-0 m-0">
                <p className="index-article-date mb-1">2021.07.12</p>
                <div className="index-article-unit-img col-12 p-0">
                  <Link to="/article/detail/2">
                    <img src="/img/Index/article003.jpg" alt="" />
                  </Link>
                </div>
                <Link to="/article/detail/2">
                  <h5 className="index-article-h5 h5-tc my-2">
                    40萬人連署後，印度將衛生棉從「奢侈品」降級成免稅的「必需品」
                  </h5>
                </Link>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/2">read</Link>
                </div>
                <div className="text-right">
                  <Link to="/article3" className="btn-tag ml-2">
                    #性別故事
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              // data-aos="fade-zoom-in"
              // data-aos-easing="ease-in-back"
              data-aos-delay="600"
              // data-aos-offset="0"
              className="border-right-1 index-article-unit col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0"
            >
              <div className="p-0 m-0">
                <p className="index-article-date mb-1">2021.07.05</p>
                <div className="index-article-unit-img col-12 p-0">
                  <Link to="/article/detail/38">
                    <img src="/img/Index/article004.jpg" alt="" />
                  </Link>
                </div>
                <Link to="/article/detail/38">
                  <h5 className="index-article-h5 h5-tc my-2">
                    世界很亂，該和女兒談談性：做不到這點，就不可能打開通往性教育的門
                  </h5>
                </Link>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/38">read</Link>
                </div>
                <div className="text-right">
                  <Link to="/article2" className="btn-tag ml-2">
                    #性教育
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              // data-aos="fade-zoom-in"
              // data-aos-easing="ease-in-back"
              data-aos-delay="600"
              // data-aos-offset="0"
              className="index-article-unit col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0"
            >
              <div className="p-0 m-0">
                <p className="index-article-date mb-1">2021.06.28</p>
                <div className="index-article-unit-img p-0">
                  <Link to="/article/detail/23">
                    <img src="/img/Index/article005.jpg" alt="" />
                  </Link>
                </div>
                <Link to="/article/detail/23">
                  <h5 className="index-article-h5 h5-tc my-2">
                    從意外到等待：台灣不同世代女性的初經經驗
                  </h5>
                </Link>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/23">read</Link>
                </div>
                <div className="text-right">
                  <Link to="/article3" className="btn-tag ml-2">
                    #性別故事
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="index-article-footer d-flex justify-content-between mx-0 px-0 col-12">
            <div className="d-flex">
              {/* <Link to="/article" className="btn-prev mr-3">
                <i className="fas fa-chevron-left" />
              </Link>
              <Link to="/article" className="btn-next">
                <i className="fas fa-chevron-right" />
              </Link> */}
            </div>
            <Link to="/article1" className="btn-more">
              more
            </Link>
          </div>
        </div>
      </div>
      {/* KIT */}
      <div id="kit" className="index-kit container-fluid">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          className="index-kit-pic1"
        />
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="800"
          className="index-kit-pic2"
        />
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1300"
          className="index-kit-pic3"
        />
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1600"
          className="index-kit-pic4"
        />
        <div className="index-kit-content row index-row justify-content-between">
          <div className="index-kit-content-l pl-0 col-12 col-md-4">
            <Link to="/kitindex">
              <h2>KIT</h2>
            </Link>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1600"
            data-aos-duration="3000"
            className="index-kit-content-r col-12 col-md-8"
          >
            <h5 className="h5-tc">月訂專區 - 生理期採購新提案</h5>
            <p className="my-4">
              每個女生都有個生理期秘密小包包，裡面是精挑細選的最佳選手。
              <br />
              Lunar Phase
              提供新型態生理用品訂購方式，可依照妳的需求自由選購生理用品，想配多少數量自己決定。
              <br />
              輕鬆點選，就能在每個月該來的時候送到家，還能隨時更換項目或取消。
            </p>
            <div className="row p-0 m-0 justify-content-between ">
              <h6 className="h6-tc col-12 col-md-4">生理用品自由選配</h6>
              <h6 className="h6-tc col-12 col-md-4">輕鬆點選送到家</h6>
              <h6 className="h6-tc col-12 col-md-4">測試最適合妳的組合</h6>
            </div>
          </div>
        </div>
        <div className="btn-more index-kit-bottom mr-0 pr-0">
          <Link to="/kitindex">more</Link>
        </div>
      </div>
      {/* EVENT */}
      <div id="event" className="index-event radial-gradient container-fluid">
        <div className="index-event-top d-flex justify-content-between">
          <div className="index-event-block" />
          <Link className="mx-auto" to="/event">
            <h2>EVENT</h2>
          </Link>
          <div className="index-event-more btn-more">
            <Link to="/event">more</Link>
          </div>
        </div>
        <h6 className="h6-tc text-center">活動快報</h6>
        <div className="d-flex mt-5">
          {/* <button className="index-arrow">
            <VscChevronLeft />
          </button> */}
          <div className="index-event-content row m-0 justify-content-between">
            <div className="index-event-unit-wrap d-flex justify-content-between">
              <div className="index-event-unit row">
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="col-12 col-lg-4 mb-5"
                >
                  <p className="index-article-date mb-2 mx-auto">2021.08.14</p>
                  <Link to="/event-detail/1">
                    <img
                      className="index-event-unit-img"
                      src="/img/Index/flower05.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to="/event-detail/1">
                    <h5 className="index-event-h5 h5-tc mt-3">
                      少女印象盆花課程
                    </h5>
                  </Link>
                  <p className="p-tc mx-auto">永生花 x 乾燥花 x 索拉花</p>
                  <div className="underline" />
                  <p className="mt-2 mx-auto">報名中</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="col-12 col-lg-4 mb-5"
                >
                  <p className="index-article-date mb-2 mx-auto">2021.08.21</p>
                  <Link to="/event-detail/5">
                    <img
                      className="index-event-unit-img"
                      src="/img/Index/girltalk01.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to="/event-detail/5">
                    <h5 className="index-event-h5 h5-tc mt-3">
                      給女孩的人生關鍵字
                    </h5>
                  </Link>
                  <p className="p-tc mx-auto">Simple talk｜旅行生活篇</p>
                  <div className="underline" />
                  <p className="mt-2 mx-auto">報名中</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="col-12 col-lg-4 mb-5"
                >
                  <p className="index-article-date mb-2 mx-auto">2020.09.5</p>
                  <Link to="/event-detail/4">
                    <img
                      className="index-event-unit-img"
                      src="/img/Index/surf04.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to="/event-detail/4">
                    <h5 className="index-event-h5 h5-tc mt-3">女神盃</h5>
                  </Link>
                  <p className="p-tc mx-auto">Girls Surf Boardriders Taiwan</p>
                  <div className="underline" />
                  <p className="mt-2 mx-auto">報名中</p>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="index-arrow">
            <VscChevronRight />
          </button> */}
        </div>
      </div>
      <div className="banner container-fluid">
        <div className="banner-img"></div>
      </div>
      <div className="join-us container text-center">
        <h2 data-aos="fade-down mb-3">Join Us</h2>
        <div className="d-flex flex-wrap mt-5">
          <div data-aos="fade-down" className="col-12 col-md-6">
            <h6 className="my-3">加入會員</h6>
            <p className="p-tc">和我們一起探索更多生理期的大秘密</p>
            <Link to="/login">
              <button data-aos="fade-down" className="btn-soft-green mt-3">
                SIGN UP
              </button>
            </Link>
          </div>
          <div data-aos="fade-down" className="col-12 col-md-6 mt-5 mt-md-0">
            <h6 className="my-3">經期試算機</h6>
            <p className="p-tc">立即檢測下次經期，獲取月經小知識</p>
            <Link to="/calendar">
              <button data-aos="fade-down" className="btn-soft-green mt-3">
                LET'S GO
              </button>
            </Link>
          </div>
        </div>
        <div className="index-moon-circle text-center">
          <img src="/img/Index/moon-circle01.svg" alt="" />
        </div>
      </div>
      {/* FOOTER */}
      <div className="index-footer container-fluid">
        <footer className="">
          <div className="index-footer-top row m-0 p-0 justify-content-between col-12">
            <div className="index-footer-logo my-auto col-12 col-md-2">
              <Link to="#home">
                <img
                  className="nav-logo"
                  src="/img/Index/logo-s-dark.svg"
                  alt=""
                />
              </Link>
            </div>
            <nav className="my-auto col-12 col-md-10 px-0">
              <ul className="index-footer-btn d-flex justify-content-center justify-content-md-end  my-3 my-md-0 px-auto px-md-0 col-12">
                <li>
                  <Link to="/product" className="index-footer-a ml-3">
                    PRODUCT
                  </Link>
                </li>
                <li>
                  <Link to="/article" className="index-footer-a ml-3">
                    ARTICLE
                  </Link>
                </li>
                <li>
                  <Link to="/kit" className="index-footer-a ml-3">
                    KIT
                  </Link>
                </li>
                <li>
                  <Link to="/event" className="index-footer-a ml-3">
                    EVENT
                  </Link>
                </li>
                <li>
                  <Link to="/calendar" className="index-footer-a ml-3">
                    CALCULATOR
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row m-0 mt-4 p-0 index-footer-bottom col-12 justify-content-between align-items-end">
            <div className="small text-center text-md-left p-0 mt-3 col-12 col-md-6">
              <p className="m-0 p-0">
                JSMART co.
                <br />
                台北市大安區復興南路一段390號2樓
                <br />
                jsmart.girls@gmail.com
              </p>
            </div>
            <div className="text-center text-md-right p-0 col-12 col-md-6">
              <p className="small m-0 p-0">
                Copyright © JSMART All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default IndexMy
