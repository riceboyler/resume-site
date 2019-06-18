import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ExperienceItem extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                    <h3 className="mb-0">{item.title}</h3>
                    <div className="subheading mb-3">
                        {item.company} | {item.location}
                    </div>
                    <p>{item.description}</p>
                    {item.reasonForLeaving && (
                        <p>
                            <strong>Reason For Leaving:</strong>{' '}
                            {item.reasonForLeaving}
                        </p>
                    )}
                </div>
                <div className="resume-date text-md-right">
                    <span class="text-primary">
                        {item.start} - {item.end}
                    </span>
                </div>
            </div>
        );
    }
}

ExperienceItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default ExperienceItem;
