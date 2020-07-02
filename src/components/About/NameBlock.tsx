import React from 'react';

interface Props {
    fname: string;
    lname: string;
}

const NameBlock: React.FC<Props> = ({fname, lname}) => (
    <h1 className="mb-0">
        {fname}
        <span className="text-primary">{lname}</span>
    </h1>
);

export default NameBlock;
