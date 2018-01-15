import React, { Component } from "react";
import PropTypes from "prop-types";

class SkillsSection extends Component {
  render() {
    return (
      <div>
        <section
          class="resume-section p-3 p-lg-5 d-flex flex-column"
          id="skills"
        >
          <div class="my-auto">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul class="list-inline list-icons">
              <li class="list-inline-item">
                <i class="devicons devicons-html5" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-css3" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-javascript" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-jquery" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-sass" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-less" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-bootstrap" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-wordpress" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-grunt" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-gulp" />
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-npm" />
              </li>
            </ul>

            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-check" />
                Mobile-First, Responsive Design
              </li>
              <li>
                <i class="fa-li fa fa-check" />
                Cross Browser Testing &amp; Debugging
              </li>
              <li>
                <i class="fa-li fa fa-check" />
                Cross Functional Teams
              </li>
              <li>
                <i class="fa-li fa fa-check" />
                Agile Development &amp; Scrum
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

SkillsSection.propTypes = {};

export default SkillsSection;
