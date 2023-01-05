import React, {Component} from "react";

export default class Like extends Component {
    render() {
        return (<i
            className={this.renderHeart()}
            aria-hidden="true"
            style={{cursor: "pointer"}}
            onClick={this.props.onLike}>
        </i>);
    }

    renderHeart() {
        let classes = "fa fa-heart";
        classes += this.props.liked ? "" : "-o";
        return classes;
    }
}
