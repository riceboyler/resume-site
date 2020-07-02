import React from 'react';
import IconLink from './IconLink';

interface Props {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    bitbucket?: string;
}

const LinksBlock: React.FC<Props> = ({
    facebook,
    twitter,
    linkedin,
    github,
    bitbucket
}) => (
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

export default LinksBlock;
