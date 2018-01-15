import React, {Component} from 'react';
import PropTypes from 'prop-types';

class IconLink extends Component {
    render() {
        const {linkType, url} = this.props;
        return (
            <li className="list-inline-item">
                <a href={url} target="_blank">
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i
                            className={`fa fa-${linkType} fa-stack-1x fa-inverse`}
                        />
                    </span>
                </a>
            </li>
        );
    }
}

IconLink.propTypes = {
    linkType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default IconLink;
