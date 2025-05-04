import React from "react";

const categorizedSkills = [
  {
    title: "Frontend",
    skills: ["JavaScript", "React", "Redux","HTML5", "CSS3",, "TypeScript", "Bootstrap", "TailwindCSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express"],
  },
  {
    title: "Databases",
    skills: ["MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git","VSCode"],
  },
];

const Skills = () => {
  return (
    <>
      <style>{`
      `}</style>

      <div className="container p-lg-5 p-3">
        <div className="d-flex align-items-center w-50">
          <h2>/ skills</h2>
          <hr
            className="flex-grow-1 mx-2"
            style={{
              backgroundColor: "#AC59C9",
              borderTop: "1px solid #AC59C9",
              opacity: "1",
            }}
          />
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-5 py-4">
          {categorizedSkills.map((category, index) => (
            <div  key={index}>
              <div className="border border-secondary  text-center" style={{width:'200px'}}>
                <h6 className="border-bottom border-secondary p-2 ">{category.title}</h6>
                <div className="p-2">
                  <span style={{ fontSize: "14px",color:'#A8A8A8' }}>
                    {category.skills.join("  ")}
                  </span>
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </>
  );
};

export default Skills;
