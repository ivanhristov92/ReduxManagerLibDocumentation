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
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Replacing default layers</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">Defaults</h2>
                                        <div className="section-block">
                                            <p>This is a simple configuration to initialize a model with the default configurations.</p>

                                            <Code code={`
import {
  actionTypesFactory,
  actionCreatorsFactory,
  reducerFactory,
  selectorsFactory
} from "redux-manager-lib";

/*
* The Rest Client is a module that is specific to a model.
* It is implemented by the user. It is an object with methods for
* 'create', 'read', 'update' and 'delete'
*/
import blogRestClient from "./blog-post-rest-api";

/*
* We need to give the model some name
*/
const MODEL_NAME = "BlogPost";

/*
* To create the action types, we have to pass the factory the model name.
* It returns an object with the action types for crud operations.
*/
const actionTypes = actionTypesFactory(MODEL_NAME);

/*
* Action creators require the actionTypes and the restClient instance. Redux thunks
* are the default implementation, which is whay the rest client is required.
*/
const actionCreators = actionCreatorsFactory(actionTypes, blogRestClient);

/*
* The reducer factory only needs the actionTypes. It works as
* a normal reducer.
*/
const reducer = reducerFactory(actionTypes);

/*
* Selectors require no input. They include 'getOne', 'getSome', 'getAll'
* and others - that can be very useful.
*/
const selectors = selectorsFactory();

const BlogPost = {
  actionTypes,
  actionCreators,
  reducer,
  selectors
};

/*
* Now when we import the BlogPost model from a different file
* we have access to its:
*
* reducer        - BlogPost.reducer - so it is easy to connect it to the redux state
* actionCreators - BlogPost.actionCreators.read()
* selectors      - BlogPost.selectors.getAll(state)
*/
export default BlogPost;
                                            `} />
                                        </div>
                                    </section>
                                    <section className="doc-section">
                                        <h2 className="section-title">Replacing</h2>
                                        <div className="section-block">
                                            <p>To replace any later, simply make your own an pass it during initialization, as is done with the defaults above.</p>
                                        </div>
                                        <div className="section-block">
                                            <h3>Action Types</h3>
                                            <p>Implementing your own action types layer can be as simple as plain old JS object.</p>
                                            <p>To use it with the ReduxManagerLib factories for action creators and reducers, you need to make sure that you <b>include all four CRUD types</b> and <b>two stateful types for each</b> - like so:</p>
                                            <p>

                                            <Code code={`
const myActionTypes = {
    CREATE: "CREATE",
    CREATE__SUCCESS: "CREATE__SUCCESS",
    CREATE__FAILURE: "CREATE__FAILURE",
    READ: "READ",
    READ__SUCCESS: "READ__SUCCESS",
    READ__FAILURE: "READ__FAILURE",
    UPDATE: "UPDATE",
    UPDATE__SUCCESS: "UPDATE__SUCCESS",
    UPDATE__FAILURE: "UPDATE__FAILURE",
    DELETE: "DELETE",
    DELTE__SUCCESS: "DELTE__SUCCESS",
    DELTE__FAILURE: "DELTE__FAILURE",
}
                                            `} />

                                            </p>
                                            <p className="callout-warning"><b>Feel free to subsitude their string values anyhow you'd like, but the keys are expected to be these</b></p>
                                        </div>
                                        <div className="section-block">
                                            <h3>Action Creators</h3>
                                            <p>By default reducers will work <b>CRUD actions and their stateful variants</b></p>
                                            <p>Also, if it is to work with other defaults, make sure the action creators are <b>thunks</b></p>
                                            <p>

                                                <Code code={`
const myActionCreators = {

      /* This example lacks unexpected error handling! */
      create(payload){
        return function thunk(dispatch){
            dispatch({type: CREATE, payload});
            const someRestCall = ...;
            someRestCall.then((payload)=>{
                dispatch({
                    type: CREATE__SUCCESS,
                    payload
                })
            }).catch(error=>{
                dispatch({
                    type: CREATE__FAILURE,
                    error
                })
            })
        }
      }
      //...
}
                                                `} />

                                            </p>
                                            <p />
                                        </div>
                                        <div className="section-block">
                                            <h3>Reducers</h3>
                                            <p>To make your custom reducer work with the default action types, simply make sure it contains cases for them. These are:</p>
                                            <p>
                                                <Code code={`
const myReducer function(state = /* ... */, action) {
    switch(action.type){

        case CREATE:
            return /*...*/
       //...
    }
}
                                                `} />

                                            </p>
                                            <p />
                                            <p>By default actions cary payload in normalized format!</p>
                                            <p>And selectors expect a certain state shape:</p>
                                            <p>
                                                <Code code={`
const defaultState = {
    byId: {},
    error: null,
    create: "IDLE",
    read: "IDLE",
    update: "IDLE",
    delete: "IDLE",
}
                                                `} />

                                            </p>
                                        </div>
                                        <div className="section-block">
                                            <h3>Selectors</h3>
                                            <p>Selectors simply work with a particular state shape. It will be as shown above, if no custom additions are made</p>
                                            <p>
                                                <Code code={`
const mySelectors = {

  /* There is no error handling here! */
  getAll(state){
     return Object.values(state.byId)
  };
}
                                                `} />

                                            </p>
                                        </div>
                                    </section>
                                    <div className="col-md-12 col-12">
                                        <BottomNavigation pageTitle={"Replacing Layers"}/>
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
