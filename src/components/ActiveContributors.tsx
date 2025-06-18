import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Trophy, Star } from "lucide-react";

const ActiveContributors = () => {
  const membersData = {
    members: [
      {
        id: "83",
        name: "Anuj Verma",
        github: "iamanujvrma",
        designation: "Engineering Manager",
        active: false,
      },
      {
        id: "2",
        name: "Shubham Pradhan",
        github: "ShubhamPradhan17",
        designation: "Software Engineer",
        active: true,
      },
      {
        id: "3",
        name: "Monica",
        github: "Monica-MRN",
        designation: "Software Engineer",
        active: false,
      },
      {
        id: "926",
        name: "Prajjwalkumar Panzade",
        github: "kumarpanzade",
        designation: "Software Engineer",
        active: true,
      },
      {
        id: "929",
        name: "Sharyu Marwadi",
        github: "SharyuMarwadi",
        designation: "Software Engineer",
        active: false,
      },
      {
        id: "921",
        name: "Sourabh Bharale",
        github: "sourabh-josh",
        designation: "Software Engineer",
        active: true,
      },
      {
        id: "834",
        name: "Aditya Yadav",
        github: "Addy-tea-ya",
        designation: "",
        active: false,
      },
      {
        id: "916",
        name: "Samarth Kulkarni",
        github: "samrocks03",
        designation: "",
        active: false,
      },
      {
        id: "927",
        name: "Divya Tambat",
        github: "divyatambat",
        designation: "",
        active: false,
      },
      {
        id: "234",
        name: "Sagar Sonawane",
        github: "sagar23sj",
        designation: "",
        active: false,
      },
      {
        id: "404",
        name: "Ajinkya Karanjikar",
        github: "AjinkyaASK",
        designation: "",
        active: false,
      },
      {
        id: "414",
        name: "Ankitkumar Singh",
        github: "ankitatjosh",
        designation: "",
        active: false,
      },
      {
        id: "915",
        name: "Vinay Chopda",
        github: "AlgorithmChopda",
        designation: "",
        active: false,
      },
      {
        id: "928",
        name: "Sharanya Datrange",
        github: "SharanyaSD",
        designation: "",
        active: false,
      },
      {
        id: "1",
        name: "Sethupathi Asokan",
        github: "sethu",
        designation: "Co-founder & Director",
        active: true,
      },
      {
        id: "SS13",
        name: "Vishwajeetsingh Desurkar",
        github: "selectus2",
        designation: "Senior Software Engineer",
        active: true,
      },
      {
        id: "18",
        name: "Sushmita",
        github: "sushmitaw",
        designation: "",
        active: false,
      },
      {
        id: "466",
        name: "Sonal Sachdev",
        github: "13-Sonal",
        designation: "",
        active: false,
      },
      {
        id: "656",
        name: "Gaurav Sorte",
        github: "gauravsorte",
        designation: "",
        active: false,
      },
      {
        id: "365",
        name: "Aniket Gore",
        github: "anigore",
        designation: "",
        active: false,
      },
      {
        id: "653",
        name: "Shubham Kumar",
        github: "shubhh139",
        designation: "",
        active: false,
      },
      {
        id: "905",
        name: "Pooja Lande",
        github: "poojalandejosh",
        designation: "",
        active: false,
      },
      {
        id: "913",
        name: "Rohan Dhalpe",
        github: "RohanDhalpe05",
        designation: "Software Engineer",
        active: true,
      },
      {
        id: "429",
        name: "Kartik Hiwase",
        github: "Kartik-Josh",
        designation: "",
        active: false,
      },
      {
        id: "924",
        name: "Abhishek Dhondalkar",
        github: "Abhishek-Jain-1925",
        designation: "",
        active: false,
      },
      {
        id: "923",
        name: "Saurabh Puri",
        github: "purisaurabh",
        designation: "",
        active: false,
      },
      {
        id: "169",
        name: "Abhijeet Lokhande",
        github: "Abhi-at-josh",
        designation: "Intern",
        active: true,
      },
      {
        id: "170",
        name: "Shadab Shikalgar",
        github: "Shadabb-josh",
        designation: "Intern",
        active: true,
      },
      {
        id: "164",
        name: "Yash Shah",
        github: "YashShah-Josh",
        designation: "Intern",
        active: true,
      },
      {
        id: "922",
        name: "Sumit Done",
        github: "Sumit2280",
        designation: "Software Engineer",
        active: true,
      },
      {
        id: "171",
        name: "Sahil Bheke",
        github: "SahilBheke25",
        designation: "Intern",
        active: true,
      },
      {
        id: "657",
        name: "Malhar Jadhav",
        github: "malharjadhav8999",
        designation: "Software Engineer",
        active: true,
      },
      {
        id: "175",
        name: "Ravidas Gaikwad",
        github: "ravijosh2025",
        designation: "Intern",
        active: true,
      },
      {
        id: "176",
        name: "Niranjan Patil",
        github: "niranjan-patil",
        designation: "Senior Software Engineer",
        active: true,
      },
      {
        id: "177",
        name: "Moin Ahmed",
        github: "Moin-A",
        designation: "Senior Software Engineer",
        active: true,
      },
      {
        id: "178",
        name: "Pooja Lande",
        github: "poojalandejosh",
        designation: "Senior Software Engineer",
        active: true,
      },
      {
        id: "178",
        name: "Prajwal Ingale",
        github: "ingale12345",
        designation: "Senior Software Engineer",
        active: true,
      },
      {
        id: "178",
        name: "Mangesh Shinde",
        github: "mangesh038",
        designation: "Senior Software Engineer",
        active: true,
      },
      {
        id: "179",
        name: "Partha Pratim Samanta",
        github: "partha-josh",
        designation: "Senior Software Engineer",
        active: true,
      },
      {
        id: "180",
        name: "Shubham Kumar",
        github: "shubhh139",
        designation: "Software Engineer",
        active: true,
      },
    ],
  };

  // Filter only active members
  const activeMembers = membersData.members.filter((member) => member.active);

  // Define color gradients for cards
  const colorGradients = [
    "from-josh-blue to-josh-teal",
    "from-josh-teal to-josh-orange",
    "from-josh-orange to-josh-purple",
    "from-josh-purple to-josh-blue",
    "from-josh-blue to-josh-teal",
    "from-josh-teal to-josh-orange",
  ];

  // Define sample achievements based on designation
  const getAchievement = (designation) => {
    if (
      designation.toLowerCase().includes("director") ||
      designation.toLowerCase().includes("founder")
    ) {
      return "Visionary Leader";
    } else if (designation.toLowerCase().includes("senior")) {
      return "Technical Expert";
    } else if (designation.toLowerCase().includes("engineer")) {
      return "Code Champion";
    } else if (designation.toLowerCase().includes("intern")) {
      return "Rising Star";
    } else if (designation.toLowerCase().includes("manager")) {
      return "Team Builder";
    } else {
      return "Innovation Driver";
    }
  };

  // Generate sample expertise based on designation and name
  // const getExpertise = (designation, name) => {
  //   const allSkills = [
  //     "React",
  //     "Node.js",
  //     "Python",
  //     "TypeScript",
  //     "AI/ML",
  //     "Django",
  //     "DevOps",
  //     "AWS",
  //     "Docker",
  //     "Vue.js",
  //     "Flutter",
  //     "iOS",
  //     "Android",
  //     "Java",
  //     "Go",
  //     "Kubernetes",
  //   ];
  //   // Return 2-4 random skills for each person
  //   const numSkills = Math.floor(Math.random() * 3) + 2;
  //   const shuffled = [...allSkills].sort(() => 0.5 - Math.random());
  //   return shuffled.slice(0, numSkills);
  // };

  // Generate random contribution count
  // const getContributions = () => Math.floor(Math.random() * 40) + 15;

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-josh-gray-900 mb-6">
            Active Contributors
          </h2>
          <p className="text-xl text-josh-gray-600 max-w-3xl mx-auto font-medium">
            Meet the brilliant minds driving innovation at Josh Software. Our
            weekend warriors and weekday heroes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activeMembers.map((member, index) => (
            <Card
              key={member.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white rounded-3xl overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${
                      colorGradients[index % colorGradients.length]
                    } p-1 transform group-hover:scale-110 transition-all duration-300`}
                  >
                    <Avatar className="w-full h-full">
                      <AvatarImage
                        src={`https://github.com/${member.github}.png`}
                      />
                      <AvatarFallback className="bg-white text-josh-gray-900 font-display font-bold text-lg">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-josh-orange text-white rounded-full p-2 shadow-lg">
                      <Trophy className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-josh-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-josh-gray-600 mb-4 font-medium">
                  {member.designation || "Team Member"}
                </p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Github className="w-4 h-4 text-josh-gray-500" />
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-josh-gray-600 font-semibold hover:text-josh-blue transition-colors"
                  >
                    @{member.github}
                  </a>
                  {/* <Star className="w-4 h-4 text-josh-orange fill-current ml-1" /> */}
                </div>
                {/* <Badge className="bg-gradient-to-r from-josh-teal/10 to-josh-blue/10 text-josh-blue border-0 mb-4 font-semibold">
                  {getAchievement(member.designation)}
                  </Badge> */}
                {/* <div className="flex flex-wrap gap-2 justify-center">
                  {getExpertise(member.designation, member.name).map((skill, skillIndex) => (
                  <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-josh-gray-100 text-josh-gray-700 rounded-full text-sm font-medium"
                  >
                  {skill}
                  </span>
                  ))}
                  </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* <div className="text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-josh-blue/5 to-josh-teal/5 rounded-2xl">
            <div className="w-3 h-3 bg-josh-teal rounded-full mr-3 animate-pulse"></div>
            <span className="text-josh-gray-700 font-semibold">
            Want to see your name here? Join our next weekend hackathon!
            </span>
            </div>
            </div> */}
      </div>
    </section>
  );
};
export default ActiveContributors;
