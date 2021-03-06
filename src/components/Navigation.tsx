import React from 'react';
import ProfilePic from './Navigation/ProfilePic';

const Navigation: React.FC = () => (
    <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
    >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <ProfilePic email="riceboyler@gmail.com" />
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link js-scroll-trigger"
                        href="#experience"
                    >
                        Experience
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#education">
                        Education
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#skills">
                        Skills
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#interests">
                        Interests
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigation;
