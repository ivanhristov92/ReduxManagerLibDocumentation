import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Sidenav from '../components/sidenav';
import Code from '../components/code';
import BottomNavigation from '../components/bottom-navigation';


const pageTitle = "Rest Client";

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

                                        <div className="section-block">
                                        </div>

                                        <div className="section-block">
                                            <h3>Role</h3>

                                            <p>
                                                In the whole scheme of things, rest clients are directly accessed and called inside side effect layers.
                                            </p>
                                            <p>
                                                In the default case for ReduxManagerLib this is the thunk action creators. In other application set-up thunks can be substituted with epics (redux-observable), for example, or with sagas.
                                            </p>
                                        </div>

                                        <div className="section-block">
                                            <h3>Behaviour/Interface</h3>

                                            <p>ReduxManagerLib takes the position that a typical Rest Client needs to return a promise. Of course, other mechanisms could be used instead. However for simplicity's sake and maximum interoperability and ease of use, Promise is the abstraction of choice.</p>

                                            <p>In terms of arguments, ReduxManagerLib will pass the payload of the action to the Rest Client method being invoked.</p>
                                        <p>
                                            The second assumption ReduxManagerLib makes is that data resolved by the Rest Client is normalized and wrapped in an object with a specific structure:

                                            <Code code={`

// Normalized entries are wrapped in an object with a 'byId' property
{
  byId: {
    anyId1: {...},
    anyId2: {...},
    anyId3: {...},
  }
};
                                            `} />
                                        </p>
                                        </div>

                                        <div className="section-block">
                                            <h3>Example</h3>

                                            <p>In this example you'll see a BlogPostRestClient implemented. This particular example uses <b>normalizr</b> to transform and normalize the data. To finish the adaptation of the shape of the data, a simple wrapping object is attached in the end.</p>

                                            <Code code={`
import superagent from "superagent";
import { normalize, schema } from "normalizr";

const ROOT = "...";


///****** NORMALIZR CODE ******/

// Define a users schema
const post = new schema.Entity(
  "post",
  {},
  {
    // This setting allows you to transform the data
    // before normalization - the perfect place for adaters
    processStrategy: (entity, parent, key) => {
      return {
        title: entity.title,
        content: entity.content,
        id: entity.id
      };
    }
  }
);
const arrayOfPosts = [post];
///******************************/


///****** THE REST CLIENT ******/

export default {
    read() {
      //Make the async call
      return superagent
        .get(ROOT + "/Posts")
        .then(response => {
          // Transform the response
          return shapeResponse(response);
        })
        // The catch statement is not necessary
        // unless you want to do some manipulation
        // of the error
        .catch(error => {
          // We can adapt the error here, if we want
          return Promise.reject(error);
        });

      function shapeResponse(response) {
        // Transform and normalize the data
        const normalizedData = normalize(response.body, arrayOfPosts);
        // Adapt it to the form ReduxManagerLib expects
        return {
          byId: normalizedData.entities.post
        };
      }
    }
}
                                            `} />
                                        </div>
                                    </section>


                                    <div className="col-md-12 col-12">
                                        <BottomNavigation pageTitle={pageTitle}/>
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
