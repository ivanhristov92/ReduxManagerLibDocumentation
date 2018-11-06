import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import Code from '../components/code';
import BottomNavigation from '../components/bottom-navigation';


const pageTitle = "actionCreatorsFactory";

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


                                            <h3>function actionCreatorsFactory(actionTypes, restClient, options) </h3>
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
                                                        <th scope="row">actionTypes</th>
                                                        <td>Object (RMLActionTypes)</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>An object of strings, used inside action creators.</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">restClient</th>
                                                        <td>Object (RMLRestClientInstance)</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>An object including all CRUD ajax functions.</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">options</th>
                                                        <td>Object (RMLActionCreatorsOptions)</td>
                                                        <td></td>
                                                        <td>Optional</td>
                                                        <td>Pass additional action creators or a custom error handler function.</td>
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
                                                        <td>Object (RMLActionCreators)</td>
                                                        <td>A dictionary of functions which create actions. Defaults to thunk actions - <b>they return undefined</b>.</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>


                                            <Code className="language-flow" code={`
// Flow Annotations

import type { RMLActionTypes } from "./crud-action-types.flow";
import type {
  RMLRestClientInstance,
  RMLPayloadExpectedByRestClient
} from "./crud-rest-api.flow";

export type RMLAction = {
  type: string,
  payload?: any,
  error?: ?Error
};

export type RMLActionCreator = (
  payload: RMLPayloadExpectedByRestClient
) => RMLAction | void;

export type RMLActionCreators = {
  create: RMLActionCreator,
  read: RMLActionCreator,
  update: RMLActionCreator,
  delete: RMLActionCreator,
  [someActionCreator: string]: RMLActionCreator
};

export type RMLActionCreatorsOptions = {
  additional?: {
    [someActionCreator: string]: RMLActionCreator
  },
  customErrorHandler?: (error: Error, details?: Object) => void
};

export type RMLActionCreatorsFacroty = (
  actionTypes: RMLActionTypes,
  restClientInstance: RMLRestClientInstance,
  options?: RMLActionCreatorsOptions
) => RMLActionCreators;


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
