import React from 'react';

interface Props {
    type: string;
}

const DevIcon: React.FC<Props> = ({type}) => (
    <li className="list-inline-item">
        <i className={`devicons devicons-${type}`} />
    </li>
);

export default DevIcon;
