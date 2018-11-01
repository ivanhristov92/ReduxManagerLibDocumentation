import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import Code from '../components/code';
import BottomNavigation from '../components/bottom-navigation';


const pageTitle = "";

class Page extends React.Component  {

    render(){
        return (
            <Layout breadcrumbs={[{ to: '/', text: 'ooo' }]} pageTitle={"Read Me"}>
                <div className="doc-wrapper">
                    <div className="container">
                        <div id="doc-header" className="doc-header text-center">
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Motivation</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">Motivation</h2>
                                        <div className="section-block">
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <p className>
                                                        Redux and React are a wildly popular combination, and for a good reason - suitable for all tasks at hand, keeping your hands untangled when you need to add in or change existing functionality. Manageable state, straightforward data flow, good separation of concerns, functional programming practices - all great! But not all is roses when the deadline is closing in and you're still doing some basic data piping.
                                                    </p>
                                                    <p>
                                                        In the interest of saving time different tools have emerged attempting to facilitate faster development. From simple abstractions, to code generators, to a variety of more or less complex systems handling some of your redux for you. Code generators could be useful here and there, but they leave a lot of code behind, which is easily broken by an uncareful hand and quickly looses gracefulness. Simple abstractions simply are rarely enough and complex systems - opinionated. Trial and error of different approaches and tools have lead to a set of core concepts for managing redux that allow for quick product iterations, without losing flexibility in the long term.
                                                    </p>
                                                    <p>
                                                        So, what are the main problems that may cause an ambitious green project to stray and into the swamps before it even takes off. The first factor is indirection. Not knowing where to each part of the code belongs. Is it in the action creator, the side effects layer, the REST API agent, middleware, etc. Then comes inconsistency - you write it once here, once - there, just to get it to work initially, then it lives there. Finally - the sheer size of the code. Luckily, with a few proper convention rules in place some of this frustration disappears. But consistency and leaner code base can only be achieved with reasonable abstractions - and they must be extendable to be of any service in the first place.
                                                    </p>
                                                </div>
                                                <div className="col-md-12 col-12">
                                                    <BottomNavigation pageTitle={"Motivation"}/>
                                                </div>
                                            </div>{/*//row*/}
                                        </div>{/*//section-block*/}
                                    </section>{/*//doc-section*/}
                                </div>{/*//content-inner*/}
                            </div>{/*//doc-content*/}
                            <Sidenav/>
                        </div>{/*//doc-body*/}
                    </div>{/*//container*/}
                </div>


                {/*//container*/}
                {/*//page-wrapper*/}
            </Layout>
        )
    }
}




export default Page
