import React from "react";


require("./public/static/assets/plugins/jquery-3.3.1.min.js");
require("./public/static/assets/plugins/bootstrap/js/bootstrap.min.js");
require("./public/static/assets/plugins/prism/prism.js");
require("./public/static/assets/plugins/jquery-scrollTo/jquery.scrollTo.min.js");
require("./public/static/assets/plugins/stickyfill/dist/stickyfill.min.js");
require("./public/static/assets/js/main.js");

export default class IndexJS extends React.Component {
    render(){

        return <div dangerouslySetInnerHTML={{__html: scripts}}>

        </div>
    }
}