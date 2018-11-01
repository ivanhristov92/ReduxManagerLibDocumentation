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
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Overriding Defaults</h1>
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

/* Overridden */
const actionTypes = actionTypesFactory(MODEL_NAME, {
  additional: {
    CREATE: MODEL_NAME + "/OVERRIDDEN_CREATE"
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

/* Overridden version */
const actionCreators = actionCreatorsFactory(actionTypes, blogRestClient, {
  additional: {
    // By default 'create' would be a thunk, now it is turned into a plain action
    create(payload){
      return {
          type: actionTypes.CREATE,
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

/* Overridden version */
const actionCreators = reducerFactory(actionTypes, {
  additional: {
    [actionTypes.CREATE](state, action){
      return {
          ...state,
          overriddenCreate: true
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

/* Overridden version */
const selectors = selectorsFactory({
  additional: {
    getAll(state) {
      return {overridden: true}
    }
  }
});
                                            `} />

                                        </div>
                                    </section>
                                    <div className="col-md-12 col-12">
                                        <BottomNavigation pageTitle={"Overriding Defaults"}/>
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
