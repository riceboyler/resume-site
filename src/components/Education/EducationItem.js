import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EducationItem extends Component {
    render() {
        const {school, degree, department, start, end} = this.props;
        return (
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                    <h3 className="mb-0">{school}</h3>
                    <div className="subheading mb-3">{degree}</div>
                    <div>{department}</div>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">
                        {start} - {end}
                    </span>
                </div>
            </div>
        );
    }
}

EducationItem.propTypes = {};

export default EducationItem;
