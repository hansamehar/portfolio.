import React from "react";


const About = () => {
  return (
    <>
      <div  id="about" className=" container p-lg-5 p-3">
        <div className="d-flex align-items-center w-50">
          <h2 className="">/ about me</h2>
          <hr className="flex-grow-1 mx-2" style={{backgroundColor:'#AC59C9',borderTop: '1px solid #AC59C9',opacity:'1'}}/>
        </div>
        <div className="py-3" style={{fontSize:'1.1rem',color:'#A8A8A8'}}>
          <p>
            I am a BCA graduate with a solid foundation in web development. I
            completed a MERN stack internship, where I gained practical
            experience in building scalable applications using MERN/MEAN stack.
          </p>
          <h6>Here are some technologies I have been working with:</h6>
          <ul style={{ listStyleType: "disc" }}>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
         
        </div>
      </div>
    </>
  );
};

export default About;
