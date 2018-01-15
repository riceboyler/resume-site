import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';

class ProfilePic extends Component {
    render() {
        const {email} = this.props;
        return (
            <span class="d-none d-lg-block">
                <Gravatar
                    className="img-fluid img-profile rounded-circle mx-auto mb-2"
                    email={email}
                    size={150}
                />
            </span>
        );
    }
}

ProfilePic.propTypes = {};

export default ProfilePic;
