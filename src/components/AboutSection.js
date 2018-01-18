import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NameBlock from './About/NameBlock';
import AddressBlock from './About/AddressBlock';
import ObjectiveBlock from './About/ObjectiveBlock';
import LinksBlock from './About/LinksBlock';

class AboutSection extends Component {
    render() {
        const {
            fname,
            lname,
            address,
            city,
            state,
            zip,
            phone,
            email,
            objective,
            facebook,
            twitter,
            linkedin,
            github,
            bitbucket
        } = this.props;
        return (
            <section
                class="resume-section p-3 p-lg-5 d-flex d-column"
                id="about"
            >
                <div class="my-auto">
                    <NameBlock fname={fname} lname={lname} />
                    <AddressBlock
                        address={address}
                        city={city}
                        state={state}
                        zip={zip}
                        phone={phone}
                        email={email}
                    />
                    <ObjectiveBlock objectiveText="With over 20 years working on the web, I bring experience to building complex web software, where I love to work on UI/UX and front-end logic of sites. My objective is to be working with the best front-end frameworks in JavaScript, HTML5 and CSS3 to build killer web applications." />
                    <LinksBlock
                        facebook={facebook}
                        twitter={twitter}
                        linkedin={linkedin}
                        github={github}
                        bitbucket={bitbucket}
                    />
                </div>
            </section>
        );
    }
}

AboutSection.propTypes = {
    fname: PropTypes.string,
    lname: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default AboutSection;
