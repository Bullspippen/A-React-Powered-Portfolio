import React from "react";

// This component renders the resume content and its content using the Resume component
const Resume = () => {
  // Create a resume array and assign it an initial value of an array of objects containing the resume content and its content
  const resume = [
    {
      id: 1,
      type: "work",
      title: "Senior Business Analyst",
      employer: "Bank of Montreal",
      date: "11 2019 - 04 2022",
      bullets: [
        "As a Seasoned Senior Business Analyst, I have worked collaboratively with both business requestors and stakeholders across diverse departments, ensuring timely completion of projects with resolute commitment. My professional journey has been marked by an unwavering drive to seek out high-priority projects that challenged me to be well-versed in a wide array of areas, while also enhancing my professional network.",
        "Throughout my tenure, I have consistently prioritized the importance of open communication, recognizing that effective collaboration with IT departments is integral to project success. This has entailed spending significant time with in-house vendor leads, providing me with valuable insights to support the updating of critical documentation and guidelines.",
        "One of my greatest accomplishments was a challenging finance project, which had confounded senior analysts and stakeholders for over a year. Through tenacity and a deep understanding of our systems and vendors, I was able to resolve the matter within a week, providing comprehensive guidance on extracting the required information from TSYS and navigating complex spreadsheets.",
        "In my approach to project management, I am dedicated, resilient, and always striving to go above and beyond. I have consistently demonstrated a willingness to work extended hours, ensuring that I am well-prepared for the next day's meetings, and seeking out information beyond my scope to anticipate stakeholder questions.",
        "I take pride in my meticulous attention to detail, consistently updating Microsoft Teams with comprehensive meeting minutes, approvals, and testing requirements, and creating clear and concise requirements packages to ensure effective communication with stakeholders. Throughout the project lifecycle, I remain focused on achieving optimal outcomes, ensuring a seamless transition from analysis to testing and ultimately to production, while providing comprehensive 30-day warranty periods to Business Requestors.",
        "I am a highly motivated, intellectually astute, and forward-thinking Senior Business Analyst, committed to delivering exceptional outcomes while fostering strong working relationships with stakeholders across diverse departments."
      ],
  
    },
    {
      id: 3,
      type: "skills",
      title: "Skills",
      bullets: ["TSYS", "Marketing", "Finance", "Information and Technology", "Training and Development", "Performance Management"],
    },
  ];

  // Render the resume content and its content using the resume array and the map() method to iterate over the array
  return (
    <section>
      <h2>Work Experience</h2>
      {resume
        .filter((item) => item.type === "work")
        .map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.employer}</p>
            <ul>
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}


      <h2>Skills</h2>
      {resume
        .filter((item) => item.type === "skills")
        .map((item) => (
          <div key={item.id}>
            <ul>
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default Resume;
