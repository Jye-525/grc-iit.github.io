import { Member } from "../types";

export default [
  {
    name: "Keith Bateman",
    title: "PhD Candidate",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/bateman.jpg").default,
    links: {
      email: "kbateman@hawk.iit.edu",
      website: "http://mypages.iit.edu/~kbateman/",
    },
    researchInterests: ["HPC", "Distributed Storage"],
  },
  {
    name: "Jaime Cernuda",
    title: "PhD Candidate",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/cernuda.jpg").default,
    links: {
      email: "jcernudagarcia@hawk.iit.edu",
      website: "http://www.jcernuda.com",
    },
    researchInterests: ["Distributed Systems", "HPC", "Streaming Applications"],
  },
  {
    name: "Kun Feng",
    title: "HPC Researcher",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/feng.jpg").default,
    links: {
      email: "kfeng1@iit.edu",
    },
  },
  {
    name: "Luke Logan",
    title: "PhD Candidate",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/logan.jpg").default,
    links: {
      email: "llogan@hawk.iit.edu",
      github: "https://github.com/lukemartinlogan/",
      linkedin: "https://www.linkedin.com/in/lukemartinlogan/",
      website: "https://lukemartinlogan.github.io/professional-website/",
    },
    researchInterests: [
      "Distributed Storage",
      "Parallel and Distributed Systems",
      "Parallel I/O",
      "Operating Systems",
    ],
  },
  {
    name: "Xiaoyang Lu",
    title: "PhD Candidate",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/lu.jpg").default,
    links: {
      email: "bli70@hawk.iit.edu",
    },
    researchInterests: ["Memory Performance Modeling and Optimization"],
  },
  {
    name: "Neeraj Rajesh",
    title: "PhD Candidate",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/rajesh.jpg").default,
    links: {
      email: "nrajesh@hawk.iit.edu",
      website: "https://about.stax.xyz/neeraj",
    },
    researchInterests: ["Parallel and Distributed Systems", "HPC", "ML-Assisted Systems"],
  },
  {
    name: "Aparna Sasidharan",
    title: "HPC Researcher",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/sasidharan.jpg").default,
    links: {
      email: "asasidharan@iit.edu",
      website: "https://sites.google.com/view/aparna-sasidharan/home",
    },
  },
  {
    name: "Meng Tang",
    title: "PhD Student",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/tang.jpg").default,
    links: {
      email: "mtang11@hawk.iit.edu",
    },
    researchInterests: ["Distributed Storage", "Containerization"],
  },
  {
    name: "Hua Xu",
    title: "PhD Student",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/xu.jpg").default,
    links: {
      email: "hxu40@hawk.iit.edu",
    },
    researchInterests: ["HPC", "Distributed Storage"],
  },
  {
    name: "Jie Ye",
    title: "PhD Candidate",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/ye.png").default,
    links: {
      email: "jye20@hawk.iit.edu",
      github: "https://github.com/Jye-525",
    },
    researchInterests: ["Distributed Storage", "Parallel and Distributed Systems", "Parallel I/O"],
  },

  {
    name: "Izzet Yildirim",
    title: "PhD Student",
    advisor: "Dr. Xian-He Sun",
    image: require("@site/static/img/members/yildirim.jpg").default,
    links: {
      email: "iyildirim@hawk.iit.edu",
      github: "https://github.com/izzet",
      linkedin: "https://www.linkedin.com/in/izzetcyildirim/",
      scholar: "https://scholar.google.com/citations?user=-Zi-DtsAAAAJ&hl=en",
      twitter: "https://twitter.com/izzetcyildirim",
      website: "https://izzet.dev/",
    },
    researchInterests: ["HPC", "Distributed Storage", "I/O Characterization", "Containerization"],
  },
] as Member[];
