import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ExperienceItem extends Component {
    render() {
        const {title, company, location, description, start, end} = this.props;
        return (
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                    <h3 className="mb-0">{title}</h3>
                    <div className="subheading mb-3">
                        {company} | {location}
                    </div>
                    <p>{description}</p>
                </div>
                <div className="resume-date text-md-right">
                    <span class="text-primary">
                        {start} - {end}
                    </span>
                </div>
            </div>
        );
    }
}

ExperienceItem.propTypes = {
    title: PropTypes.string,
    company: PropTypes.string
};

export default ExperienceItem;
