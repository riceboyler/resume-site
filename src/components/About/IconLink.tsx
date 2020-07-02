import React from 'react';

interface Props {
    linkType: string;
    url: string;
}

const IconLink: React.FC<Props> = (props) => {
    const {linkType, url} = props;
    return (
        <li className="list-inline-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className={`fa fa-${linkType} fa-stack-1x fa-inverse`} />
                </span>
            </a>
        </li>
    );
};

export default IconLink;
