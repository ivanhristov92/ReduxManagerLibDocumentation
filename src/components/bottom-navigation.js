import React from "react";
import {Link} from "gatsby"

import {findPrevAndNext, clearHref} from "./sidenav"


export default class BottomNavigation extends React.Component {
    render (){

        let pageTitle = this.props.pageTitle;
        let [prev, next] = findPrevAndNext(pageTitle);

        return (
            <div className="custom-nav-wrapper">
                {
                    prev && (
                        <Link className="link custom-nav" to={clearHref(prev.href)}>
                            <i className="icon fa fa-arrow-left" />
                            <div className="left-nav">
                                <div className="nav-title">Previous</div>
                                <div className="nav-content">{clearHref(prev.title)}</div>
                            </div>
                        </Link>
                    )
                }
                {
                    next && (
                        <Link className="link custom-nav" to={clearHref(next.href)}>
                            <div>
                                <div className="nav-title">Next</div>
                                <div className="nav-content">{clearHref(next.title)}</div>
                            </div>
                            <i className="icon fa fa-arrow-right" />
                        </Link>
                    )
                }


            </div>

        );
    }
}