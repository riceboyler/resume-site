import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EducationItem extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                    <h3 className="mb-0">
                        {item.school} | {item.location}
                    </h3>
                    <div className="subheading mb-3">{item.degree}</div>
                    <div>{item.department}</div>
                    <div>{item.description}</div>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">
                        {item.start} - {item.end}
                    </span>
                </div>
            </div>
        );
    }
}

EducationItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default EducationItem;
