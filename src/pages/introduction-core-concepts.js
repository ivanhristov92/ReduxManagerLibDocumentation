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
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Core Concepts</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">Core Concepts</h2>
                                        <div className="section-block">
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <p><strong>Models</strong>, or data models, in many cases represent a single table in a database, although not necessarily. The backend of an app often provides such models as Users, Blog Posts, Categories, Events, etc. The user can query all Blog Posts, or query just one - they can perform create, read, update and delete (CRUD) operations on those models. ReduxManagerLib provides a run-time generated mechanism for that.</p>
                                                    <p>Keeping track of the data related to a model is done by redux, via reducers, actions, selectors, etc. To add predictability to these components a set of <strong>conventions</strong> is utilized, whose goal is also to keep each component as lean as possible. Conventions make abstractions possible, which in turn create consistency. These conventions and their associated redux components are called "layers" or "modules" throught ReduxManagerLib.</p>
                                                    <h2>Data Shape</h2>
                                                    <p>ReduxManagerLib assumes that you are keeping your <a href="https://redux.js.org/recipes/structuringreducers/normalizingstateshape" rel="nofollow">data normalized</a>.
                                                        Without normalization of the data</p>
                                                    <ol>
                                                        <li>the <a href="https://redux.js.org/recipes/computingderiveddata" rel="nofollow">selectors</a> need to be custom made. <a href="https://hackernoon.com/selectors-in-redux-are-a-must-d6b0637c79b7" rel="nofollow">Read more.</a>
                                                        </li>
                                                        <li>the reducers too – for each model, as we will not know the structure of the data beforehand.</li>
                                                    </ol>
                                                    <h3>Rest Calls</h3>
                                                    <p>Rest calls are usually executed from <a href="https://github.com/reduxjs/redux-thunk">thunks</a>, <a href="https://github.com/redux-saga/redux-saga">sagas</a>, <a href="https://redux-observable.js.org/" rel="nofollow">epics (redux-observable)</a> or <a href="https://www.npmjs.com/package/redux-promise-middleware" rel="nofollow">promises inside actions</a> - mechanisms that allow asynchronous execution and isolate <a href="https://en.wikipedia.org/wiki/Side_effect_(computer_science)" rel="nofollow">side effects</a>, leaving the rest of the application relatively <a href="https://en.wikipedia.org/wiki/Pure_function" rel="nofollow">pure</a>.
                                                        That being said, rest calls often involve data transformation as per the needs of the application, such as deserialization, renaming/omitting properties, normalization, etc. This is why, by executing all of these operations withing the Rest Api Layer, a lot of burden falls off of the rest of the application, making it leaner and simpler.</p>
                                                    <h2>Naming</h2>
                                                    <p>Any naming convention will do, as long as it is kept consistent, and ideally, intuitive for as many developers as possible. The following are implemented in ReduxManagerLib:</p>
                                                    <ol>
                                                        <li>
                                                            <p>models – any non-empty string (“ModelName”), preferably in <a href="https://en.wiktionary.org/wiki/Pascal_case" rel="nofollow">pascal case</a></p>
                                                        </li>
                                                        <li>
                                                            <p>action types – ModelName/SOME_ACTION__STATE
                                                                Start with the model name, followed by a forward slash and then the actual action. The "actual action" is in capital letters, words are separated with underscores, and states ("SUCCESS" or "FAILURE") are attached in the end, preceded by a double underscore.</p>
                                                        </li>
                                                        <li>
                                                            <p>action creators – MyModel.create()
                                                                Action creators are named as foolows: create, read, update, delete</p>
                                                        </li>
                                                        <li>
                                                            <p>selectors – all selectors begin with “get” and the size of the selection is denoted with "one", "some" or "all". They are all in <a href="https://en.wikipedia.org/wiki/Camel_case" rel="nofollow">camel case</a>.</p>
                                                        </li>
                                                    </ol>
                                                    <h2>Actions</h2>
                                                    <p>The structure of actions used by default in ReduxManagerLib is inspired by the <a href="https://github.com/redux-utilities/flux-standard-action">standard flux action</a>. It includes 'type', 'payload' and 'error' as properties. 'meta' is considered for future addition. In contrast with the 'standard flux action', the ones that have an 'error' property actually carry the error, rather than a boolean flag.</p>
                                                    <h2>Error Handling</h2>
                                                    <p><strong>Custom error types</strong> - There are types of errors. Errors occurring during module initialization, and errors occurring during operation, later. Errors occurring during module initialization are not handled, they are thrown to help the developer correct their mistakes. They are instances of ModuleInitializationError.</p>
                                                    <p>Errors which take place during the operation of the module are caught and emitted globally. They don't crash the app and provide meaningful messages and details for the developer to find the error efficiently (UnexpectedRuntimeError).</p>
                                                    <p><strong>400/500-ish responses</strong> from the server are only rejected promises.</p>
                                                    <p><strong>Reducer errors</strong> - errors inside the reducer return the last state, plus an error property, that keeps the error. In addition, by default, the error is emitted globally.</p>
                                                    <p><strong>Selector errors</strong> - run-time errors inside selectors get caught and emitted globally. A default value is returned.</p>
                                                    <p><em>All modules/layers are configurable in terms of error handling, a custom handler can be passed during initialization time.</em></p>
                                                </div>
                                                <div className="col-md-12 col-12 col-lg-12">
                                                    <BottomNavigation pageTitle={"Core Concepts"}/>
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
            </Layout>
        )
    }
}




export default Page
