import React, {Component} from 'react';
import PropTypes from 'prop-types';
import IconLink from './IconLink';

class LinksBlock extends Component {
    render() {
        const {facebook, twitter, linkedin, github, bitbucket} = this.props;

        return (
            <div>
                <ul className="list-inline list-social-icons mb-0">
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
                    {bitbucket && (
                        <IconLink
                            linkType="bitbucket"
                            url={`https://bitbucket.com/${bitbucket}`}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

LinksBlock.propTypes = {};

export default LinksBlock;
