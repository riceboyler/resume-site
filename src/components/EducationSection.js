import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EducationItem from './Education/EducationItem';

class EducationSection extends Component {
    render() {
        return (
            <div>
                <section
                    class="resume-section p-3 p-lg-5 d-flex flex-column"
                    id="education"
                >
                    <div class="my-auto">
                        <h2 class="mb-5">Education</h2>
                        <EducationItem
                            school="Middle Tennessee State University"
                            location="Murfreesboro, TN"
                            degree="Seeking Bachelor of Science"
                            department="Recording Industry Management (Engineering Track)"
                            description="Did not complete degree as I had to work full-time to support my new family"
                            start="January 1998"
                            end="December 1999"
                        />
                        <EducationItem
                            school="Brigham Young University"
                            location="Provo, UT"
                            degree="Seeking Bachelor of Science"
                            department="Computer Science, then Mass Communication"
                            description="Spent more time figuring out who I was than actually going to classes. That education has been far more valuable to me than what I would have gained in General Education requirements."
                            start="January 1993"
                            end="May 1994"
                        />
                        <EducationItem
                            school="Waynesboro High School"
                            location="Waynesboro, VA"
                            degree="Governor's Seal Diploma"
                            department=""
                            description="Completed enough credits to graduate by Junior Year"
                            start="1988"
                            end="1992"
                        />
                    </div>
                </section>
            </div>
        );
    }
}

EducationSection.propTypes = {};

export default EducationSection;
