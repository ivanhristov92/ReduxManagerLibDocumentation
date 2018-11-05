import React from "react";

export default class Code extends React.Component {

    componentDidMount(){
        try {
            window.Prism.highlightElement(this.code);
        } catch (e){
        }
    }

    render (){
        return <pre><code ref={el=>{this.code=el;}} className={this.props.className || "language-js"} dangerouslySetInnerHTML={{__html: this.props.code}}></code></pre>
    }
}