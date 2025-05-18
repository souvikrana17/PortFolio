export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "A blend of creativity and technical expertise, tailored to your needs.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b9.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/t2.jpg",
    spareImg: "",
  },

  {
    id: 5,
    title: "Your vision, my expertise. Let's create something extraordinary.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b1.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WellBee: ",
    des: "A Healthcare Patient Management Application",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/appwrite.svg"],
    link: "https://wellbee-souvik-rana.vercel.app/",
  },
  {
    id: 2,
    title: "THE WATCH LIST: Movie Recommendation System",
    des: "A hybrid movie recommendation system using content-based and collaborative filtering with cosine similarity, and built a full-stack web app",
    img: "/p3.png",
    iconLists: ["/jup.svg","/py.svg"],
    link: "https://github.com/Souvik-Rana/MOVIE-RECOMMENDATION-SYSTEM",
  },
  {
    id: 3,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/workinprogress.gif",
  },
  
  /*{
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },*/
];

export const testimonials = [
  {
    quote:
      "Collaborating with Souvik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Souvik's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Souvik is the ideal partner.",
    name: "Debarati Roy",
    title: "Student at IIT Kanpur",
  },
  {
    quote:
      "Collaborating with Souvik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Souvik's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Souvik is the ideal partner.",
    name: "Debarati Roy",
    title: "Student at IIT Kanpur",
  },
  {
    quote:
       "Collaborating with Souvik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Souvik's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Souvik is the ideal partner.",
    name: "Debarati Roy",
    title: "Student at IIT Kanpur",
  },
  {
    quote:
       "Collaborating with Souvik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Souvik's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Souvik is the ideal partner.",
    name: "Debarati Roy",
    title: "Student at IIT Kanpur",
  },
  {
    quote:
        "Collaborating with Souvik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Souvik's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Souvik is the ideal partner.",
    name: "Debarati Roy",
    title: "Student at IIT Kanpur",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Salesforce Developer",
    desc: "Developed and customized Salesforce solutions for various business needs, leveraging Apex, Visualforce, and Lightning components.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "App Clone Project",
    desc: "Created a fully functional clone of a popular app, replicating its core features and user interface using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Developer",
    desc: "Architected and implemented scalable backend systems using Node.js and Express, integrating with various databases and APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
