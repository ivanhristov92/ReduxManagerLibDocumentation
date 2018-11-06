import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import Code from '../components/code';
import BottomNavigation from '../components/bottom-navigation';


const pageTitle = "bindSelectorsToState";

class Page extends React.Component  {

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
                                        <h2 className="section-title">{pageTitle}</h2>
                                        <div className="section-block">
                                            <h3>function bindSelectorsToState(subStateGetter, selectors) </h3>
                                            <br/>
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Type</th>
                                                        <th>Default Value</th>
                                                        <th>Flags</th>
                                                        <th>Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>

                                                    <tr>
                                                        <th scope="row">subStateGetter</th>
                                                        <td>string | Function (SubStateGetter)</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>Takes a piece of the global state object and uses that as the 'state' argument in a selector.</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">selectors</th>
                                                        <td>Object (TypicalSelectors)</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>An object of selector functions. Can also include nested selectors.</td>
                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                            <h3>returns</h3>
                                            <br/>
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th>Type</th>
                                                        <th>Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Object (StateBoundSelectors)</td>
                                                        <td>A dictionary of selectors that receive the correct part of the global 'state' automatically. No need for the user to pass the state argument, only any subsequent ones.</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <Code className="language-flow" code={`
// Flow Annotations

type TypicalSelector = (state: Object, ...otherArgs: Array<any>) => any;
type StateBoundSelector = (...otherArgs: Array<any>) => any;

type TypicalSelectors = {
  [someSelector: string]: TypicalSelector | TypicalSelectors
};

type StateBoundSelectors = {
  [someSelector: string]: StateBoundSelector | StateBoundSelectors
};

type SubStateGetter = string | ((globalState: Object) => Object);

export type BindSelectorsToState = (
  subStateGetter: SubStateGetter,
  selectors: TypicalSelectors
) => {
  [someSelector: string]: StateBoundSelectors
};

                                            `} />
                                        </div>{/*//section-block*/}
                                    </section>{/*//doc-section*/}
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




export default Page
