/**
 * Personalize the profile here.
 * Replace every "xxxxxxxx" with real information.
 * Replace the images in public/photos, keeping these file names,
 * or point `image` at a new file.
 */

export const profile = {
  name: "Narasimha Raju Kasu",
  nameLines: ["Narasimha Raju", "Kasu"],
  mark: "N",
  lede: "A personal record of origin, study, work, and family.",
  contact: [
    { label: "Email", value: "narasimharaj.kasu001@gmail.com" },
    { label: "Phone", value: "+91 9121372959" },
    { label: "WhatsApp", value: "+91 9121372959" },
    { label: "Location", value: "Ideal Celestia, Puppalguda, Manikonda, Hyderabad, Telangana, India" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/narsimharaj-kasu-6a2968198",
    instagram: "https://www.instagram.com/narasimharaju.kasu/",
    whatsapp: "https://wa.me/+919121372959",
  },
  parents: [
    {
      relation: "Father",
      name: "Sanjeeva Raju",
      image: "/photos/parent-1.jpeg",
      mark: "P",
    },
    {
      relation: "Mother",
      name: "Sridevi",
      image: "/photos/parent-2.jpeg",
      mark: "P",
    },
    {
      relation: "Sister",
      name: "Spandana",
      image: "/photos/sibling-1.jpeg",
      mark: "S",
    }
  ],
};

export const chapters = [
  {
    id: "name",
    index: "01",
    kicker: "Name",
    title: profile.nameLines,
    image: "/photos/persona-1.jpeg",
    mark: "N",
    lede: profile.lede,
  },
  {
    id: "background",
    index: "02",
    kicker: "Background",
    title: "Birth, education & work",
    image: "/photos/persona-2.jpeg",
    mark: "N",
    facts: [
      { label: "Date of birth", value: "4th April 1995" },
      { label: "Height", value: "170 cm" },
      { label: "Qualification", value: "M.Tech, Computer Science and Engineering" },
      { label: "Institution", value: "NIT Durgapur" },
      { label: "Role", value: "Sr. Software Engineer" },
      { label: "Organization", value: "Skillsoft" },
    ],
  },
  {
    id: "about",
    index: "03",
    kicker: "About me",
    title: "A little about me",
    image: "/photos/persona-4.jpg",
    mark: "N",
    lede:
      "Hard-working and family-minded. I value kindness, good conversation and a balanced life, and I enjoy spending time with the people who matter most to me.",
    facts: [
      { label: "Languages", value: "English, Telugu, Hindi" },
      { label: "Lives in", value: "Hyderabad" },
      { label: "Hobbies", value: "Gym, plantation, browsing with gpt, understanding about politics, tech, economy" },
    ],
  }
];

export const sections = [
  { id: "name", label: "Name" },
  { id: "background", label: "Background" },
  { id: "about", label: "About" },
  { id: "hobbies", label: "Hobbies" },
  { id: "family", label: "Family" },
  { id: "contact", label: "Contact" },
];
