import React, {Component} from 'react';
import PropTypes from 'prop-types';
import IconLink from './IconLink';

class LinksBlock extends Component {
    render() {
        const {facebook, twitter, linkedin, github} = this.props;

        return (
            <div>
                <ul class="list-inline list-social-icons mb-0">
                    {facebook && (
                        <IconLink
                            linkType="facebook"
                            url={`https://www.facebook.com/${facebook}`}
                        />
                    )}
                    {twitter && (
                        <IconLink
                            linkType="twitter"
                            url={`https://twitter.com/${twitter}`}
                        />
                    )}
                    {linkedin && (
                        <IconLink
                            linkType="linkedin"
                            url={`https://linkedin.com/in/${linkedin}`}
                        />
                    )}
                    {github && (
                        <IconLink
                            linkType="github"
                            url={`https://github.com/${github}`}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

LinksBlock.propTypes = {};

export default LinksBlock;
