import React from "react";
import './Home.css';
import img1 from '../assets/img1.jpeg'
import Header from "../header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


const Home = () => {
    return (<>

        <Header />
        <main id="main" className="site-main">
            <div className="hidden"></div>
            <div className="block-region-content">
                <section className="splash__wrapper section--red">
                    <div className="splash__scroll dragscroll">
                        <div className="splash">
                            <div className="splash__projects splash__projects--orig">
                                <div className="splash__project ">
                                    <Link to="/" className="splash__img " >
                                        <img
                                            sizes="50vw"
                                            src={img1}
                                            alt="Breaking Sirens - Amnesty International | Ogilvy"
                                        />
                                    </Link>
                                    <div className="splash__overlay"></div>
                                    <p className="splash__description">
                                        Amnesty International
                                        <span>Breaking Sirens
                                        </span>
                                    </p>
                                </div>
                                <div className="splash__project ">
                                    <Link to="/" className="splash__img " >
                                        <img
                                            sizes="50vw"
                                            src={img1}
                                            alt="Breaking Sirens - Amnesty International | Ogilvy"
                                        />
                                    </Link>
                                    <div className="splash__overlay"></div>
                                    <p className="splash__description">
                                        Magazine Luiza
                                        <span>Lu from Magalu
                                        </span>
                                    </p>
                                </div>
                                <div className="splash__project ">
                                    <Link to="/" className="splash__img " >
                                        <img
                                            sizes="50vw"
                                            src={img1}
                                            alt="Breaking Sirens - Amnesty International | Ogilvy"
                                        />
                                    </Link>
                                    <div className="splash__overlay"></div>
                                    <p className="splash__description">
                                        Cannes Contenders
                                        <span>Ketchup to the Rescue, Bring Back Lockdown, Sunshine, Anytime
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider__wrapper slider__wrapper--splash">
                        <svg className="slider__in--splash" width="30" height="20"

                            xmlns={img1}
                            alt="zoom-in">
                            <path d="M1 1h29v19H1z" fill="none" />
                        </svg>
                        <label >Change Zoom</label>
                        <span className="slider__left">|</span>
                        <input type="range" min="1" max="64" className="slider" id="slider" />
                        <span className="slider__right">|</span>


                        <svg className="slider__out--splash" width="30" height="20"
                            xmlns={img1}
                        >
                            <g fill="none" alt="zoom-out">
                                <path d="M1 1h12v7H1zM1 12h12v7H1zM16 1h12v7H16zM16 12h12v7H16z" />
                            </g>
                        </svg>
                    </div>
                </section>


                <div className="section--locker js-locker section--red">
                    <section className="section section--v-center hero hero--red section--lockee js-lockee ">
                        <div className="section__mask"></div>
                        <div className="container">
                            <div className="hero--con">
                                <p>People expect more of brands than ever before. They expect brands to go beyond. We innovate and create
                                    at the intersections to bring forth the best possible growth solutions for our clients. Ogilvy inspires
                                    brands and people to impact the world.</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="has-sticky section--default">
                    <section id="work"
                        className="global-market section section--sticky work js-home2 js-view-dom-id-8a0170c5c970f7bbbac875bc5ff8a241a030590e93f7be3975c6c1ec2fd0c0a3">
                        <div className="section__mask"></div>
                        <div className="container">
                            <form className="views-exposed-form bef-exposed-form"
                                id="views-exposed-form-our-work-grid-our-work-grid"
                            >

                                <ul id="edit-field-category-target-id" className="section__grid-filters work__categories">
                                    <li> <label
                                        className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                        <input type="radio"
                                            id="edit-field-category-target-id-all" name="field_category_target_id" readOnly
                                            checked="checked" className="form-radio" />
                                        <span className="option">- Any -</span><span>&nbsp;</span>
                                    </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            <input type="radio" readOnly
                                                name="field_category_target_id" className="form-radio"
                                            />
                                            <span className="option">Advertising</span><span>&nbsp;</span>
                                        </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            <input type="radio" readOnly
                                                id="edit-field-category-target-id-11" name="field_category_target_id"
                                                className="form-radio" />
                                            <span className="option">PR</span><span>&nbsp;</span>
                                        </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            <input type="radio" readOnly
                                                id="edit-field-category-target-id-31" name="field_category_target_id"
                                                className="form-radio" />
                                            <span className="option">Experience</span><span>&nbsp;</span>
                                        </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            <input type="radio"
                                                id="edit-field-category-target-id-36" name="field_category_target_id" readOnly
                                                className="form-radio" />
                                            <span className="option">Health</span><span>&nbsp;</span>
                                        </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            <input type="radio"
                                                id="edit-field-category-target-id-21" name="field_category_target_id" readOnly
                                                className="form-radio" />
                                            <span className="option">Consulting</span><span>&nbsp;</span>
                                        </label>
                                    </li>
                                </ul>
                            </form>

                            <ul className="work__grid js-work-grid">
                                <li className="work__item js-work-item cat-">
                                    <Link to="/" >
                                        <img
                                            sizes="(min-width:720px) 30vw, 100vw"
                                            src={img1}
                                            alt="Ogilvy Cannes Winners 2022 - 1" title="Ogilvy Cannes Winners 2022 - 1" />
                                        <h3 className="work__item-title">
                                            <span>Shah Rukh Khan My Ad, Rest Towns, Breaking Sirens
                                                <span className="work__item-client">Cannes Winners
                                                </span>
                                            </span>
                                        </h3>
                                    </Link>
                                </li>
                                <li className="work__item js-work-item cat-">
                                    <Link to="/" >
                                        <img
                                            sizes="(min-width:720px) 30vw, 100vw"
                                            src={img1}
                                            alt="Ogilvy Cannes Winners 2022 - 1" title="Ogilvy Cannes Winners 2022 - 1" />
                                        <h3 className="work__item-title">
                                            <span>Shah Rukh Khan My Ad, Rest Towns, Breaking Sirens
                                                <span className="work__item-client">Cannes Winners
                                                </span>
                                            </span>
                                        </h3>
                                    </Link>
                                </li>

                                <li className="work__item js-work-item cat-">

                                    <Link to="work/bride-armour-burger-glitch-dont-ever-leave-me.html">
                                        {/* <picture>
                                            <source
                                                srcset="/sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_600x400/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=nhM2KiqP 600w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_900x600/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=hF2YhTTx 900w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_1200x800/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=kEopWUV2 1200w"
                                                media="(min-width: 720px)" sizes="30vw" /> */}
                                        <img
                                            sizes="(min-width:720px) 30vw, 100vw"
                                            alt="Ogilvy Cannes Winners 2022 - 2" title="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image"
                                            src={img1}
                                        />
                                        <h3 className="work__item-title">
                                            <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                                <span className="work__item-client">Cannes Winners
                                                </span>
                                            </span>
                                        </h3>
                                    </Link>
                                </li>

                                <li className="work__item js-work-item cat-">

                                    <Link to="work/bride-armour-burger-glitch-dont-ever-leave-me.html">

                                        {/* <picture>
                                            <source
                                                srcset="/sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_600x400/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=nhM2KiqP 600w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_900x600/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=hF2YhTTx 900w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_1200x800/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=kEopWUV2 1200w"
                                                media="(min-width: 720px)" sizes="30vw" /> */}
                                        <img
                                            sizes="(min-width:720px) 30vw, 100vw"
                                            alt="Ogilvy Cannes Winners 2022 - 2" title="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image"
                                            src={img1}
                                        />
                                        <h3 className="work__item-title">
                                            <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                                <span className="work__item-client">Cannes Winners
                                                </span>
                                            </span>
                                        </h3>
                                    </Link>
                                </li>
                                <li className="work__item js-work-item cat-"><Link to="work/bride-armour-burger-glitch-dont-ever-leave-me.html"
                                >
                                    {/* <picture>
                                            <source
                                                srcset="/sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_600x400/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=nhM2KiqP 600w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_900x600/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=hF2YhTTx 900w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_1200x800/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=kEopWUV2 1200w"
                                                media="(min-width: 720px)" sizes="30vw" /> */}
                                    <img
                                        sizes="(min-width:720px) 30vw, 100vw"
                                        alt="Ogilvy Cannes Winners 2022 - 2" title="Ogilvy Cannes Winners 2022 - 2"
                                        src={img1}
                                    />
                                    <h3 className="work__item-title">
                                        <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                            <span className="work__item-client">Cannes Winners
                                            </span>
                                        </span>
                                    </h3>
                                </Link>
                                </li>
                                <li className="work__item js-work-item cat-">
                                    <Link to="work/bride-armour-burger-glitch-dont-ever-leave-me.html"
                                        data-category-title="">
                                        {/* <picture>
                                            <source
                                                srcset="/sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_600x400/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=nhM2KiqP 600w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_900x600/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=hF2YhTTx 900w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_1200x800/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=kEopWUV2 1200w"
                                                media="(min-width: 720px)" sizes="30vw" /> */}
                                        <img
                                            sizes="(min-width:720px) 30vw, 100vw"
                                            alt="Ogilvy Cannes Winners 2022 - 2" title="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image"
                                            src={img1}
                                        />
                                        <h3 className="work__item-title">
                                            <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                                <span className="work__item-client">Cannes Winners
                                                </span>
                                            </span>
                                        </h3>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        </main >
        <Footer />
    </>)
}


export default Home;