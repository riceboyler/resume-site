import React from 'react';

interface Props {
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
}

const AddressBlock: React.FC<Props> = (props) => {
    const {address, city, state, zip, phone, email} = props;
    return (
        <div className="subheading mb-5">
            {address} · {city}, {state} {zip} · {phone} ·{' '}
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    );
};

export default AddressBlock;
