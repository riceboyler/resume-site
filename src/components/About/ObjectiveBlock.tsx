import React from 'react';

interface Props {
    children: React.ReactNode;
}

const ObjectiveBlock: React.FC<Props> = ({children}) => (
    <p className="mb-5">{children}</p>
);

export default ObjectiveBlock;
