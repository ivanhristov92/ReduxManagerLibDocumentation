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
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Action Creators</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">Action Creators</h2>
                                        <div className="section-block">
                                            <p>Action creators are functions that return actions. They carry the payload passed to them to the reducer and any middleware.</p>
                                            <p>Actions always contain a <Link to="/basics-action-types">type</Link> property, as it is a Redux requirement, sometimes "payload" and other optional data. You can find out more about the <i>typical</i> action structures <a href="https://github.com/redux-utilities/flux-standard-action">here</a>. They usually look like this:</p>

                                           <Code code={`
let action = {
  type: 'DO_SOMETHING',
  payload: {
    text: 'Do something.'
  }
};
                                           `} />
                                        </div>
                                    </section>
                                    <section className="doc-section">
                                        <div className="section-block">
                                            <h2>What do they look like here?</h2>
                                            <p>Action creators in ReduxManagerLib are plain functions, as usual. They accept <b>any kind of data as payload</b> and simply <b>pass it on</b>. No operations are performed on the payload.</p>
                                            <p><b>Errors are</b> considered <b>payload</b> too. When an error is passed as payload, an <b>error flag</b> is set to true</p>
                                            <p>Any other data added to the action is optional.</p>
                                            <div className="callout-block callout-warning">
                                                <p><b>CRUD Action creators generated by ReduxManagerLib by default are <a href="https://github.com/reduxjs/redux-thunk" target="_blank">thunks</a>. They don't return actions, but dispatch them internally.</b></p>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="doc-section">
                                        <div className="section-block">
                                            <h2>How do I make them?</h2>
                                            <p>ReduxManagerLib exposes factory functions for all basic redux "layers", including action creators.</p>
                                            <p>To generate them, simply use the <b>actionCreatorsFactory</b> function:</p>

                                           <Code code={`
import { actionCreatorsFactory } from "redux-manager-lib";

/*
* The function expects an ActionTypes object, which contains all actionTypes for CRUD, together with "stateful" types - for success and failure
*/
const actionTypes = ...;

/*
* The function expects a RestClient object, which contains all rest call functions for CRUD
*/
const restClient = ...;
/*
* Action creators require the actionTypes and the restClient instance. Redux thunks
* are the default implementation, which is whay the rest client is required.
*/
const actionCreators = actionCreatorsFactory(actionTypes, restClient);

                                           `} />

                                            <p>Check out <Link to="basics-action-types">this section</Link> to understand how to create your <b>actionTypes</b> automatically</p>
                                            <p>For more information about <b>rest clients</b> check <Link href="#">this one</Link>.</p>
                                            <p><Link to="/api-reference">Or head straight to the API Reference</Link></p>
                                        </div>
                                    </section>
                                    <div className="col-md-12 col-12">
                                        <BottomNavigation pageTitle={"Action Creators"}/>
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
