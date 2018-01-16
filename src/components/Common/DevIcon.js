import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DevIcon extends Component {
    render() {
        const {type} = this.props;
        return (
            <li className="list-inline-item">
                <i className={`devicons devicons-${type}`} />
            </li>
        );
    }
}

DevIcon.propTypes = {
    type: PropTypes.string.isRequired
};

export default DevIcon;
