import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import Code from '../components/code';
import BottomNavigation from '../components/bottom-navigation';


const pageTitle = "Read Me";

class IndexPage extends React.Component  {

  render(){
    return (
        <Layout breadcrumbs={[{ to: '/', text: 'ooo' }]} pageTitle={"Read Me"}>
            <div className="doc-wrapper">
                <div className="container">
                    <div id="doc-header" className="doc-header text-center">
                        <h1 className="doc-title">
                            <i className="icon fa fa-paper-plane" /> {pageTitle}
                        </h1>
                        <div className="meta">
                            <i className="far fa-clock" /> Last updated: Oct 30th, 2018
                        </div>
                    </div>
                    {/*//doc-header*/}
                    <div className="doc-body row">
                        <div className="doc-content col-md-9 col-12 order-1">
                            <div className="content-inner">
                                <section className="doc-section">
                                    <h2 className="section-title">What is ReduxManagerLib?</h2>
                                    <div className="section-block">
                                        <p>
                                            ReduxManagerLib is a runtime{' '}
                                            <strong>generator of CRUD-ready data models</strong> for{' '}
                                            <strong>Redux</strong>.
                                        </p>
                                        <p>
                                            It creates all of the <strong>Redux piping</strong>{' '}
                                            necessary <strong>to start working</strong>{' '}
                                            <strong>with</strong> a given model very{' '}
                                            <strong>quickly</strong>. On top of that it provides a piece
                                            of mind, because it is{' '}
                                            <strong>predictable and easy to follow</strong>, and gives
                                            meaningful feedback.
                                        </p>
                                        <p>
                                            <em>
                                                ReduxManagerLib can be used with any Redux app, regardless
                                                of the view library of choice.
                                            </em>
                                        </p>
                                        <div>
                                            <Link className="link" to="introduction">
                                                Check out the introductory section for more details and
                                                examples
                                            </Link>
                                        </div>
                                        <div>
                                            <a
                                                className="link"
                                                href="https://github.com/ivanhristov92/ReduxManagerLibDemos"
                                            >
                                                Or go and see a more thorough demo here
                                            </a>
                                        </div>
                                    </div>
                                </section>
                                <section className="doc-section">
                                    <h2 className="section-title">Learn ReduxManagerLib</h2>
                                    <div className="section-block">
                                        <h3 className="block-title">The Basics</h3>
                                        <ul>
                                            <li>
                                                Check out what{' '}
                                                <Link className="link" to="introduction-motivation">
                                                    motivated the creation
                                                </Link>{' '}
                                                of the library, and its{' '}
                                                <Link
                                                    className="link"
                                                    to="introduction-core-concepts"
                                                >
                                                    core concepts.
                                                </Link>
                                            </li>
                                            <li>
                                                You may want to also take a look at this{' '}
                                                <Link className="list" to="/basics-examples">
                                                    basic example
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="section-block">
                                        <h3 className="block-title">IntermeAdiate Concepts</h3>
                                        <ul>
                                            <li>
                                                The{' '}
                                                <Link className="link" to="/intermediate">
                                                    "Intermediate" section
                                                </Link>{' '}
                                                covers things like extending, overriding or replacing
                                                defaults.
                                            </li>
                                            <li>
                                                Or go straight to the more{' '}
                                                <Link className="list" to="/intermediate-examples">
                                                    intermediate examples
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                <section className="doc-section">
                                    <h2 className="section-title">Developer Experience</h2>
                                    <div className="section-block">
                                        <p>
                                            The library helps make things more consistent. It gives very
                                            informative feedback.And provides built-in helper functions
                                            to make things even easier
                                        </p>
                                    </div>
                                </section>
                                <section id="installation-section" className="doc-section">
                                    <h2 className="section-title">Installation</h2>

                                    <div className="section-block">
                                        <p>
                                            ReduxManagerLib is available in github, so you can download
                                            it from here:
                                            <a
                                                className="link"
                                                href="https://github.com/ivanhristov92/ReduxManagerLib.git"
                                            >
                                                https://github.com/ivanhristov92/ReduxManagerLib.git
                                            </a>
                                        </p>
                                        <p>or install it directly as an npm package:</p>
                                        <p>
                                            <code>npm i --save redux-manager-lib</code>
                                        </p>
                                        <p />
                                        <div className="callout-block callout-warning">
                                            <h4 className="callout-title">About bundling</h4>
                                            <p>
                                                Currently the package does not include a pre-built
                                                version, so you need to bundle it yourself. In case you
                                                use Webpack or some other bundler, it will become part of
                                                your source code.
                                            </p>
                                        </div>
                                    </div>
                                    {/*//section-block*/}
                                </section>
                                {/*//doc-section*/}
                                <section className="doc-section">
                                    <h2 className="section-title">The Gist</h2>
                                    <div className="section-block">
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
`}/>
                                    </div>
                                </section>
                            </div>
                            {/*//content-inner*/}
                            <div className="col-md-12 col-12">
                                <BottomNavigation pageTitle={pageTitle}/>
                            </div>
                        </div>
                        {/*//doc-content*/}

                        <Sidenav />
                    </div>
                    {/*//doc-body*/}
                </div>
                {/*//container*/}
            </div>
            {/*//doc-wrapper*/}


            {/*//container*/}
            {/*//page-wrapper*/}
        </Layout>
    )
  }
}




export default IndexPage
