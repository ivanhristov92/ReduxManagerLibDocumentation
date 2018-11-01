import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import Code from '../components/code';
import BottomNavigation from '../components/bottom-navigation';


const pageTitle = "Error Handling Of Custom Code";

class Page extends React.Component  {

    render(){
        return (
            <Layout breadcrumbs={[{ to: '/', text: 'ooo' }]} pageTitle={"Read Me"}>
                <div className="doc-wrapper">
                    <div className="container">
                        <div id="doc-header" className="doc-header text-center">
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> {pageTitle}</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">{pageTitle}</h2>
                                        <div className="section-block">

                                            <p>This section aims to demonstrate techniques for <u>handling errors inside your custom code</u>.</p>
                                            <p>The goal is to <b>ensure robustness</b> of the <b><i>additions</i></b> you make <b>to the ReduxManagerLib defaults</b>.</p>

                                            <p>Separate sections, dedicated to individual "modules", will show you how errors are handled in ReduxManagerLib. Hopefully this will be useful when decide to increase the level of trust in your program.</p>
                                        </div>

                                        <div className="section-block">
                                            <h3>Action Creators</h3>


                                                    <div className="section-block">
                                                        <h4>Plain actions</h4>
                                                        <p><b>Standard action creators</b> return the <b>typical redux action</b>, which contains a 'type' and some additional data, and <b>does nothing asynchronous</b>.</p>

                                                        <p>Should you decide to add such action creators to your code, maybe this example will be useful. This is how ReduxManagerLib woul handle this:</p>
                                                        <p>
                                                        <Code code={`
import { dispatchAnUnexpectedErrorEvent } from "readux-manager-lib";

//const actionTypes = ...;

function someAction(payload){
    try {
        return { type: actionTypes.SOME_ACTION, payload };
      } catch (error) {
        // use the utility function, exposed
        // by ReduxManagerLib or create a similar one
        // on your own.
        // It emits a global Javascript event
        unexpectedRuntimeErrorHandler(error, {
          // Add details to the error, to provide
          // a better context for debugging
          actionName: "someAction",
          payload,
          actionTypes,
          actionTypeKey: "SOME_ACTION"
        });
      }
  }

                                                        `} />
                                                        </p>
                                                    </div>
                                                    <div className="section-block">
                                                        <h4>Thunks</h4>
                                                    <p>Thunks a very common solution to <b>async operations</b> in redux. They are action creators that can dispatch multiple actions asynchronously.</p>
                                                        <p>Thunks are the <b>default implementation of side effects and action creators</b> in ReduxManagerLib.</p>
                                                        <p>In order to decrease the fragility of apps using ReduxManagerLib an approach to error handling is used, that is similiar to the following:</p>

                                                        <p>
                                                        <Code code={`

import { dispatchAnUnexpectedErrorEvent } from "readux-manager-lib";

//const actionTypes = ...;
//const restClient = ...;

function someAction(){
    try {
        dispatch({ type: actionTypes.SOME_ACTION, payload });

        // Do the async operation
        let promise = restClient.someOperation(payload);

        // ReduxManagerLib uses and provides some useful runtime typeCheckers
        // this is one of them
        typeCheckPromise(promise);

        return promise
          .then(response => {
            dispatch({
              type: actionTypes.SOME_ACTION__SUCCESS,
              payload: response
            });
          })
          .catch(error => {
            dispatch({
              type: actionTypes.SOME_ACTION__FAILURE,
              error: error
            });
          });
      } catch (error) {
        // use the utility function, exposed
        // by ReduxManagerLib or create a similar one
        // on your own.
        // It emits a global Javascript event
        dispatchAnUnexpectedErrorEvent(error, {
          // Add details to the error, to provide
          // a better context for debugging
          method: "someAction",
          payload,
          actionType: actionTypes.SOME_ACTION,
          actionTypeKey: "SOME_ACTION"
        });
      }
  }
                                                        `} />
                                                        </p>

                                                        <p>To explore ReduxManagerLib's <b>type check helpers</b>, <Link>see</Link>.</p>
                                                    </div>
                                        </div>{/*//section-block*/}


                                        <div className="section-block">
                                            <h3>Reducers</h3>


                                            <p>
                                                <Code code={`


 import { dispatchAnUnexpectedErrorEvent } from "readux-manager-lib";

 const STATES = ...;

 // Make reducer, dedicated to a special
 // case and add it to the default ReduxManagerLib
 // reducer
 function someAction(state, action ) {
    try {
      // ReduxManagerLib uses and provides some useful
      // runtime typeCheckers for validation.
      // They are optional, of course.
      typeCheckState(state);
      typeCheckAction(action);

      return {...state, someActionTaken: true}

    } catch (error) {
      // unexpected run-time error
      dispatchAnUnexpectedErrorEvent(error, { state, action });

      return {...state, error}
    }
  }



  // It's good to provide a
  // default state to individual cases
  // to avoid surprises.

  const defaultState = {
      byId: {},
      error: null,
      create: STATES.IDLE,
      read: STATES.IDLE,
      update: STATES.IDLE,
      delete: STATES.IDLE,
      someActionTaken: false.
    }

                                            `} />
                                            </p>



                                        </div>
                                    </section>{/*//doc-section*/}
                                </div>{/*//content-inner*/}
                                <div className="col-md-12 col-12">
                                    <BottomNavigation pageTitle={pageTitle}/>
                                </div>
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
