import React, {Fragment} from 'react'
import * as _ from "ramda";
import {Link} from "gatsby";

const pages = [
    {
      href: "index.html",
        title: "Read Me"
    },

    {
      href: "/introduction.html",
        title: "Introductions",

        pages: [
            {
              href: "introduction-motivation.html",
                title: "Motivation"
            },
            {
                href: "introduction-technical-goals.html",
                title: "Technical Goals"
            },
            {
                href: "introduction-core-concepts.html",
                title: "Core Concepts"
            },
            {
                href: "introduction-examples.html",
                title: "Introduction Examples"
            }
        ]
    },
    {
      href: "basics.html",
        title: "Basics",
        pages: [
            {
              href: "basics-action-types.html",
                title: "Action Types"
            },{
              href: "basics-action-creators.html",
                title: "Action Creators"
            },{
              href: "basics-reducers.html",
                title: "Reducers"
            },{
              href: "basics-selectors.html",
                title: "Selectors"
            },{
              href: "basics-rest-client.html",
                title: "Rest Client"
            },{
              href: "basics-data-flow.html",
                title: "Data Flow"
            },{
              href: "basics-examples.html",
                title: "Basic Examples"
            },
        ]
    },

    {
      href: "intermediate.html",
        title: "Intermediate Concepts",

        pages: [
                {
                  href: "intermediate-overriding-defaults.html",
                  title: "Overriding Defaults"
                },{
                  href: "intermediate-extending-defaults.html",
                  title: "Extending Defaults"
                },{
                  href: "intermediate-replacing-layers.html",
                  title: "Replacing Layers"
                },{
                  href: "intermediate-custom-error-handlers.html",
                  title: "Custom Error Handlers"
                },{
                  href: "intermediate-examples.html",
                  title: "Intermediate Examples"
                },
            ]
    },
    {
        href: "/recipes",
        title: "Recipes",
        pages: [
            {
                href: "recipes-error-handling.html",
                title: "Error Handling Of Custom Code"
            },
        ]
    },{
        href: "/api-reference",
        title: "API Reference",
        pages: [
            {
                href: "api-reference-actionTypesFactory.html",
                title: "actionTypesFactory"
            }, {
                href: "api-reference-actionCreatorsFactory.html",
                title: "actionCreatorsFactory"
            },{
                href: "api-reference-reducerFactory.html",
                title: "reducerFactory"
            },{
                href: "api-reference-selectorsFactory.html",
                title: "selectorsFactory"
            },{
                href: "api-reference-bindSelectorsToState.html",
                title: "bindSelectorsToState"
            },{
                href: "api-reference-attachUnexpectedErrorLogger.html",
                title: "attachUnexpectedErrorLogger"
            },{
                href: "api-reference-dispatchAnUnexpectedErrorEvent.html",
                title: "dispatchAnUnexpectedErrorEvent"
            },{
                href: "api-reference-ModuleInitializationTypeError.html",
                title: "ModuleInitializationTypeError"
            },
        ]
    },

    // {
    //     href: "#",
    //     title: "Change Log"
    // },

];

const findPrevAndNext =  (function(){
    function flattenPages(pages){
        return pages.reduce((acc, page)=>{
            let _page = {title: page.title, href: page.href};

            let flatChildren = flattenPages(page.pages || [])
            return [
                ...acc,
                _page,
                ...flatChildren
            ]
        }, [])
    }
    let flatPages = flattenPages(pages);

    return function findPrevAndNext(title){
        let i = flatPages.findIndex(page=>page.title === title);

        let prev = i === 0 ? null : i - 1;
        let next = i === flatPages.length - 1 ? null : i + 1;
        let result = [];
        if(prev !== null) result[0] = flatPages[prev];
        if(next !== null) result[1] = flatPages[next];
        return result;
    }

}());
export {findPrevAndNext};


export function clearHref(href= ""){
    return href.replace(/\.html/, "/").replace("index", "")
}

function renderPage(page){
    return (
        <>
            <Link to={clearHref(page.href)} className={"nav-link"}>
                {page.title}
            </Link>

                {
                    Array.isArray(page.pages) && (
                        <nav className="doc-sub-menu nav flex-column">
                            {page.pages.map(renderPage)}
                        </nav>
                    )
                }
        </>
    );
}


export default () => (
  <div className="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
    <div id="doc-nav" className="container doc-nav">
      <nav id="doc-menu" className="nav doc-menu flex-column sticky">
          {
            pages.map(renderPage)
          }
      </nav>
      {/*//doc-menu*/}
    </div>
  </div>
)
