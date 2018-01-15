import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProfilePic from './Navigation/ProfilePic';

class Navigation extends Component {
    render() {
        return (
            <nav
                class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
                id="sideNav"
            >
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <ProfilePic email="riceboyler@gmail.com" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon" />
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#about">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link js-scroll-trigger"
                                href="#experience"
                            >
                                Experience
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link js-scroll-trigger"
                                href="#education"
                            >
                                Education
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link js-scroll-trigger"
                                href="#skills"
                            >
                                Skills
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link js-scroll-trigger"
                                href="#interests"
                            >
                                Interests
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link js-scroll-trigger"
                                href="#awards"
                            >
                                Awards
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

Navigation.propTypes = {};

export default Navigation;
