import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NameBlock extends Component {
    render() {
        const {fname, lname} = this.props;
        return (
            <h1 className="mb-0">
                {fname}
                <span className="text-primary">{lname}</span>
            </h1>
        );
    }
}

NameBlock.propTypes = {
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired
};

export default NameBlock;
