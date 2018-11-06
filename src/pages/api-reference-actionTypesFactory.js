import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import Code from '../components/code';
import BottomNavigation from '../components/bottom-navigation';


const pageTitle = "actionTypesFactory";

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


                                            <h3>function actionTypesFactory(modelName, options)</h3>
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
                                                        <th scope="row">modelName</th>
                                                        <td>string</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>The name of the model. It is prefixed to each action type.</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">options</th>
                                                        <td>Object (RMLActionTypesOptions)</td>
                                                        <td></td>
                                                        <td>Optional</td>
                                                        <td>Pass additional action types or a custom error handler function.</td>
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
                                                        <td>Object (RMLActionTypes)</td>
                                                        <td>A dictionary of strings, used in action creators and reducers as action types.</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <Code className="language-flow" code={`
// Flow Annotations

type RMLActionTypes = {|
  CREATE: string,
  CREATE__SUCCESS: string,
  CREATE__FAILURE: string,
  READ: string,
  READ__SUCCESS: string,
  READ__FAILURE: string,
  UPDATE: string,
  UPDATE__SUCCESS: string,
  UPDATE__FAILURE: string,
  DELETE: string,
  DELETE__SUCCESS: string,
  DELETE__FAILURE: string,
  [ADDITIONAL_ACTION: string]: string
|};

type RMLActionTypesOptions = {
  additional?: {
    [SOME_KEY: string]: string
  }
};

type RMLActionTypesFactory = (
  modelName: string,
  options?: RMLActionTypesOptions
) => RMLActionTypes;

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
