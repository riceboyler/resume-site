import React from 'react';

interface ExItem {
    company: string;
    title: string;
    location: string;
    description: string;
    start: string;
    end: string;
    reasonForLeaving?: string;
    technologiesUsed?: string[];
}

interface Props {
    item: ExItem;
}

const ExperienceItem: React.FC<Props> = ({item}) => (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
            <h3 className="mb-0">{item.title}</h3>
            <div className="subheading mb-3">
                {item.company} | {item.location}
            </div>
            <p>{item.description}</p>
            {item.reasonForLeaving && (
                <p>
                    <strong>Reason For Leaving:</strong> {item.reasonForLeaving}
                </p>
            )}
        </div>
        <div className="resume-date text-md-right">
            <span className="text-primary">
                {item.start} - {item.end}
            </span>
            {item.technologiesUsed && item.technologiesUsed.length > 0 && (
                <React.Fragment>
                    <hr />
                    <h6>Technologies Used</h6>
                    <ul className="list-unstyled">
                        {item.technologiesUsed.map((tech) => (
                            <li>{tech}</li>
                        ))}
                    </ul>
                </React.Fragment>
            )}
        </div>
    </div>
);

export default ExperienceItem;
