import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <title>ReduxManagerLib Documentation</title>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
            rel="stylesheet"
            type="text/css"
          />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.1.1/js/all.js"
            integrity="sha384-BtvRZcyfv4r0x/phJt9Y9HhnN5ur1Z+kZbKVgzVBAlQZX4jvAuImlIz+bG7TS00a"
            crossOrigin="anonymous"
          />
          {/*<link rel="stylesheet" href="assets/plugins/prism/prism.css" />*/}
          {/*<link rel="stylesheet" href="assets/plugins/elegant_font/css/style.css" />*/}
          {/*<link id="theme-style" rel="stylesheet" href="/public/static/css/styles.css" />*/}
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className={'body-green'}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            type="text/javascript"
            src="assets/plugins/jquery-3.3.1.min.js"
          />
          <script
            type="text/javascript"
            src="assets/plugins/bootstrap/js/bootstrap.min.js"
          />

          <script src={'assets/plugins/prism/prism.js'} id={"prism"}/>
          <script
            type="text/javascript"
            src="assets/plugins/jquery-scrollTo/jquery.scrollTo.min.js"
          />
          <script
            type="text/javascript"
            src="assets/plugins/stickyfill/dist/stickyfill.min.js"
          />
          <script type="text/javascript" src="assets/js/main.js" />

        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
