import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ObjectiveBlock extends Component {
    render() {
        const {objectiveText} = this.props;
        return <p className="mb-5">{objectiveText}</p>;
    }
}

ObjectiveBlock.propTypes = {
    objectiveText: PropTypes.string.isRequired
};

export default ObjectiveBlock;
