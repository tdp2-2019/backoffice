import React, {Component} from "react";


class GoogleMarkerImage extends Component {


    render() {

        const {source} = this.props;
        return (
            <div className="GoogleMarkerImage">
                <img src={source} className="GoogleMarkerImage-image"/>
            </div>
        );
    }
}

export default GoogleMarkerImage;
