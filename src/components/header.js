import React from 'react'
import { Link } from 'gatsby'

const Header = ({ breadcrumbs = [] } = {}) => (
  <header id="header" className="header">
    <div className="container">
      <div className="branding">
        <h1 className="logo">
          <a href="index.html">
            <span aria-hidden="true" className="icon_documents_alt icon" />
            <span className="text-highlight">Redux Manager Lib</span>{' '}
            <span className="text-bold">Documentation</span>
          </a>
        </h1>
      </div>
      {/*<ol className="breadcrumb">*/}
        {/*<li className="breadcrumb-item">*/}
          {/*<Link to="index.html">Home</Link>*/}
        {/*</li>*/}
        {/*{breadcrumbs.map(({ to = '', text = '' } = {}) => (*/}
          {/*<li className="breadcrumb-item">*/}
            {/*<Link to={to}>{text}</Link>*/}
          {/*</li>*/}
        {/*))}*/}
      {/*</ol>*/}
    </div>
  </header>
)

export default Header
