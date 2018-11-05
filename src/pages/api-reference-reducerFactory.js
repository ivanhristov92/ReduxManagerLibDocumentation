import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import Code from '../components/code';
import BottomNavigation from '../components/bottom-navigation';


const pageTitle = "reducerFactory";

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
                                            <Code className="language-flow" code={`
// Flow Annotations

import { RMLActionTypes } from "./crud-action-types.flow";
import { RMLAction } from "./crud-action-creators.flow";
import { NormalizedData } from "./crud-rest-api.flow";

export type RMLOperationState = "IDLE" | "LOADING" | "SUCCESS" | "FAILURE";

export type RMLOperationStates = {
  create: RMLOperationState,
  read: RMLOperationState,
  update: RMLOperationState,
  delete: RMLOperationState
};

export type RMLState = {
  byId: NormalizedData,
  error: ?Error
} & RMLOperationStates & { [additionalState: string]: any };

export type RMLReducer = (state: RMLState, action: RMLAction) => RMLState;

export type RMLReducerFactoryOptions = {
  additional?: {
    [SOME_ACTION: string]: RMLReducer
  },
  customErrorHandler?: (error: Error, details?: Object) => RMLState
};

export type RMLReducerFactory = (
  actionTypes: RMLActionTypes,
  options: RMLReducerFactoryOptions
) => RMLReducer;
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
