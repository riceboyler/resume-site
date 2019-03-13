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
                    <ObjectiveBlock>

                    With over 20 years working on the web, I bring experience to building complex web software, where I love to work on UI/UX and front-end logic of sites. My objective is to be working with the best front-end frameworks in JavaScript, HTML5 and CSS3 to build killer web applications. Right now, I love React, Node and Emotion (for Styled Components).
                    <br />
                    <br />
                    So, why am I actively looking for a new position in 2019? In 2018, I was blessed to find my biological family of 9 <b>FULL</b> siblings, both parents and one set of grandparents via AncestryDNA. In order to get to know all of them better, our family will be moving to Utah to be closer to them. So, I'm looking for either a remote management or lead/principal developer role, or something in Southern Utah (i.e. Cedar City, St. George, etc.)
                    </ObjectiveBlock>
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
