import React, {Component} from "react";

const favImageUrl =
    "https://cdn2.iconfinder.com/data/icons/basic-ui-flat/605/145_-_Valid-512.png";

class ArtistImage extends Component {


    render() {

        const {source, name, favorited} = this.props;
        return (
            <div className="ArtistImage">
                <img src={source} alt={name} className="ArtistImage-image"/>
                {favorited && (
                    <img
                        src={favImageUrl}
                        className="ArtistImage-fav"
                    />
                )}
            </div>
        );
    }
}

export default ArtistImage;
