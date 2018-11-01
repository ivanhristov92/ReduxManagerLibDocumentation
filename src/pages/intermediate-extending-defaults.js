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
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Extending Defaults</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">Action Types</h2>
                                        <div className="section-block">

                                            <Code code={`
import { actionTypesFactory } from "redux-manager-lib";

const MODEL_NAME = "BlogPost";

/*
* Simple usage
*
* const actionTypes = actionTypesFactory(MODEL_NAME);
*/

/* Extended version */
const actionTypes = actionTypesFactory(MODEL_NAME, {
  additional: {
    SOME_ACTION: MODEL_NAME + "/SOME_ACTION"
  }
});
                                            `} />

                                        </div>
                                    </section>
                                    <section className="doc-section">
                                        <h2 className="section-title">Action Creators</h2>
                                        <div className="section-block">
                                            <Code code={`
import { actionCreatorsFactory } from "redux-manager-lib";


let actionTypes = ...;
 let blogRestClient = ...;
/*
* Simple usage
*
*  const actionCreators = actionCreatorsFactory(actionTypes, blogRestClient);
*/

/* Extended version */
const actionCreators = actionCreatorsFactory(actionTypes, blogRestClient, {
  additional: {
    someAction(payload){
      return {
          type: actionTypes.SOME_ACTION,
          payload
       }
    }
  }
});
                                            `} />

                                        </div>
                                    </section>
                                    <section className="doc-section">
                                        <h2 className="section-title">Reducers</h2>
                                        <div className="section-block">
                                            <Code code={`
import { reducerFactory } from "redux-manager-lib";


let actionTypes = ...;
/*
* Simple usage
*
*  const reducer = reducerFactory(actionTypes);
*/

/* Extended version */
const actionCreators = reducerFactory(actionTypes, {
  // Additional defaul state properties - only extends it
  defaultState: {
    actionTake: false
  },
  additional: {
    // Instead of switch cases, each case is a separate function
    [actionTypes.SOME_ACTION](state, action){
      return {
          ...state,
          actionTaken: true
       }
    }
  }
});
                                            `} />

                                        </div>
                                    </section>
                                    <section className="doc-section">
                                        <h2 className="section-title">Selectors</h2>
                                        <div className="section-block">
                                            <Code code={`
import { selectorsFactory } from "redux-manager-lib";

/*
* Simple usage
*
*  const selectors = selectorsFactory();
*/

/* Extended version */
const selectors = selectorsFactory({
  additional: {
    getIsActionTaken(state) {
      return state.actionTaken;
    }
  }
});
                                            `} />

                                        </div>
                                    </section>
                                    <div className="col-md-12 col-12">
                                        <BottomNavigation pageTitle={"Extending Defaults"}/>
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
