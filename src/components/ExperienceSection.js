import React, { Component } from "react";
import PropTypes from "prop-types";
import ExperienceItem from "./Experience/ExperienceItem";

class ExperienceSection extends Component {
  render() {
    return (
      <section
        class="resume-section p-3 p-lg-5 d-flex flex-column"
        id="experience"
      >
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>
          <ExperienceItem title="Engineering Manager" company="Cengage" location="Boston, MA" description="Responsible for growing Nucleus/World Languages Team from four software engineers to 3 agile teams totalling 16 engineers. Challenges faced and solved: backfilling our tech lead, lost due to attrition; interviewing and hiring new engineers of various levels; management of three separate workstreams (Reader, WebRTC-based AV Board and Discourse based Discussion Forum activities) with associated backlog management, estimations and projections. Assisted with architectural design and code reviews of React components and applications. Built proofs of concept for my team to take and enhance to full production." start="August 2016" end="Current" />
          <ExperienceItem title="Tech Lead" company="Cengage" location="Boston, MA" description="Responsible for contributions to existing backlog, developing React/Redux based components to revolutionize the user experience of the student learning path. Responsible for all code reviews, deployment planning, release management, continuous integration (via Jenkins) and delivery models and improved automation of these tasks." start="May 2016" end="August 2016" />
        </div>
      </section>
    );
  }
}

ExperienceSection.propTypes = {};

export default ExperienceSection;
