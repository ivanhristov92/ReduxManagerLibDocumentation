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
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Custom Error Handlers</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">Custom Error Handling</h2>
                                        <div className="section-block">
                                            <p>All layers apart from action types accept a customErrorHandler as an option.</p>
                                            <p>Passing options to a module during initialization time happens by passing an options object as the last argument.</p>
                                            <p>The options object may contain an 'additional' property for extending the returned module. It also can include a 'customErrorHandler' function.</p>
                                            <p>The errorHandler passed to the module will be called with the following arguments: the error instance and a 'details' object.</p>
                                            <Code code={`
import { actionCreatorsFactory } from "redux-manager-lib";

const actionTypes = ...;
const restClient = ...;
/*
* Action creators require the actionTypes and the restClient instance. Redux thunks
* are the default implementation, which is whay the rest client is required.
*/
const actionCreators = actionCreatorsFactory(actionTypes, restClient, {
    customErrorHandler(error, details){
        console.log(error); // TypeError: ...
        console.log(details); // { crudMethod: "...", payload: "...", actionType: "...", actionTypeKey: "..." }
    }
});
                                            `} />
                                        </div>
                                    </section>
                                    <div className="col-md-12 col-12">
                                        <BottomNavigation pageTitle={"Custom Error Handlers"} />
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
