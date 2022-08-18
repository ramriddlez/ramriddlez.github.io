import emoji from "react-easy-emoji";

export const greetings = {
	name: "Ramandeep Singh",
	title: "Hello! I am Ramandeep",
	description:
		"I am a PROVEN web developer, with over 5+ years of experience in Front End Engineering. My ability to learn and master skills is unparalleled. The energy and burning desire within to succeed is what you are looking to add to your team. Lets connect!",
	resumeLink:
		"https://docs.google.com/document/d/1sF5n5PKnPdJl7S1rzRiFoC3hsgnf79XyvaKqz8kcoBk/edit?usp=sharing",
};

export const openSource = {
	githubUserName: "ramriddlez",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/ramriddlez",
	linkedin: "https://www.linkedin.com/in/skilledsoftwaredev",
};

export const skillsSection = {
	title: "WHAT I DO ",
	subTitle:
		"PROVEN FRONT END DEVELOPER; WITH INCREASING EXPERIENCE IN FULL STACK DEVELOPMENT",
	data: [
		{
			title: "Front End Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Developing features to enhance the user experience"),
				emoji(
					"⚡ Optimizing web pages for maximum speed and scalability"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Back End Development",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Experience creating a robust backend using Node.js, ExpressJS, MongoDB, and associated modules."
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Heroku"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb-icon",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "mySQL",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "Nodejs",
					fontAwesomeClassname: "logos:nodejs-icon",
				},
				{
					skillName: "Jest Unit Testing",
					fontAwesomeClassname: "simple-icons:jest",
				},
			],
		},
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Front End Development", //Insert stack or technology you have experience in
		progressPercentage: "93", //Insert relative proficiency in percentage
	},
	{
		Stack: "Back End Development",
		progressPercentage: "68",
	},
	{
		Stack: "Test Driven Development",
		progressPercentage: "89",
	},
	{
		Stack: "Debugging",
		progressPercentage: "79",
	},
	{
		Stack: "Agile Environment and Communication",
		progressPercentage: "99",
	},
];

export const educationInfo = [
	{
		schoolName: "Ryerson University",
		subHeader: "Bachelors of Science",
		duration: "September 2014 - April 2018",
		desc: "Achieved high grades due to strong work ethic and dedication",
		descBullets: [
			"Strong academic rigor; proven to dedicate and bring forth quantitative results",
			"Leader of multiple science clubs",
		],
	},
	{
		schoolName: "University of Toronto",
		subHeader: "Full Stack Web Development Bootcamp",
		duration: "January 2022 - April 2022",
		desc: "An intensive program focused on gaining technical programming skills in MERN stack, HTML, CSS, Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handlebars.js, ReactJS, Object-Oriented Programming, MVC frameworks, Data Structures and Algorithms",
		descBullets: [
			"Completed with A+ record, and honors from professors",
			"Received multiple awards for creating beautiful front ends",
		],
	},
];

export const experience = [
	{
		role: "Software Developer",
		company: "Fiverr",
		companylogo: "/img/icons/common/fiver.png",
		date: "Apr 2022 - Present",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries. I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
	},
	{
		role: "Software Engineer ",
		company: "Manifold Capital",
		companylogo: "/img/icons/common/mani.png",
		date: "Jan 2017 - Dec 2020",
		desc: "● KEY team lead in developing proprietary automation software, that allowed for result orientated targeted asset allocation which produced increased returns YoY. ● Developed the front end client facing platform using technologies such as HTML/CSS, JavaScript, Angular 13, React js, npm, git, github, docker, kubernetes, bootstrap, tailwind css ● Utilized API integrations on the Sterling Platform to feed data into proprietary algorithmic software. This increased overall floor performance by over 36% and increased returns on company assets. ● Participated in daily standups with senior level fund managers, and gained feedback and experience in sector-driven asset allocation",
	},
	{
		role: "Software Engineer",
		company: "Full Scale Capital",
		companylogo: "/img/icons/common/fs.jpg",
		date: "Jan 2021 - Jan 2022",
		desc: "● Assisted in front end web development, creating bug-free sign up pages and dynamic customer facing pages. Utilized Wordpress, Angular 13, React.js, Javascript, HTML/CSS, CSS frameworks. ● Integrated Stripe payment processors, continuously produced test cases using Jest and Jasmine, and deployed in a timely manner ● Cultivated and guided several new interns to deploy company culture and proper strategic execution, going above and beyond my role responsibilities to ENSURE startup culture success",
	},
];

export const projects = [
	{
		name: "Home Slice",
		desc: "● Full Stack MERN application that leverages a noSQL database, API integration,industry standard authentications, interactive UI/UX and Stripe Payment integration ● Technologies: ReactJS, MongoDB, NodeJS, ExpressJS, Heroku Cloud deployment, Agile development, Scrum, Git, Github, Stripe Integration",
		github: "https://github.com/ramriddlez/HomeSlice",
		link: "https://project-homeslice.herokuapp.com/",
	},
	{
		name: "Hive Mind",
		desc: " Social media Full Stack application that solves a real world issue by promoting mental health wellness. A mental health community application to connect mental health advocates in a place where they can share tips and get daily inspiration to remain mindful of their own mental health.● Responsibilities included: server creation, HTTP routing, database models, cookies and security implementation, and heroku deployment ● Technologies: HandlebarsJS, MVC, ExpressJS, mySQL, nodemon, Express-Session, Jest TTD, Github, Github Pages",
		github: "https://github.com/ramriddlez/Hive-Mind/",
		link: "https://hivemind-442.herokuapp.com/"
	},
	{
		name: "Marvel Wiki",
		desc: "The application takes user input, a character name, and uses the Marvel API to generate 10 comic books relating to the character. The application uses the Wikipedia API to search for Wikipedia pages related to the character. These pages are not directly related to the comic books, and give the user more information about the characters, movies with the characters, and actors/actresses that have played the character. The application also features a navigation bar with links to the Marvel API, Marvel Database, and a random movie generator which gives you a list of Marvel movies to watch! The application uses several technologies, such as Spectre CSS Framework, Google Font API, Wikipedia API, Marvel API, jQuery, JavaScript, and Bootstrap.",
		github: "https://github.com/ramriddlez/Marvel-Wiki/",
		link: "https://sevaggap.github.io/Marvel-Comics-Wiki/"
	},
	{
		name: "Atlantic Co. [COMING SOON]",
		desc: "Full Stack MERN wesbite, for a real-life client. Fully functioning, multi page website, with functioning back end databases. Technologies used are React js, Nodejs, Express js, Javascript, HTML/CSS,",
		github: "",
		link: ""
	},
];

export const feedbacks = [
	{
		name: "Luca Beyrute (Teachers Assistant at UofT, Current Software Developer",
		feedback:
			"Raman was a very detail-oriented student, never giving up the opportunity to cover all the doubts and use cases he could think of on the material and that paid off when it was time to work on the harder assignments or projects, In no time he was asking harder questions and sought assistance with advanced problems, he was always quick to help his peers and guide them through difficult trouble, I hope I have the opportunity to work with him in the future.",
	},
	{
		name: "Bilal Raza (Colleague)",
		feedback:
			"Ramandeep and I were in the same full stack web development bootcamp and we were doing our final project together. He has shown to dedicate himself to learning as much as he can about writing quality code and it showed. Were it not for his efforts, our application would have been less visually pleasing and would have lacked certain key functionalities. I am certain Ramandeep and the passion he brings would be a valuable asset for any development team.",
	},
];

export const seoData = {
	title: "Hire me to LEVEL up your company!",
	description:
		"A PROVEN front end developer with full stack experience",
	author: "Ramandeep Singh",
	image: "https://avatars.githubusercontent.com/ramriddlez",
	url: "https://ramriddlez.github.io/",
	keywords: [
		"Ramandeep",
		"Ramandeep Singh",
		"ramriddlez",
		"Raman Singh",
		"Portfolio",
		"Ramandeep Portfolio ",
		"Ramandeep Singh Portfolio",
	],
}