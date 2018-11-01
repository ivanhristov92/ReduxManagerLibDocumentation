import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import BottomNavigation from '../components/bottom-navigation';

class Page extends React.Component  {

  render(){
    return (
        <Layout breadcrumbs={[{ to: '/', text: 'ooo' }]}>
            <div>
                    <div className="doc-wrapper">
                        <div className="container">
                            <div id="doc-header" className="doc-header text-center">
                                <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Introduction</h1>
                                <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                            </div>{/*//doc-header*/}
                            <div className="doc-body row">
                                <div className="doc-content col-md-9 col-12 order-1">
                                    <div className="content-inner">
                                        <section className="doc-section">
                                            <h2 className="section-title">Introduction</h2>
                                            <div className="section-block">
                                                <div className="row">
                                                    <div className="col-md-12 col-12">
                                                        <ul className="list no-anchor-padding-list">
                                                            <li><Link className="nav-link" to="introduction-motivation">Motivation</Link></li>
                                                            <li><Link className="nav-link" to="introduction-technical-goals">Technical Goals</Link></li>
                                                            <li><Link className="nav-link" to="introduction-core-concepts">Core Concepts</Link></li>
                                                            <li><Link className="nav-link" to="introduction-examples">Examples</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-12 col-12">
                                                       <BottomNavigation pageTitle={"Introductions"}/>
                                                    </div>
                                                </div>{/*//row*/}
                                            </div>{/*//section-block*/}
                                        </section>{/*//doc-section*/}
                                    </div>{/*//content-inner*/}
                                </div>{/*//doc-content*/}

                                <Sidenav/>

                            </div>{/*//doc-body*/}
                        </div>{/*//container*/}
                    </div>{/*//doc-wrapper*/}


            </div>
        </Layout>
    )
  }
}




export default Page
