import React from 'react';
import DevIcon from './Common/DevIcon';

const SkillsSection: React.FC = () => (
    <div>
        <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="skills"
        >
            <div className="my-auto">
                <h2 className="mb-5">Skills</h2>

                <div className="subheading mb-3">
                    Programming Languages &amp; Tools
                </div>
                <ul className="list-inline list-icons">
                    <DevIcon type="react" />
                    <DevIcon type="html5" />
                    <DevIcon type="css3" />
                    <DevIcon type="javascript" />
                    <DevIcon type="sass" />
                    <DevIcon type="node" />
                    <DevIcon type="bootstrap" />
                    <DevIcon type="wordpress" />
                    <DevIcon type="gulp" />
                    <DevIcon type="npm" />
                    <DevIcon type="scrum" />
                    <DevIcon type="msql-server" />
                    <DevIcon type="mysql" />
                    <DevIcon type="aws" />
                    <DevIcon type="azure" />
                </ul>

                <div className="subheading mb-3">Development Tools</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <i className="fa-li fa fa-code" />
                        IDEs: Visual Studio Code, WebStorm, Visual Studio, Atom
                    </li>
                    <li>
                        <i className="fa-li fa fa-code" />
                        Cloud: Microsoft Azure, Amazon Web Services
                    </li>
                    <li>
                        <i className="fa-li fa fa-code" />
                        Databases: Microsoft SQL, MySQL/MariaDB, MongoDB,
                        limited Cassandra
                    </li>
                    <li>
                        <i className="fa-li fa fa-code" />
                        Miscellaneous: Webpack, Jenkins, Bitbucket, Github
                    </li>
                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <i className="fa-li fa fa-check" />
                        Mobile-First, Responsive Design
                    </li>
                    <li>
                        <i className="fa-li fa fa-check" />
                        Cross Browser Testing &amp; Debugging
                    </li>
                    <li>
                        <i className="fa-li fa fa-check" />
                        Cross Functional Teams
                    </li>
                    <li>
                        <i className="fa-li fa fa-check" />
                        Agile Development &amp; Scrum
                    </li>
                </ul>
            </div>
        </section>
    </div>
);

export default SkillsSection;
