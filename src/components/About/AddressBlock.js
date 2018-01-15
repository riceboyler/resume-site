import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddressBlock extends Component {
    render() {
        const {address, city, state, zip, phone, email} = this.props;
        return (
            <div className="subheading mb-5">
                {address} · {city}, {state} {zip} · {phone} ·{' '}
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        );
    }
}

AddressBlock.propTypes = {
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    phone: PropTypes.string,
    email: PropTypes.string
};

export default AddressBlock;
