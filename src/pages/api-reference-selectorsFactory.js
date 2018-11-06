import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import Code from '../components/code';
import BottomNavigation from '../components/bottom-navigation';


const pageTitle = "selectorsFactory";

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

                                            <h3>function selectorsFactory(options)</h3>
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
                                                        <th scope="row">options</th>
                                                        <td>Object (RMLSelectorsFactoryOptions)</td>
                                                        <td></td>
                                                        <td>Optional</td>
                                                        <td>Pass additional reducer "case" functions or a custom error handler function.</td>
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
                                                        <td>Object (RMLSelectors)</td>
                                                        <td>A dictionary of functions that take the state and some additional arguments and return some derived value.</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <Code className="language-flow" code={`
// Flow Annotations
import type { RMLState, RMLOperationStates } from "./crud-reducer.flow";

export type RMLSelectorsFactoryOptions = {
  additional?: {
    [additionalSelector: string]: (Function) => any
  },
  customErrorHandler?: (error: Error, details?: Object) => void
};

export type RMLSelectors = {
  getAll: (state: RMLState, format: "map" | "list") => Array<any> | Object,
  getOne: (state: RMLState, id: string | number) => any | Object,
  getSome: (
    state: RMLState,
    ids: [string | number],
    format: "map" | "list"
  ) => Array<any> | Object,
  getError: (state: RMLState) => ?Object,
  getOperationStates: (state: RMLState) => RMLOperationStates | {},
  [additionalSelector: string]: (Function) => any
};

export type RMLSelectorsFactory = (
  options?: RMLSelectorsFactoryOptions
) => RMLSelectors;

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
