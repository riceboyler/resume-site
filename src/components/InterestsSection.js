import React, {Component} from 'react';
import {interestText} from '../personalData';

class InterestsSection extends Component {
    render() {
        return (
            <div>
                <section
                    className="resume-section p-3 p-lg-5 d-flex flex-column"
                    id="interests"
                >
                    <div className="my-auto">
                        <h2 className="mb-5">Interests</h2>
                        <p>{interestText}</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default InterestsSection;
