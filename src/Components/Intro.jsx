import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DownloadIcon from "@mui/icons-material/Download";

const Intro = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center p-lg-5 p-3">
        <div className="w-75 text-center py-5 mt-5">
          <h1 className="display-2">
            hi, <span style={{ color: "#AC59C9" }}>hansa</span> here.
          </h1>
          <p className="mb-5" style={{ fontSize: "1.2rem", color: "#A8A8A8" }}>
            I'm a <span style={{ color: "#AC59C9" }}>Full-Stack Developer</span>{" "}
            focused on building scalable, end-to-end web applications using
            technologies like React, Node.js, Express.js and MongoDB
          </p>
          <a
            href="mailto:hansamehar13@gmail.com"
            style={{ border: "1px solid #AC59C9", color: "#fff" }}
            className="text-decoration-none rounded p-3 mx-2"
          >
            <MailOutlineIcon className="pb-1"></MailOutlineIcon> Contact me
          </a>
          <a
            href="/resume.pdf"
            download
            style={{ border: "1px solid #AC59C9", color: "#fff" }}
            className="text-decoration-none rounded p-3 mx-2"
          >
            <DownloadIcon className="pb-1"></DownloadIcon> Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
