import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    carrentt,
    jobit,
    tripguide,
    tripguidee,
    tripguideee,
    tripguid,
    threejs,
    ps,
    ps2,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Graphics Designer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UI/UX Designer",
        icon: creator,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [{
        title: "Freelancer",
        company_name: "Upwork, fiver",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "2017 - Present",
        points: [
            "Designed a UI/UX for a web application, mobile application, and desktop application",
            "Created broad range of work using various design techniques.",
            "Designed website layouts, templates and unique branded looks.",
            "Design simple and clean Logos.",
            "Design amazing and unique flyers, brochures, and posters.",
            "Design amazing and unique business cards social media posts.",
            "Create awesome illustrations.",
            "Design T-shirts and other clothing items.",
            "Completed final touches for projects before rollout.",

        ],
    },
    {
        title: "Head of Graphics Design Team",
        company_name: "Backos Technologies",
        icon: starbucks,
        iconBg: "#383E56",
        date: "2019 - Present",
        points: [
            "Created digital image files for use in digital and traditional printing methods ",
            "Applied knowledge of production to create high-quality images for print and web ",
            "Created broad range of work using various design techniques.",
            "Designed website layouts, templates and unique branded looks",
            "Completed final touches for projects before rollout",
        ],
    },
    {
        title: "UI/UX Designer, Back-end Developer, Teacher",
        company_name: "ASTU STEM center ",
        icon: meta,
        iconBg: "#ffffff",
        date: "2022 - 2023",
        points: [
            "Developed server-side logic in Python",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Built APIs and data clients to consume APIs",
            "Wrote unit tests to evaluate high code coverage",
            "Built flexible, reusable code and libraries for future use",
            "Implemented creative ways to foster curiosity for complex principles through hands - on learning and planned activities.",
            "Designed and implemented a curriculum that was both engaging and challenging for students.",
            "Design a UI/UX for a web application",

        ],
    },
    {
        title: "Graphics Designer / UI/UX Designer",
        company_name: "Milto Tech",
        icon: shopify,
        iconBg: "#f2f2f2",
        date: "2022 - Present",
        points: [
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Designed a UI/UX for a web application, mobile application, and desktop application",
            "Created broad range of work using various design techniques.",
            "Designed website layouts, templates and unique branded looks",
            "Completed final touches for projects before rollout",

        ],
    },

];

const testimonials = [{
        testimonial: "Working with Jo has been great! He is very talented in graphic design. He's come through on every project I've given him quickly.",
        name: "James Oliver",
        designation: "",
        company: "Corner Stone church",
        image: "https://cdn.sanity.io/images/c2oh7vrg/production/40eac45bc5dc4d3d98b90899f13c414646141bd7-640x640.jpg",
    },
    {
        testimonial: " He was great to work with – he was professional, knowledgeable and helped bring my vision for the design I wanted for our company logo to life",
        name: "Micheal Kumsa",
        designation: "CEO",
        company: "Backos Tech ",
        image: "https://cdn.sanity.io/images/c2oh7vrg/production/03591cc5d38df533c6e1af93fcf741b03c25c950-640x640.jpg",
    },
    {
        testimonial: "I'm really happy with his work quality and the aesthetic he brought to our site. He was able to quickly nail down the look I wanted and understood my vision without much back and forth",
        name: "Abdisa Tsegaye",
        designation: "CEO",
        company: "Milto Tech",
        image: "https://avatars.githubusercontent.com/u/48585612?v=4",
    },
];

const projects = [{
        name: "Ozone Cement and Paints",
        description: "This is a Logo for Ozone Cement and Paint",
        tags: [{
                name: "Logo",
                color: "blue-text-gradient",
            },
            {
                name: "Brand",
                color: "green-text-gradient",
            },
            {
                name: "Illustrator",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://www.behance.net/gallery/149302291/OZONE-Logo",
    },
    {
        name: "T-shirt for Charity",
        description: "T-shirt made for Charity for Cornerstone Church",
        tags: [{
                name: "T-shirt",
                color: "blue-text-gradient",
            },
            {
                name: "Art",
                color: "green-text-gradient",
            },
            {
                name: "Photoshop",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://www.behance.net/gallery/156016083/T-shirt-for-Charity",
    },
    {
        name: "Concierge-Verification-Logo",
        description: "Logo for Concierge Verification",
        tags: [{
                name: "Logo",
                color: "blue-text-gradient",
            },
            {
                name: "Brand",
                color: "green-text-gradient",
            },
            {
                name: "Illustrator",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://www.behance.net/gallery/156016363/Concierge-Verification-Logo",
    },
    {
        name: "B Tech Logo",
        description: "Logo for Letter B",
        tags: [{
                name: "Logo",
                color: "blue-text-gradient",
            },
            {
                name: "Icon",
                color: "green-text-gradient",
            },
            {
                name: "Illustrator",
                color: "pink-text-gradient",
            },
        ],
        image: tripguidee,
        source_code_link: "",
    },
    {
        name: "2D Art",
        description: "Logo for Concierge Verification",
        tags: [{
                name: "Art",
                color: "blue-text-gradient",
            },
            {
                name: "Graphics",
                color: "green-text-gradient",
            },
            {
                name: "Illustrator",
                color: "pink-text-gradient",
            },
        ],
        image: carrentt,
        source_code_link: "https://www.behance.net/gallery/149301813/2D-art",
    },
    {
        name: "Cornerstone Church Poster",
        description: "This is a Poster made for Cornerstone Church",
        tags: [{
                name: "Poster",
                color: "blue-text-gradient",
            },
            {
                name: "Graphics",
                color: "green-text-gradient",
            },
            {
                name: "Photoshop",
                color: "pink-text-gradient",
            },
        ],
        image: tripguideee,
        source_code_link: "https://www.behance.net/gallery/156015837/Welcome-Banner",
    },
    {
        name: "Package Design",
        description: "Package Design",
        tags: [{
                name: "Package",
                color: "blue-text-gradient",
            },
            {
                name: "Brand",
                color: "green-text-gradient",
            },
            {
                name: "Photoshop",
                color: "pink-text-gradient",
            },
        ],
        image: tripguid,
        source_code_link: "",
    },
    {
        name: "New Year Poster",
        description: "New Year Poster",
        tags: [{
                name: "Poster",
                color: "blue-text-gradient",
            },
            {
                name: "Graphics",
                color: "green-text-gradient",
            },
            {
                name: "Photoshop",
                color: "pink-text-gradient",
            },
        ],
        image: ps,
        source_code_link: "https://www.behance.net/gallery/156015041/Ethiopian-New-Year-Poster",
    },
    {
        name: " Dream Tech Logo",
        description: "Logo-Dream-Tech",
        tags: [{
                name: "Logo",
                color: "blue-text-gradient",
            },
            {
                name: "Brand",
                color: "green-text-gradient",
            },
            {
                name: "Illustrator",
                color: "pink-text-gradient",
            },
        ],
        image: ps2,
        source_code_link: "https://www.behance.net/gallery/149302063/Logo-Dream-Tech",
    },
];

export { services, technologies, experiences, testimonials, projects };