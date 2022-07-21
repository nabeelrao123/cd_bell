import React from "react";
import img1 from '../assets/img1.jpeg';
import Header from "../header/Header";
import './About.css';


const About = () => {
    return (
        <>
            <Header />
            <main id="main" className="site-main">
                <div className="svg-sprite">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <symbol id="close-icon" viewBox="0 0 14.6 14.6">
                            <path fill="none" stroke="currentColor" stroke-width=".8" d="M.3.3l14 14m0-14l-14 14" />
                        </symbol>
                        <symbol id="plus-icon" viewBox="0 0 20.1 20.1">
                            <path fill="none" stroke="currentColor" d="M10.1 0v20.1m10-10H0" />
                        </symbol>
                    </svg>
                </div>
                <div className="hidden"></div>
                <div className="block-region-top">
                    <div className="has-sticky section--dark">
                        <section className="section section--sticky section--v-center hero hero--black">
                            <div className="section__mask"></div>
                            <div className="container">
                                <div className="hero--con">
                                    <p>Ogilvy has been growing brands and businesses since 1948. We continue that rich legacy through
                                        borderless creativity—operating, innovating, and creating at the intersection of talent and
                                        capabilities. Our experts in Public Relations, Consulting, Advertising, Health, and Experience work
                                        fluidly across 131 offices in 93 countries.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="team has-sticky js-team">
                    <section className="section section--sticky section--flush-bottom scrollSection noscriptCSS" id="team">
                        <div className="section__mask"></div>
                        <div className="container">
                            <h2 className="section__title">Our Team</h2>
                            <div
                                className="view view-our-team view-id-our_team view-display-id-our_team_about js-view-dom-id-5be8604e78d4da081dc839a0a8c23fce863909c99dfafca59c3ce7aa1980d598">
                                <div className="team__grid team__size--small">
                                    <div className="team__grid-item">
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait">
                                                    <img
                                                        src={img1}
                                                        alt="Tope" title="Ajala" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Tope <span className="block">
                                                                Ajala </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Global Head of Diversity, Equity &amp; Inclusion
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Tope Global Head of Diversity, Equity &amp;
                                                                Inclusion
                                                                bio</title>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Tope <span className="block">
                                                                        Ajala </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Global Head of Diversity, Equity &amp; Inclusion
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>As Global Head of Diversity, Equity &amp;
                                                                        Inclusion, Tope partners with leaders
                                                                        across Ogilvy’s global network to develop and implement
                                                                        practices, policies, and
                                                                        programs that will ensure Ogilvy has a strong culture of
                                                                        belonging—one that fosters an
                                                                        open, equitable environment where everyone can thrive.
                                                                    </p>
                                                                    <p>Tope joined Ogilvy from WPP where she was DE&amp;I Lead
                                                                        responsible for driving
                                                                        inclusion strategy, partnerships, narrative, and
                                                                        insights. In this role, she developed
                                                                        programs that accelerated the progress and integration
                                                                        across the business.  </p>
                                                                    <p>Born in Nigeria and raised in the UK, Tope is an
                                                                        award-winning DE&amp;I advocate who
                                                                        has lived and worked in London, Germany, Singapore,
                                                                        Japan, and San Francisco—experience
                                                                        which has deepened her appreciation and championing for
                                                                        multiculturalism and inclusion.
                                                                        In 2018 she cofounded <a
                                                                            href="https://www.levelset.group/"
                                                                            rel="noopener noreferrer"
                                                                        >LevelSet</a>—a global nonprofit
                                                                        connecting high potential individuals
                                                                        in Tech &amp; STEM from underserved communities with
                                                                        mentors from similar fields with
                                                                        the aim to advance and empower the Black community with
                                                                        resources.  </p>
                                                                    <p>In her spare time, Tope enjoys curated travel, reading,
                                                                        tennis and yoga.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__press">
                                                                    <h5 className="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                        >Ogilvy names Tope Ajala global
                                                                            head of diversity, equity and
                                                                            inclusion</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                        >Ogilvy Promotes Tope Ajala to
                                                                            Global Head of Diversity, Equity &amp;
                                                                            Inclusion</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:tope.ajala@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Yves Baudechon | Ogilvy" title="Yves Baudechon | Ogilvy"
                                                    />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Yves <span className="block">
                                                                Baudechon </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            President and Co-Founder, Social.Lab Worldwide &amp; Global Lead,
                                                            Social &amp; Performance
                                                            Expert Group
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Yves President and Co-Founder, Social.Lab
                                                                Worldwide &amp; Global Lead,
                                                                Social &amp; Performance Expert Group
                                                                bio</title>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Yves <span className="block">
                                                                        Baudechon </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    President and Co-Founder, Social.Lab Worldwide &amp; Global
                                                                    Lead, Social &amp; Performance
                                                                    Expert Group
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>Yves is
                                                                        and Co-Founder of Social.Lab

                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__press">
                                                                    <h5 className="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                        >November Lunch with Yves
                                                                            Baudechon, President &amp; Co-Founder,
                                                                            Social.Lab Worldwide</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>


                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Chris Beresford-Hill | Ogilvy"
                                                        title="Chris Beresford-Hill | Ogilvy" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Chris <span className="block">
                                                                Beresford-Hill </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            President of Advertising, North America
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Chris President of Advertising, North America
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Chris <span className="block">
                                                                        Beresford-Hill </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    President of Advertising, North America
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>Chris leads Ogilvy Advertising in North America, while
                                                                        also overseeing the creative
                                                                        product across the region.  </p>
                                                                    <p>He most recently spent 4 years as Chief Creative Officer
                                                                        at TBWA\Chiat\Day NY, where he
                                                                        helped lead a turnaround resulting in the most creative
                                                                        awards in the agency’s history,
                                                                        180% business growth, and a return to the AdAge Agency
                                                                        A-List, where after a decade-long
                                                                        absence, "seemingly out of nowhere New York became
                                                                        TBWA's most surprising innovation
                                                                        machine.” </p>
                                                                    <p>Prior to his time at TBWA, Chris spent 8 years as ECD at
                                                                        BBDO New York, along with
                                                                        partner Dan Lucey, steering some of the agency’s most
                                                                        iconic work and helping the office
                                                                        earn multiple AdAge A-List, Creativity Agency of the
                                                                        Year, and ADWEEK Agency of the Year
                                                                        accolades. Their breakthrough work also helped Guinness
                                                                        become Clio Advertiser of the
                                                                        Year and brought Foot Locker to the forefront of pop
                                                                        culture, while reaching its highest
                                                                        share price in history. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__press">
                                                                    <h5 className="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a
                                                                            href="https://www.adweek.com/agencies/ogilvy-names-tbwa-new-yorks-chris-beresford-hill-president-of-advertising-north-america/">Ogilvy
                                                                            Names TBWA New York&#039;s Chris Beresford-Hill
                                                                            President of Advertising Nort…</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:chris.beresford-hill@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a
                                                                            href="https://www.linkedin.com/in/chrisberesfordhill">LinkedIn</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Devika Bulchandani | Ogilvy" title="Devika Bulchandani | Ogilvy"
                                                    />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Devika <span className="block">
                                                                Bulchandani </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Global President &amp; Chief Executive Officer, North America
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Devika Global President &amp; Chief Executive
                                                                Officer, North America
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Devika <span className="block">
                                                                        Bulchandani </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Global President &amp; Chief Executive Officer, North
                                                                    America
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>Devika is Global President and North America CEO of
                                                                        Ogilvy. In her global role, Devika
                                                                        is responsible for driving growth across the agency's
                                                                        five business units: Advertising,
                                                                        PR, Experience, Health, and Growth &amp; Innovation. As
                                                                        CEO of North America, she
                                                                        oversees all aspects of the agency's business across the
                                                                        United States and Canada. In
                                                                        both roles Devika ensures the agency's borderless
                                                                        creativity is deployed to deliver
                                                                        ideas that create impact for clients.</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__press">
                                                                    <h5 className="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href="https://adage.com/article/agency-news/devika-bulchandani-named-global-president-ogilvy/2395076"
                                                                        >Devika Bulchandani Named Global
                                                                            President of Ogilvy</a></li>
                                                                        <li> <a href="https://adage.com/article/agency-news/devika-bulchandani-looks-ogilvys-future-she-prepares-exit-mccann-after-2-decades/2299596"
                                                                        >Devika Bulchandani Looks to
                                                                            Ogilvy&#039;s Future </a></li>
                                                                        <li> <a href="https://www.youtube.com/watch?v=tjz5lfSjIWs"
                                                                        >Devika
                                                                            Bulchandani, President, North America, Mccann
                                                                            Worldgroup On NewsX India …</a></li>
                                                                        <li> <a href="https://aef.com/building-talent/industry-conversations/industry-conversations-devika-bulchandani/"
                                                                        >Industry Conversation with
                                                                            Devika Bulchandani</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:devika.bulchandani@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/devika-bulchandani-84239956/"
                                                                        >LinkedIn</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Ralph Clementson" title="Ralph Clementson" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Ralph <span className="block">
                                                                Clementson </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Chief Operating Officer, EMEA
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Ralph Chief Operating Officer, EMEA
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Ralph <span className="block">
                                                                        Clementson </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Chief Operating Officer, EMEA
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>Ralph is the Executive Partner, Chief Operating Officer,
                                                                        in how we can work more
                                                                        efficiently with clients.  <br />
                                                                        <br />
                                                                        spent years working to break down barriers to help
                                                                        agencies perform more nimbly and
                                                                        better.<br />
                                                                        <br />
                                                                        Having spent eight years with Price Waterhouse London,
                                                                        he joined WPP in 1991 while the
                                                                        Group was in the middle of a cashflow crisis, looking
                                                                        after the finance relationship
                                                                        with the banks and reporting to the market. He moved to
                                                                        Ogilvy France in 1996 as Finance
                                                                        Director, helping set up MindShare and also acting as
                                                                        their FD, while representing the
                                                                        group as FD for the region on various clients including
                                                                        IBM. In 2001 he took over as
                                                                        Finance Director for the EMEA region, becoming General
                                                                        Manager in 2006. In the
                                                                        intervening years, he has helped complete more than
                                                                        twenty acquisitions, pulled the
                                                                        group in Europe into coherent country managed
                                                                        businesses, and created a finance and
                                                                        operational team that he is very proud of. He is based
                                                                        in London and Paris.<br />
                                                                        <br />
                                                                        Ralph is always rebuilding houses wherever he happens to
                                                                        be living, whether from having
                                                                        bought an endangered house or due to fire. He calms
                                                                        himself over the builders' lack of
                                                                        progress and additional charges through karate, which he
                                                                        has practiced since university.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:ralph.clementson@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Paul Cocks" title="Paul Cocks" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Paul <span className="block">
                                                                Cocks </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Chief Financial Officer, Asia
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Paul Chief Financial Officer, Asia
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Paul <span className="block">
                                                                        Cocks </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Chief Financial Officer, Asia
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>Paul is Executive Partner, Chief Financial Officer, Asia.
                                                                        Paul was born in the U.K. and
                                                                        was educated at London University, where in 1979 he
                                                                        obtained a BA in Accountancy. He
                                                                        qualified as a Chartered Accountant in 1982, after
                                                                        training with Ernst &amp;
                                                                        Young.<br />
                                                                        <br />
                                                                        After three years with McCann and five years as a
                                                                        shareholder in the No. 5 U.K. direct
                                                                        marketing agency, Paul joined O&amp;M in 1992.<br />
                                                                        <br />
                                                                        Paul started as Finance Director of O&amp;M Direct in
                                                                        London and moved to be Group
                                                                        Managing Director in 1995.<br />
                                                                        <br />
                                                                        In 1997, he moved to Sydney to join O&amp;M as Chief
                                                                        Operating Officer of Australia and
                                                                        New Zealand where he led the Ogilvy team in the merger
                                                                        between Ogilvy and John Singleton
                                                                        Advertising to form SOM.<br />
                                                                        <br />
                                                                        In January 2000, Paul assumed the role of Business
                                                                        Development Director of Ogilvy Asia
                                                                        Pacific. In this role he was responsible for mergers,
                                                                        acquisitions and the financial
                                                                        support for Ogilvy PR, Ogilvy One, and Enterprise IG in
                                                                        Asia Pacific.<br />
                                                                        <br />
                                                                        In 2006, he took on the role of Regional Commercial
                                                                        Director concentrating on growth
                                                                        initiatives in North East Asia and providing commercial
                                                                        support to the Bates Asia and
                                                                        OgilvyAction networks.<br />
                                                                        <br />
                                                                        Paul was appointed Regional Chief Financial Officer of
                                                                        Asia Pacific with effect from
                                                                        April 2008.<br />
                                                                        <br />
                                                                        Paul’s outside interests have included appointment to
                                                                        the U.K. Committee of the Hubert
                                                                        Humphrey Institute of Public Affairs. He enjoys many
                                                                        sports including golf and tennis.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:paul.cocks@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="John Cornwell" title="John Cornwell" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            John <span className="block">
                                                                Cornwell </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Chief Operating Officer, UK &amp; Global Commercial Director
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open John Chief Operating Officer, UK &amp; Global
                                                                Commercial Director
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    John <span className="block">
                                                                        Cornwell </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Chief Operating Officer, UK &amp; Global Commercial Director
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>John is Executive Partner, Chief Operating Officer, UK
                                                                        &amp; Global Commercial
                                                                        Director. He is hugely passionate about the creative
                                                                        output of the agency and ensuring
                                                                        that the ideas Ogilvy produces for brands which drive
                                                                        their businesses are valued
                                                                        accordingly. To ensure Ogilvy continues to service
                                                                        clients in the most effective way
                                                                        possible, John is spearheading the commercial efforts to
                                                                        move towards a truly integrated
                                                                        Ogilvy.<br />
                                                                        <br />
                                                                        In an ever-changing industry, he relishes the challenges
                                                                        ahead and is highly skilled in
                                                                        negotiating with procurement and securing terms that
                                                                        work for all parties. John has
                                                                        personally managed many key global client relationships
                                                                        (commercially) throughout his
                                                                        career including Kimberly-Clark, Ford, IAG and American
                                                                        Express.<br />
                                                                        <br />
                                                                        John’s career at Ogilvy began when he joined in London
                                                                        as a Management Accountant – more
                                                                        than a few years ago! Since then, he ascended to a
                                                                        variety of different roles across the
                                                                        network in both London and New York, with his remit
                                                                        including regional and global
                                                                        responsibilities.<br />
                                                                        <br />
                                                                        After his time as Finance Director for OgilvyOne and
                                                                        Director of Commercial Strategy and
                                                                        Operations for EMEA, John became Worldwide Commercial
                                                                        Director. Managing a team of
                                                                        Commercial Directors based throughout the world and
                                                                        responsible for managing global
                                                                        client relationships commercially, he has been integral
                                                                        to driving the adoption of
                                                                        commercial best practice across the globe, including
                                                                        pricing, negotiation, procurement
                                                                        strategy, new business and commercial training.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:john.cornwell@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/john-cornwell-17684822/"
                                                                        >LinkedIn</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Stacey Ryan-Cornelius | Ogilvy"
                                                        title="Stacey Ryan-Cornelius | Ogilvy" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Stacey <span className="block">
                                                                Ryan-Cornelius </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Global Chief Financial Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Stacey Global Chief Financial Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Stacey <span className="block">
                                                                        Ryan-Cornelius </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Global Chief Financial Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p><span><span><span><span><span>Stacey is Ogilvy’s Global
                                                                        Chief Financial Officer and
                                                                        oversees all financial operations of
                                                                        the Ogilvy global network. She is
                                                                        also a
                                                                        member of the WPP Finance leadership
                                                                        team.
                                                                    </span></span></span></span></span>
                                                                    </p>
                                                                    <p><span><span><span><span><span>Stacey<strong>
                                                                    </strong>most recently served as
                                                                        Global
                                                                        Chief Financial Officer and Chief
                                                                        Operating Officer of Geometry
                                                                        Global,  where
                                                                        she was a driving force behind the
                                                                        agency’s transformation. Stacey
                                                                        played an
                                                                        important role in the deployment
                                                                        of a distinct and advanced
                                                                        technology
                                                                        platform, Living CommerceTM, to
                                                                        establish a new way of working that
                                                                        is agile,
                                                                        collaborative and reflects the needs
                                                                        of today’s modern marketers. Prior
                                                                        to
                                                                        that, Stacey was Global Chief
                                                                        Financial Officer of WPP Health
                                                                        &amp; Wellness.
                                                                        Stacey originally joined Ogilvy in
                                                                        1999 and held various regional and
                                                                        global
                                                                        leadership roles, including serving
                                                                        as the company’s Worldwide
                                                                        Controller
                                                                        until 2018. She began her career at
                                                                        PricewaterhouseCoopers where she
                                                                        consulted
                                                                        on financial statement audits,
                                                                        mergers and acquisitions and
                                                                        IPOs for  major
                                                                        multinational advertising and
                                                                        publishing clients from Simon &amp;
                                                                        Schuster to
                                                                        Viacom’s MTV
                                                                        Network.</span></span></span></span></span>
                                                                    </p>
                                                                    <p><span><span><span><span><span>Stacey has been
                                                                        featured by Black Enterprise
                                                                        Magazine as
                                                                        one of the 75 Most Powerful Women in
                                                                        Business and is often called upon to
                                                                        speak about diversity and inclusion,
                                                                        and the importance of increased
                                                                        representation across all levels of
                                                                        the marketing and communications
                                                                        industry.</span></span></span></span></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__press">
                                                                    <h5 className="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href="https://marcomweekly.com/2020/12/14/ogilvy-promotes-stacey-ryan-cornelius-and-jag-dhanji-to-replace-global-cfo-and-people-officer/"
                                                                        >Ogilvy promotes Stacey
                                                                            Ryan-Cornelius and Jag Dhanji to replace
                                                                            global CFO and …</a></li>
                                                                        <li> <a href="https://www.youtube.com/watch?v=eC8cnTng_0c"
                                                                        >The Diversity
                                                                            Imperative with UWG&#039;s Greg Edwards &amp;
                                                                            Stacey Ryan-Cornelius </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:stacey.ryan-cornelius@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/stacey-ryan-cornelius-94569b10/"
                                                                        >LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/staceyrchealth?lang=en"
                                                                        >Twitter</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait">
                                                    <img

                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Carina De Blois" title="Carina De Blois" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Carina <span className="block">
                                                                De Blois </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            President, New York
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Carina President, New York
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Carina <span className="block">
                                                                        De Blois </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    President, New York
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>Over the past 20 years Carina has partnered with some of
                                                                        the most seasoned and iconic
                                                                        clients to the newer up and comers helping them build
                                                                        their brands and engage customers
                                                                        while driving business growth.</p>
                                                                    <p>Carina believes brands need to move from treating revenue
                                                                        problems with tactics to
                                                                        solving business challenges with brand experiences that
                                                                        change the way customers think,
                                                                        act and feel.</p>
                                                                    <p>She has a diverse background leading both Global B2B tech
                                                                        brands such as IBM and
                                                                        Facebook and B2C brands such as Samsung and J&amp;J.</p>
                                                                    <p>During her 7 years at Ogilvy she’s partnered with IBM to
                                                                        modernize their brand with
                                                                        first of its kind marketing with Watson and AI. She’s
                                                                        also created The Performance
                                                                        Accelerator, a new capability that brings together data
                                                                        and creativity to drive business
                                                                        impact. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:carina.deblois@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="John Dunleavy" title="John Dunleavy" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            John <span className="block">
                                                                Dunleavy </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Global Chief Client Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open John Global Chief Client Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    John <span className="block">
                                                                        Dunleavy </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Global Chief Client Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>Based in New York, John is a seasoned executive who
                                                                        believes in the unreasonable power
                                                                        of creativity. He has made good use of his passport,
                                                                        working across geographies and
                                                                        cultures to deliver ideas that make a difference to
                                                                        people, brands and the bottom line.
                                                                        He is a passionate and commercially aware leader, who is
                                                                        able to connect brands to
                                                                        consumers and make things happen. <br />
                                                                        <br />
                                                                        IBM has been the cornerstone of the Ogilvy network for
                                                                        the past 25 years and John leads
                                                                        the relationship across Ogilvy and the broader WPP
                                                                        community. Tasked to steward this
                                                                        107-year-old tech brand, John leads a truly integrated
                                                                        team, operating a unique model
                                                                        that includes strategy, creative and media with data and
                                                                        analytics at its core. He is
                                                                        focused on creative excellence, driving transformation,
                                                                        deep collaboration and most
                                                                        importantly keeping IBM in the cultural
                                                                        conversation.<br />
                                                                        <br />
                                                                        John joined Ogilvy from IPG where he was Global
                                                                        President, m:united//McCann, Microsoft’s
                                                                        fully integrated global advertising agency. During his
                                                                        tenure, their work made a
                                                                        significant contribution to Microsoft’s turn
                                                                        around. <br />
                                                                        <br />
                                                                        Prior to IPG, John held senior roles At Saatchi &amp;
                                                                        Saatchi, Grey and Publicis working
                                                                        with some of the world’s most famous marketers, such as
                                                                        Lenovo, Microsoft, Diageo,
                                                                        Coca-Cola, Sony Playstation, Pernod-Ricard, Heineken and
                                                                        SAB Miller. His work has been
                                                                        recognized by the industry and his teams have won over
                                                                        300 international awards,
                                                                        including a coveted Cannes Lions Grand Prix and the Clio
                                                                        for advertiser of the
                                                                        year.<br />
                                                                        <br />
                                                                        John lives in Connecticut with his wife, two boys and
                                                                        Sid the pug. He is an ex-boxer and
                                                                        often appears ring side at major title fights.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:john.dunleavy@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="David Ford | Ogilvy" title="David Ford | Ogilvy"
                                                    />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            David <span className="block">
                                                                Ford </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Global Chief Communications Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open David Global Chief Communications Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    David <span className="block">
                                                                        Ford </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Global Chief Communications Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>David has been Ogilvy’s Global Chief Communications
                                                                        Officer since 2020.</p>
                                                                    <p>As one of Ogilvy’s chief brand champions David manages
                                                                        the reputation of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative companies. His
                                                                        responsibilities as Global Chief Communications Officer
                                                                        include driving all global
                                                                        external and internal communications, evangelizing the
                                                                        strength of the company’s global
                                                                        creative network, and promoting the diverse range of
                                                                        offerings that make Ogilvy the best
                                                                        partner for growth in the market.</p>
                                                                    <p>David is an inclusive, strategic communications leader
                                                                        who has leveraged the power of
                                                                        storytelling and creativity to drive cultural impact
                                                                        throughout his career. He has
                                                                        extensive experience leading communications teams
                                                                        spanning the advertising and media
                                                                        industries. Prior to joining Ogilvy in 2019, David
                                                                        worked for first className organizations
                                                                        including ABC News, where he drove media relations
                                                                        strategy and served as a spokesman
                                                                        for a range of ABC News talent and broadcasts including
                                                                        ‘World News with Diane Sawyer’
                                                                        as well as the news division’s breaking news, political,
                                                                        international, and
                                                                        investigative units. In 2013 he oversaw communications
                                                                        strategy for the launch of Fusion
                                                                        TV, a cable network formed as a joint venture of
                                                                        Disney/ABC and Univision; he added
                                                                        oversight of the network’s marketing efforts in 2015. He
                                                                        later played a critical role as
                                                                        Fusion grew from a Miami-based cable network to a
                                                                        national media company that grew to
                                                                        include recognizable digital brands such as Gizmodo,
                                                                        Jezebel, Deadspin, and The Onion.
                                                                        David began his career as a publicist at The Karpel
                                                                        Group, the entertainment industry's
                                                                        gold standard for LGBTQ market outreach.</p>
                                                                    <p>David is currently the co-chair of the 4A’s Agency
                                                                        Communications Committee, and is
                                                                        serving on the 2021 Public Relations Jury for The One
                                                                        Show. He has a B.A. in Music
                                                                        Industry from the SUNY College at Oneonta and currently
                                                                        lives in New York with his
                                                                        partner and their golden retriever Maddie.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__press">
                                                                    <h5 className="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href="https://www.adweek.com/agencies/ogilvy-unveils-usa-2-0-restructuring-plan-promises-to-close-gender-pay-gap/"
                                                                        >Ogilvy Unveils ‘USA 2.0’
                                                                            Restructuring Plan, Promises to Close
                                                                            Gender Pay Gap</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:david.ford@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="David Fox | Ogilvy" title="David Fox | Ogilvy"
                                                    />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            David <span className="block">
                                                                Fox </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Chief Executive Officer, MENA
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open David Chief Executive Officer, MENA
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    David <span className="block">
                                                                        Fox </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Chief Executive Officer, MENA
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>David holds the role of <span>Chief Executive Officer,
                                                                        Middle East &amp; North
                                                                        Africa</span>. Previous to this role David was
                                                                        Executive Partner and Chief Executive
                                                                        in Australia and New Zealand, a post he has held since
                                                                        returning to his home country in
                                                                        2014.<br />
                                                                        <br />
                                                                        Additionally, in 2018 he took on the role of Chief
                                                                        Transformation Officer, Creative
                                                                        Agencies, WPP AU NZ, driving WPP’s AU NZ creative
                                                                        agencies to be primed for the
                                                                        future.<br />
                                                                        <br />
                                                                        David began his career in Sydney with Batey Ads before
                                                                        joining Ogilvy in 1999 in
                                                                        Australia, working on Nestlé and Unilever among other
                                                                        major brands. Four years later he
                                                                        was promoted to Executive Director of the Sydney office,
                                                                        managing new business and
                                                                        client relationships throughout the agency. In 2005,
                                                                        David moved to London to head up
                                                                        Ogilvy’s Global Trade Marketing operation in Ogilvy’s
                                                                        global shopper marketing agency.
                                                                        In 2006 David was promoted to Global Client Services
                                                                        Director and in 2009 took over as
                                                                        Worldwide Managing Director across all global
                                                                        clients.<br />
                                                                        <br />
                                                                        David has been a judge at both Cannes Lions and Spikes
                                                                        Asia in the areas of Advertising
                                                                        Effectiveness.<br />
                                                                        <br />
                                                                        He has a diploma in Advertising and Communications and
                                                                        is a graduate of Australia's
                                                                        Award School.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:david.fox@ogilvy.com.au">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/david-fox-ba531311/"
                                                                        >LinkedIn</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" data-name="genolet">
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Horacio Genolet" title="Horacio Genolet" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Horacio <span className="block">
                                                                Genolet </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Chief Executive Officer, Latin America
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Horacio Chief Executive Officer, Latin America
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Horacio <span className="block">
                                                                        Genolet </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Chief Executive Officer, Latin America
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p>Horacio is Executive Partner, Chief Executive, Latin
                                                                        America and has led Ogilvy’s Latin
                                                                        American operations since January 2017.<br />
                                                                        <br />
                                                                        Horacio joined Ogilvy in 1993 in Argentina as an Account
                                                                        Supervisor. He was soon
                                                                        promoted to Account Group Director where he oversaw
                                                                        clients such as Duracell, IBM,
                                                                        SmithKline-Beecham and Mercedes Benz. After a three-year
                                                                        stint as Advertising Manager at
                                                                        Telecom Group, the largest cellular telephone company in
                                                                        Argentina, Horacio moved to
                                                                        media agency Carat as Regional Director for Latin
                                                                        America.<br />
                                                                        <br />
                                                                        In 2004 Horacio returned to Ogilvy in Mexico as VP of
                                                                        Client Services in charge of
                                                                        accounts such as American Express, Volvo, Coca-Cola and
                                                                        Gillette.<br />
                                                                        <br />
                                                                        In 2006, he was appointed as Managing Director of the
                                                                        Ogilvy Miami, while also taking
                                                                        over duties as Regional Account Director for American
                                                                        Express, Motorola, Kraft and
                                                                        Lenovo. Horacio returned to Ogilvy Mexico in 2008 as
                                                                        Executive VP and in August of 2011
                                                                        he was appointed CEO.<br />
                                                                        <br />
                                                                        Under Horacio’s leadership, Ogilvy has been ranked the
                                                                        number one agency in Mexico by
                                                                        Merca2.0 for three consecutive years (2014, 2015,
                                                                        2016).<br />
                                                                        <br />
                                                                        Horacio has been recognized for five consecutive years
                                                                        (2012-2017) as one of the 300
                                                                        Most Influential Leaders of Mexico by Líderes Mexicanos
                                                                        magazine, and he was also named
                                                                        one of the Top 100 Marketing and Advertising Leaders by
                                                                        Merca2.0.<br />
                                                                        <br />
                                                                        In 2015, Horacio became President of the Executive Board
                                                                        of the Mexican Association of
                                                                        Advertising Agencies. In 2016, he acted as President of
                                                                        the EFFIE Awards Council.<br />
                                                                        <br />
                                                                        Horacio has a degree in Advertising from the Universidad
                                                                        del Salvador in Buenos Aires
                                                                        and a Master's Degree in Integrated Communications from
                                                                        Bonn University in Germany.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:horacio.genolet@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Philip <span className="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Philip <span className="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                        >LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                        >Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait" >
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Philip <span className="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Philip <span className="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                        >LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                        >Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://twitter.com/HeimannP" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__grid-item" >
                                        <div className="employee">
                                            <div className="flex-wrapper">
                                                <button className="employee__portrait">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" />
                                                    <div className="employee__portrait-content">
                                                        <p className="employee__portrait-name">
                                                            Philip <span className="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p className="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" className="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div className="employee__content-wrapper">
                                                    <div className="employee__content">
                                                        <div className="employee__column employee__column--name">
                                                            <div className="employee__column-content">
                                                                <h3 className="employee__content-name">
                                                                    Philip <span className="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 className="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--content">
                                                            <div className="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="employee__column employee__column--links">
                                                            <div className="employee__column-content">
                                                                <div className="employee__contact">
                                                                    <h5 className="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                        >LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                        >Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="https://www.linkedin.com/in/philip-heimann-a1639372/" className="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



                <div className="has-sticky">
                    <section className="section section--sticky scrollSection noscriptCSS" id="feed">
                        <div className="section__mask"></div>
                        <div className="container">
                            <h2 className="section__title">Ideas</h2>
                            <div
                                className="view view-ideas-list view-id-ideas_list view-display-id-ideas_about js-view-dom-id-0351ae85c73e1ac3069d547d5c9dc9ccc89f138d2a509cbe320939ba13055895">
                                <div className="view-filters">
                                    <form className="views-exposed-form bef-exposed-form"

                                        id="views-exposed-form-ideas-list-ideas-about" >
                                        <ul className="section__grid-utilities section__grid-utilities--mobile ideas-list">
                                            <li id="edit-field-feed-category-target-id" className="section__grid-filters">
                                                <ul data-drupal-selector="edit-field-feed-category-target-id"
                                                    id="edit-field-feed-category-target-id--wrapper"
                                                    className="fieldgroup form-composite form-radios section__grid-filters"
                                                    name="field_feed_category_target_id">
                                                    <li className="ideas-category">
                                                        <input
                                                            type="radio" id="edit-field-feed-category-target-id-all"
                                                            name="field_feed_category_target_id" value="All" checked="checked"
                                                            className="form-radio" />
                                                        <label 
                                                            className="option">All</label>
                                                    </li>
                                                    <li className="ideas-category">
                                                        <input
                                                            type="radio" id="edit-field-feed-category-target-id-201"
                                                            name="field_feed_category_target_id" value="201"
                                                            className="form-radio" />
                                                        <label 
                                                            className="option">Read</label>
                                                    </li>
                                                    <li className="ideas-category">
                                                        <input
                                                            type="radio" id="edit-field-feed-category-target-id-206"
                                                            name="field_feed_category_target_id" value="206"
                                                            className="form-radio" />
                                                        <label 
                                                            className="option">Watch</label>
                                                    </li>
                                                    <li className="ideas-category">
                                                        <input
                                                            type="radio" id="edit-field-feed-category-target-id-196"
                                                            name="field_feed_category_target_id" value="196"
                                                            className="form-radio" />
                                                        <label 
                                                            className="option">Listen</label>
                                                    </li>
                                                    <li className="ideas-category">
                                                        <input
                                                            type="radio" id="edit-field-feed-category-target-id-191"
                                                            name="field_feed_category_target_id" value="191"
                                                            className="form-radio" />
                                                        <label 
                                                            className="option">Press</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="section__search-form js-feed-search "
                                                data-search-category="Idea">
                                                <div className="input">
                                                    <input
                                                        type="text" id="edit-combine" name="combine" value="" size="30"
                                                        maxlength="128" className="form-text" aria-label="Search work" />
                                                </div>
                                                <button className="section__grid-utility">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                        viewBox="0 0 14 14" role="img" aria-labelledby="worksearch">
                                                        <title id="worksearch">Search</title>
                                                        <path fill="none" stroke="currentColor" stroke-width=".75"
                                                            d="M10.93 5.57a4.95 4.95 0 0 1-4.97 4.94A4.95 4.95 0 0 1 1 5.57 4.95 4.95 0 0 1 5.96.64a4.96 4.96 0 0 1 4.97 4.93zM9.37 9.35L13.04 13 9.37 9.35z" />
                                                    </svg>
                                                </button>
                                                <button className="section__grid-utility" type="reset">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15"
                                                        viewBox="0 0 17 15" role="img" aria-labelledby="workreset">
                                                        <title id="workreset">Reset</title>
                                                        <path fill="none" stroke="currentColor"
                                                            d="M15.64.8L1.43 15m14.14 0L1.36.8" />
                                                    </svg>
                                                </button>
                                                <div
                                                    className="search-form-showing section__grid-right section__grid-page js-section-page-view search-icons is-home">
                                                    <p>

                                                        {/* <a
                                                    className="section__page-view-link js-section-page-link">
                                                         */}
                                                        <span
                                                            className="js-section-page-view-text"><i
                                                                className="sr-only">Search</i></span> <svg
                                                                    viewBox="0 0 20.1 20.1">
                                                            <path fill="none" d="M10.1 0v20.1m10-10H0" />
                                                        </svg>

                                                        {/* </a> */}


                                                    </p>
                                                </div>
                                                <span className="adv-search-ideas-icon adv-search-icon  ">
                                                    <svg id="plus-icon" viewBox="0 0 20.1 20.1" width="100%" height="100%">
                                                        <path fill="none" stroke="currentColor" d="M10.1 0v20.1m10-10H0"></path>
                                                    </svg>
                                                </span>
                                            </li>
                                        </ul>
                                        <div id="search-capabilities" className="adv-search-list-con adv-search-list-con-ideas"
                                            style={{ display: "none" }}  >
                                            <ul data-drupal-selector="edit-field-capability-target-id"
                                                id="edit-field-capability-target-id--wrapper"
                                                className="fieldgroup form-composite form-checkboxes grid small--grid--2up large--grid--3up"
                                                name="field_capability_target_id">
                                                <li className="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-1"
                                                        type="checkbox" id="edit-field-capability-target-id-1"
                                                        name="field_capability_target_id[1]" value="1" className="form-checkbox"
                                                        data-url="advertising" />
                                                    <label  className="option">
                                                        {/*                                                 
                                                <a
                                                    className="subcategories" title="Advertising">Advertising 
                                                     */}
                                                        <svg
                                                            id="plus-icon" viewBox="0 0 20.1 20.1" width="100%"
                                                            height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>

                                                        {/* </a> */}

                                                    </label>
                                                </li>
                                                <li className="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-11"
                                                        type="checkbox" id="edit-field-capability-target-id-11"
                                                        name="field_capability_target_id[11]" value="11" className="form-checkbox"
                                                        data-url="pr" />
                                                    <label  className="option">
                                                        {/* <a
                                                    className="subcategories" title="PR">PR  */}

                                                        <svg id="plus-icon"
                                                            viewBox="0 0 20.1 20.1" width="100%" height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>

                                                        {/* </a> */}

                                                    </label>
                                                </li>
                                                <li className="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-31"
                                                        type="checkbox" id="edit-field-capability-target-id-31"
                                                        name="field_capability_target_id[31]" value="31" className="form-checkbox"
                                                         />
                                                    <label  className="option">
                                                        {/* <a
                                                    className="subcategories" title="Experience" href="#">
                                                         */}
                                                        Experience <svg
                                                            id="plus-icon" viewBox="0 0 20.1 20.1" width="100%"
                                                            height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>
                                                        {/* </a> */}

                                                    </label>
                                                </li>
                                                <li className="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-36"
                                                        type="checkbox" id="edit-field-capability-target-id-36"
                                                        name="field_capability_target_id[36]" value="36" className="form-checkbox"
                                                        data-url="health" />
                                                    <label  className="option">

                                                        {/* <a
                                                    className="subcategories" title="Health" href="#" >Health  */}

                                                        <svg id="plus-icon"
                                                            viewBox="0 0 20.1 20.1" width="100%" height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>
                                                        {/* </a> */}

                                                    </label>
                                                </li>
                                                <li className="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-21"
                                                        type="checkbox" id="edit-field-capability-target-id-21"
                                                        name="field_capability_target_id[21]" value="21" className="form-checkbox"
                                                         />
                                                    <label  className="option">
                                                        {/* <a
                                                    className="subcategories" title="Consulting" href="#" >Consulting 
                                                     */}
                                                        <svg
                                                            id="plus-icon" viewBox="0 0 20.1 20.1" width="100%"
                                                            height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>
                                                        {/* </a> */}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <input  type="hidden"  />
                                        <div 
                                            className="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input
                                                data-bef-auto-submit-click="" className="js-hide button js-form-submit form-submit"
                                                data-drupal-selector="edit-submit-ideas-list" 
                                                id="edit-submit-ideas-list" value="Apply" />
                                        </div>
                                    </form>
                                </div>
                                <div className="js-feed-grid">
                                    <div
                                        className="grid small--grid--2up medium--grid--3up large--grid--4up xlarge--grid--5up js-feed-item-container js-feed-search-grid">
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/menno-kluin-named-chief-creative-officer-ogilvy-new-york"
                                            >
                                                <div className="feed__title-card">
                                                    <p className="feed__category">press</p>
                                                    <h4 className="feed__title">Menno Kluin Named Chief Creative Officer for Ogilvy
                                                        New York
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p className="feed__date">07/05/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>

                                                        <p>Menno will be responsible for the creative product in Ogilvy’s New
                                                            York office servicing a
                                                            range of global and…
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--watch js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-digital-empathy-can-virtual-interactions-create-meaningful-connections"
                                                data-id="6791">
                                                <div className="feed__title-card">
                                                    <p className="feed__category">watch</p>
                                                    <h4 className="feed__title">Ogilvy On: Digital Empathy — Can Virtual
                                                        Interactions Create Meaningful
                                                        Connections?
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        Dayoan Daumont
                                                    </p>
                                                    <p className="feed__date">07/01/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>
                                                        <p>How can brands successfully deploy digital humans, digital
                                                            possessions, and digital spaces,
                                                            effectively and with…
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">watch <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/bower-house-digital-acquired-wpp-join-ogilvy-global-network"
                                            >
                                                <div className="feed__title-card">
                                                    <p className="feed__category">press</p>
                                                    <h4 className="feed__title">Bower House Digital Acquired by WPP, to Join Ogilvy
                                                        Global Network
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p className="feed__date">06/30/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>Bower House Digital is a leading marketing technology services agency
                                                                based in Australia.</p>
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--read js-feed-item"
                                                href="https://www.ogilvy.com/ideas/digital-empathy-can-virtual-interactions-create-meaningful-connections"
                                            >
                                                <div className="feed__title-card">
                                                    <p className="feed__category">read</p>
                                                    <h4 className="feed__title">Digital Empathy: Can Virtual Interactions Create
                                                        Meaningful Connections?
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        DieuCam Nguyen
                                                        and Emily Poon
                                                    </p>
                                                    <p className="feed__date">06/30/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>How brands can successfully deploy digital humans, digital
                                                                possessions, and digital spaces.
                                                            </p>
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-germany-deutsche-bahn-win-grand-prix-warc-awards-effectiveness"
                                            >
                                                <div className="feed__title-card">
                                                    <p className="feed__category">press</p>
                                                    <h4 className="feed__title">Ogilvy Germany and Deutsche Bahn win the Grand Prix
                                                        at the WARC Awards for
                                                        Effectiveness
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p className="feed__date">06/28/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>The "Discover Germany" campaign was awarded with the top prize in the
                                                                “Instant Impact”
                                                                category.</p>
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-returns-top-spot-named-network-year-cannes-lions-2022"
                                            >
                                                <div className="feed__title-card">
                                                    <p className="feed__category">press</p>
                                                    <h4 className="feed__title">Ogilvy Returns to the Top Spot, Named Network of the
                                                        Year at Cannes Lions
                                                        2022
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p className="feed__date">06/24/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>Thirty-seven offices contributed to winning a total of 88 Lions as
                                                                Ogilvy earned the top
                                                                network prize.</p>
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-wins-gold-lions-its-work-intersection-data-creativity-ups-festival-total-78-lions"
                                            >
                                                <div className="feed__title-card">
                                                    <p className="feed__category">press</p>
                                                    <h4 className="feed__title">Ogilvy Wins Gold Lions for Its Work at the
                                                        Intersection of Data &amp;
                                                        Creativity, Ups Festival Total to 78 Lions
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p className="feed__date">06/23/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>
                                                        <p lang="EN-US">Offices in Johannesburg, Lisbon,
                                                            Melbourne, Mumbai, and São
                                                            Paulo Win Gold as Creative…
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--read js-feed-item"
                                                href="https://www.ogilvy.com/ideas/how-brands-can-swim-against-inflation-stream"
                                            >
                                                <div className="feed__title-card">
                                                    <p className="feed__category">read</p>
                                                    <h4 className="feed__title">How Brands Can Swim Against the Inflation Stream
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        Amanda Ortiz
                                                        and Olivia Rindone
                                                    </p>
                                                    <p className="feed__date">06/23/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>Keeping the big picture in mind and providing value to consumers has
                                                                proven to be sound
                                                                strategy. </p>
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-recognized-creative-effectiveness-gold-lions-courage-beautiful-moldy-whopper"
                                            >
                                                <div className="feed__title-card">
                                                    <p className="feed__category">press</p>
                                                    <h4 className="feed__title">Ogilvy Recognized for Creative Effectiveness with
                                                        Gold Lions for ‘Courage
                                                        Is Beautiful’ and ‘Moldy Whopper’
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p className="feed__date">06/22/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>
                                                        <p>
                                                            <p lang="EN-US">Creative network wins seven Gold Lions
                                                                on Day 3, ups Festival
                                                                total to 55 Lions.</p>
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="grid__item">
                                            <a className="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-wins-three-gold-lions-including-kenyas-first-gold-day-two-ups-festival-total-34"
                                            >
                                                <div className="feed__title-card">
                                                    <p className="feed__category">press</p>
                                                    <h4 className="feed__title">Ogilvy Wins Three Gold Lions Including Kenya’s First
                                                        Gold on Day Two, Ups
                                                        Festival Total to 34
                                                    </h4>
                                                </div>
                                                <div className="feed__metadata">
                                                    <p className="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p className="feed__date">06/21/2022</p>
                                                </div>
                                                <div className="feed__content">
                                                    <div>
                                                        <p lang="EN-US">Ogilvy Africa, Ogilvy Mexico City among
                                                            Gold winners as agency
                                                            wins 12 Lions on Day…
                                                        </p>
                                                    </div>
                                                    <p className="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>








            </main >

        </>
    )
}

export default About;

