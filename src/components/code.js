import React from "react";

export default class Code extends React.Component {

    componentDidMount(){
        console.log("ee");
        window.Prism.highlightElement(this.code);
    }

    render (){
        return <pre><code ref={el=>{this.code=el;}} className={"language-js"} dangerouslySetInnerHTML={{__html: this.props.code}}></code></pre>
    }
}