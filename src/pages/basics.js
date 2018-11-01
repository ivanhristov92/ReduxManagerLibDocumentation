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
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Basics</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">Basics</h2>
                                        <div className="section-block">
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <ul className="list no-anchor-padding-list">
                                                        <li><Link className="nav-link" to="basics-action-types">Action Types</Link></li>
                                                        <li><Link className="nav-link" to="basics-action-creators">Action Creators</Link></li>
                                                        <li><Link className="nav-link" to="basics-reducers">Reducers</Link></li>
                                                        <li><Link className="nav-link" to="basics-selectors">Selectors</Link></li>
                                                        <li><Link className="nav-link" to="basics-rest-client">Rest Client</Link></li>
                                                        <li><Link className="nav-link" to="basics-data-flow">Data Flow</Link></li>
                                                        <li><Link className="nav-link" to="basics-examples">Examples</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12 col-12">
                                                    <BottomNavigation pageTitle={"Basics"}/>
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


                {/*//container*/}
                {/*//page-wrapper*/}
            </Layout>
        )
    }
}




export default Page
