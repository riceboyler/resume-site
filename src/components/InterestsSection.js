import React, {Component} from 'react';
import PropTypes from 'prop-types';
import registerServiceWorker from '../registerServiceWorker';

class InterestsSection extends Component {
    render() {
        return (
            <div>
                <section
                    class="resume-section p-3 p-lg-5 d-flex flex-column"
                    id="interests"
                >
                    <div class="my-auto">
                        <h2 class="mb-5">Interests</h2>
                        <p>
                            I'm a gearhead through and through. I love cars,
                            boost, turbos, racing, the whole shebang. I'm a
                            father of 3 kids and the husband of a wife who
                            deserves way better. I'm a member of The Church of
                            Jesus Christ of Latter-Day Saints and currently
                            serve in the Young Men's Presidency. I'm a huge fan
                            of the Boston Red Sox, the Nashville Predators and
                            the New England Patriots. As a former club dj, I
                            still enjoy Electronic Dance Music, but also love
                            the Blues, Zac Brown Band and nearly everything in
                            between.
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

InterestsSection.propTypes = {};

export default InterestsSection;
