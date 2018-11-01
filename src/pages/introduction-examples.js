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
                            <h1 className="doc-title"><i className="icon fa fa-paper-plane" /> Examples</h1>
                            <div className="meta"><i className="far fa-clock" /> Last updated: Oct 30th, 2018</div>
                        </div>{/*//doc-header*/}
                        <div className="doc-body row">
                            <div className="doc-content col-md-9 col-12 order-1">
                                <div className="content-inner">
                                    <section className="doc-section">
                                        <h2 className="section-title">Examples</h2>
                                        <div className="section-block">
                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <p><strong>Configuration</strong> - here is how a simple configuration could look, if we imagine we want to make a Blog Post model:</p>

                                                    <Code code={
                                                        `
import {
  actionTypesFactory,
  actionCreatorsFactory,
  reducerFactory,
  selectorsFactory,
  bindSelectorsToState
} from "redux-manager-lib";
import moduleRestApi from "./blog-post-rest-api";

/*
//////////////
SIMPLE EXAMPLE
//////////////
*/

const MODULE_NAME = "BlogPost";
const actionTypes = actionTypesFactory(MODULE_NAME);
const restApi = moduleRestApi();
const actionCreators = actionCreatorsFactory(actionTypes, restApi);
const reducer = reducerFactory(actionTypes);
const selectors = bindSelectorsToState("blog", selectorsFactory());

const BlogPost = {
  actionTypes,
  restApi,
  actionCreators,
  reducer,
  selectors,
  MODULE_NAME
};

export default BlogPost;
                                                        `
                                                    } />
                                                    <p><strong>We need to connect the reducer and we are ready!</strong></p>
                                                    <p><em>Note that rest api calls are imported from a custom file called "blog-post-rest-api.js". We need to configure this "layer", so that our ReduxManagerLib can do actual communication with the backend.</em></p>
                                                    <p><strong>Rest API communicator</strong> - Here is an example of a  <strong>simple "rest api" communicator</strong> for our BlogPost model:</p>

                                                    <Code code={`
import superagent from "superagent";
import { normalize, schema } from "normalizr";

const ROOT = "http://localhost:4000";

// Define a users schema
const post = new schema.Entity(
  "post",
  {},
  {
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

export default function LoopbackUserRestApi() {
  return {
    read() {
      //Make the async call
      return superagent
        .get(ROOT + "/Posts")
        .then(response => {
          // Transform the response
          return shapeResponse(response);
        })
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
  };
}

                                                    `} />
                                                    <p><em>The only necessary transformation here is the <strong>normalization</strong>. All the rest is there to illustrate where you can do more of it.</em></p>
                                                    <p>In this example <a href="https://github.com/paularmstrong/normalizr">normalizr</a> is the library of choice for normalizing and transforming the data before that. This is the go-to library for this kind of things, when dealing with redux.</p>
                                                    <p>Also, <a href="https://github.com/visionmedia/superagent">superagent</a> is used for AJAX requests.</p>
                                                    <p><strong>Connecting with React</strong> - as usual:</p>
                                                    <Code code={`
import React from "react";
import connect from "react-redux/es/connect/connect";
import BlogPostModel from "./blog-post";

class BlogPostComponent extends React.Component {
  componentWillMount() {
    this.props.readPosts();
  }

  render() {
    return (
      ul
        {(this.props.allPosts || []).map(post => {
          return li{post.title}li;
        })}
      ul
    );
  }
}

function mapStateToProps(state) {
  return {
    allPosts: BlogPostModel.selectors.getAll(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    readPosts: () => dispatch(BlogPostModel.actionCreators.read())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostComponent);
                                                    `} />
                                                    <p>FOR A COMPLETE DEMO CHECKOUT THE DEMOS REPOSITORY: <a href="https://github.com/ivanhristov92/ReduxManagerLibDemos">https://github.com/ivanhristov92/ReduxManagerLibDemos</a></p>
                                                </div>
                                                <div className="col-md-12 col-12">
                                                   <BottomNavigation pageTitle={"Introduction Examples"} />
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
