import React from 'react';
import Gravatar from 'react-gravatar';

interface Props {
    email: string;
}

const ProfilePic: React.FC<Props> = ({email}) => (
    <span className="d-none d-lg-block">
        <Gravatar
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            email={email}
            size={150}
        />
    </span>
);

export default ProfilePic;
