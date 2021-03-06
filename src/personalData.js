const userDetails = {
    fname: 'Jason',
    lname: 'Clark',
    address: '355 W 200 S Unit 118',
    city: 'Washington',
    state: 'UT',
    zip: '84780',
    phone: '435.383.2773',
    email: 'riceboyler@gmail.com',
    facebook: 'riceboyler',
    twitter: 'riceboyler',
    github: 'riceboyler',
    linkedin: 'riceboyler',
    bitbucket: 'riceboyler'
};

const experience = [
    {
        title: 'Senior Software Engineer',
        company: 'TCN',
        location: 'St. George, UT',
        description:
            'Created coherent Design System utilizing Figma for design mockups and demonstration of color schemes/typography. Implemented Design System via Material-UI theme which constrains available palette and typographical schemes. Mentored multiple junior engineers from the basics of JavaScript to assisting with complex React components. Started a series of workshops for sharing knowledge during Covid-19 restrictions. Implemented Cypress testing suite for E2E testing as we have no dedicated QA resources.',
        start: 'July 2019',
        end: 'Current',
        reasonForLeaving: '',
        technologiesUsed: [
            'React',
            'TypeScript',
            'Webpack',
            'Figma',
            'Cypress',
            'MDX'
        ]
    },
    {
        title: 'Director of Web Services (Freelance)',
        company: 'Mobile Electronics Competition Association (MECA)',
        location: 'Goodlettsville, TN',
        description:
            'Responsible for all web properties for MECA, including crankitup.net (previously), mecacaraudio.com and mecaevents.com. Migrated mecacaraudio.com through various iterations, now running on WordPress CMS with a custom theme. Built mecaevents.com initially in PHP, migrated through ASP.NET/C# WebAPI, Node/Express 4 against a MSSQL database (on AWS) with a React 16 web application. Migrated all properties from standard VPS based hosting to Azure and AWS for scalability. As of 6/2020, migrated from Express API with a MSSQL backend to GraphQL using Hasura and PostgreSQL to allow the site to be serverless. Currently migrating WordPress based main site to GatsbyJS due to security issues with WordPress.',
        start: 'January 2000',
        end: 'Current',
        reasonForLeaving: '',
        technologiesUsed: [
            'ASP.NET',
            'C#',
            'MSSQL',
            'DotNetNuke',
            'DurandalJS',
            'NodeJS',
            'Express',
            'Hasura',
            'PostgreSQL',
            'React',
            'WordPress',
            'GatsbyJS',
            'NetlifyCMS'
        ]
    },
    {
        title: 'Lead Front-End Engineer',
        company: 'CollegeVine',
        location: 'Cambridge, MA (100% remote capable)',
        description:
            'Assumed responsibility for all front-end code for Education Finance/Guidance Startup. Stack included React, PureScript, Haskell and Python. Migrated shared component library from JavaScript to TypeScript to enforce consistent API. Created shared compnents to be be used in A/B tests for Catalyst Direct team, then moved to owning Marketing site and assets, preparing to move to a mobile-first architecture powered by Gatsby and NetlifyCMS',
        start: 'April 2019',
        end: 'June 2019',
        reasonForLeaving: 'Massive company reorganization resulted in layoff',
        technologiesUsed: [
            'React',
            'TypeScript',
            'PureScript',
            'GatsbyJS',
            'NetlifyCMS'
        ]
    },
    {
        title: 'Lead Front-End Engineer',
        company: 'PatientPing',
        location: 'Boston, MA',
        description:
            'Responsible for all front-end code for Medical Technology Startup. Upgraded React, Redux, Webpack and other libraries to be up to date; created shared component library and component generator based on Neutrino. Functioned as team lead for front-end engineers, responsible for establishing best practices, design documents for larger features and mentoring other engineers. Added front-end unit testing using Jest and React Testing Library.',
        start: 'February 2018',
        end: 'April 2019',
        reasonForLeaving: 'Moved to CollegeVine to allow for 100% remote work',
        technologiesUsed: [
            'React',
            'Redux',
            'Webpack',
            'NodeJS',
            'Bit',
            'Styled Components/Emotion'
        ]
    },
    {
        title: 'Engineering Manager',
        company: 'Cengage',
        location: 'Boston, MA',
        description:
            'Responsible for growing Nucleus/World Languages Team from four software engineers to 3 agile teams totalling 16 engineers. Challenges faced and solved: backfilling our tech lead, lost due to attrition; interviewing and hiring new engineers of various levels; management of three separate workstreams (Reader, WebRTC-based AV Board and Discourse based Discussion Forum activities) with associated backlog management, estimations and projections. Assisted with architectural design and code reviews of React components and applications. Built proofs of concept for my team to take and enhance to full production.',
        start: 'August 2016',
        end: 'January 2018',
        reasonForLeaving:
            'Change in leadership led to my career path going in a different direction',
        technologiesUsed: []
    },
    {
        title: 'Tech Lead',
        company: 'Cengage',
        location: 'Boston, MA',
        description:
            'Responsible for contributions to existing backlog, developing React/Redux based components to revolutionize the user experience of the student learning path. Responsible for all code reviews, deployment planning, release management, continuous integration (via Jenkins) and delivery models and improved automation of these tasks.',
        start: 'May 2016',
        end: 'August 2016',
        reasonForLeaving: 'Promoted to Engineering Manager',
        technologiesUsed: []
    },
    {
        title: 'Software Engineer IV',
        company: 'Cengage',
        location: 'Boston, MA',
        description:
            'Responsible for assisting with migration of item/activity builder components to React/Redux; developed Audio/Video Activity Board Proof of Concept utilizing TokBox with React, which is now being implemented by my current team; assisted Tech Lead with code reviews of offshore engineering assets and established coding standards and best practices documentation for team.',
        start: 'October 2015',
        end: 'May 2016',
        reasonForLeaving: 'Promoted to Tech Lead',
        technologiesUsed: []
    },
    {
        title: 'Sr. Software Engineer',
        company: 'Tresta',
        location: 'Tallahassee, FL',
        description:
            'Full Stack Developer on a team developing a new Cloud Communications Platform (tresta.com). Responsible for everything from configuring NGINX to building Erlang applications for the RESTful API, Node.js middleware, a DurandalJS based front-end utilizing HTML5 and CSS3 generated by SASS. Responsible for migrating marketing site built in Jade templating engine into common codebase.',
        start: 'July 2014',
        end: 'October 2015',
        reasonForLeaving:
            'Needed advancement opportunities, wanted to leave Florida',
        technologiesUsed: []
    },
    {
        title: 'Sr. Software Consultant',
        company: 'Avatar Software',
        location: 'Brentwood, TN',
        description:
            'Built software on several different projects, focusing on UI/UX by implementing JavaScript Frameworks (jQuery, Knockout, Durandal, Angular). Projects included a Healthcare Scheduling application, a DSM-V Psychological Evaluation application and an Administrative back-end for a local Colocation Center',
        start: 'October 2012',
        end: 'July 2014',
        reasonForLeaving:
            'Needed to leave Tennessee due to family issues (I continued as a remote consultant for Avatar for 16 months doing work after hours and on weekends)'
    }
];

const education = [
    {
        school: 'Middle Tennessee State University',
        location: 'Murfreesboro, TN',
        degree: 'Seeking Bachelor of Science',
        department: 'Recording Industry Management (Engineering Track)',
        description:
            'Did not complete degree as I had to work full-time to support my new family',
        start: 'January 1998',
        end: 'December 1999'
    },
    {
        school: 'Brigham Young University',
        location: 'Provo, UT',
        degree: 'Seeking Bachelor of Science',
        department: 'Computer Science, then Mass Communication',
        description:
            'Spent more time figuring out who I was than actually going to classes. That education has been far more valuable to me than what I would have gained in General Education requirements.',
        start: 'January 1993',
        end: 'May 1994'
    },
    {
        school: 'Waynesboro High School',
        location: 'Waynesboro, VA',
        degree: "Governor's Seal Diploma",
        department: '',
        description: 'Completed enough credits to graduate by Junior Year',
        start: '1988',
        end: '1992'
    }
];
const interestText =
    "I'm a gearhead through and through. I love cars, boost, turbos, racing, the whole shebang. I'm a father of 3 kids and the husband of a wife who deserves way better. I'm a member of The Church of Jesus Christ of Latter-Day Saints and currently serve as an Executive Secretary. I'm a huge fan of the Boston Red Sox, the Nashville Predators and the New England Patriots. As a former club dj, I still enjoy Electronic Dance Music, but also love the Blues, Zac Brown Band and nearly everything in between.";

export {userDetails, experience, education, interestText};
