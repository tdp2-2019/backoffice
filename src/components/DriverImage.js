import React, {Component} from "react";

const favImageUrl =
    "https://cdn2.iconfinder.com/data/icons/basic-ui-flat/605/145_-_Valid-512.png";
const blockedImgUrl =
    "http://icons.iconarchive.com/icons/google/noto-emoji-symbols/256/73030-no-entry-icon.png"
class DriverImage extends Component {


    render() {

        const {source, name, favorited, blocked} = this.props;
        return (
            <div className="DriverImage">
                <img src={source} alt={name} className="DriverImage-image"/>
                {favorited && (
                    <img
                        src={favImageUrl}
                        className="DriverImage-fav"
                    />
                )}
                {blocked && (
                    <img
                        src={blockedImgUrl}
                        className="DriverImage-fav"
                    />
                )}
            </div>
        );
    }
}

export default DriverImage;
