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
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Data Flow</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">Data Flow</h2>
                                        <div className="section-block">
                                            <p>This page offers a more general and a more detailed diagrams representing the data flow, implemented in ReduxManagerLib.</p>
                                            <p>Both show the main components of the system - the <Link to="basics-action-creators">actions</Link>, <Link to="basics-reducers">reducers</Link>, <Link to="basics-selectors">selectors</Link> and error handling.</p>
                                        </div>
                                        <div className="section-block overflow-scroll">
                                            <h2>General flow</h2>
                                            <p>This is more general overview of the dataflow, meant to introduce you to the flow. More details will be present in the second diagram.</p>
                                            <div className="text-center">
                                                <img src="assets/images/data-flow.png" />
                                            </div>
                                        </div>
                                        <div className="section-block overflow-scroll">
                                            <h2>Concrete example</h2>
                                            <p>In this version, a concret BlogPost model is used to illustrate more descriptively where data flows and in what form.</p>
                                            <div>
                                                <img src="assets/images/data-flow-example.png" />
                                            </div>
                                        </div>
                                    </section>
                                    <div className="col-md-12 col-12">
                                        <BottomNavigation pageTitle={"Data Flow"}/>
                                    </div>
                                </div>{/*//content-inner*/}
                            </div>{/*//doc-content*/}
                            <Sidenav/>
                        </div>{/*//doc-body*/}
                    </div>{/*//container*/}
                </div>{/*//doc-wrapper*/}
            </Layout>
        )
    }
}




export default Page
