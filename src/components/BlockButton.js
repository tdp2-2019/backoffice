import {Component} from "react";
import Link from "react-router-dom/es/Link";
import React from "react";

class BlockButton extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {id, blocked} = this.props;
        return (

            <div className="BlockButton">
                <Link to={"/" + id}>
                    <button id="b1" onClick={this.props.handler}>
                        {blocked ? "Desbloquear" : "Bloquear"}
                    </button>
                </Link>
            </div>
        );
    }


    handleBlock =() => {

        console.log(this.props);
        this.props.handler();
    }
}

export default BlockButton;
