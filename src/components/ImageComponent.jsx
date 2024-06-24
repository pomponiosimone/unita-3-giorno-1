import React from "react";
class ImageComponent extends React.Component {
    render()
    { return (
        <img src={this.props.image} id={this.props.id} alt={this.props.desc}></img> )
    }
}
export default ImageComponent