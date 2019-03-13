import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ObjectiveBlock extends Component {
    render() {
        return <p className="mb-5">{this.props.children}</p>;
    }
}

ObjectiveBlock.propTypes = {
    children: PropTypes.node.isRequired
};

export default ObjectiveBlock;
