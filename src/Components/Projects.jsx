import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CodeIcon from '@mui/icons-material/Code';
import POSImg from '../assets/posImg.png'
import EventImg from '../assets/eventifyImg.png'

const Projects = () => {
  return (
    <>
      <div id="projects" className="container p-lg-5 p-3">
      <div className="d-flex align-items-center w-50 ">
          <h2>/ projects</h2>
          <hr className="flex-grow-1 mx-2" style={{backgroundColor:'#AC59C9',borderTop: '1px solid #AC59C9',opacity:'1'}}/>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-5 py-4">
          <Card
            className="bg-transparent border-secondary rounded-0 text-light"
            style={{ width: "17rem" }}
          >
            <Card.Img
              variant="top"
              src={POSImg}
              height={145}
            />
            <div className="border-top border-bottom border-secondary text-center text-secondary">
              <span style={{ fontSize: "13px" }}>
                React NodeJs Express MongoDB
              </span>
            </div>
            <Card.Body>
              <Card.Title>POS System</Card.Title>
              <Card.Text className="text-secondary">
                Point Of Sale(POS) and Inventory system
              </Card.Text>
              <div className="d-flex justify-content-between">
                <a href="https://smart-pos-zeta.vercel.app/" style={{border:'1px solid #AC59C9',color:'#fff'}} className="text-decoration-none px-3">
                  Live <InsertLinkIcon className="pb-1"></InsertLinkIcon>
                </a>
                <a href="https://github.com/hansamehar/SmartPOS" className="text-decoration-none px-3 border border-secondary text-white">
                  Code <CodeIcon className="pb-1"></CodeIcon>
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="bg-transparent border-secondary rounded-0 text-light"
            style={{ width: "17rem" }}
          >
            <Card.Img
              variant="top"
              src={EventImg}
              height={145}
            />
            <div className="border-top border-bottom border-secondary text-center text-secondary">
              <span style={{ fontSize: "13px" }}>
                React NodeJs Express MongoDB
              </span>
            </div>
            <Card.Body>
              <Card.Title>Eventify</Card.Title>
              <Card.Text className="text-secondary">
                Event Ticketing System
              </Card.Text>
              <div className="d-flex justify-content-between">
                <a href="https://eventify-ticketing.netlify.app/" style={{border:'1px solid #AC59C9',color:'#fff'}} className="text-decoration-none px-3">
                  Live <InsertLinkIcon className="pb-1"></InsertLinkIcon>
                </a>
                <a href="https://github.com/hansamehar/eventify " className="text-decoration-none px-3 border border-secondary text-white">
                  Code <CodeIcon className="pb-1"></CodeIcon>
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="bg-transparent border-secondary rounded-0 text-light"
            style={{ width: "17rem" }}
          >
            <Card.Img
              variant="top"
              src=""
              height={145}
            />
            <div className="border-top border-bottom border-secondary text-center text-secondary">
              <span style={{ fontSize: "13px" }}>
                Python Java MySQL 
              </span>
            </div>
            <Card.Body>
              <Card.Title>MedBot</Card.Title>
              <Card.Text className="text-secondary">
                Healthcare Management System
              </Card.Text>
              <div className="d-flex justify-content-between">
                <a href="" style={{border:'1px solid #AC59C9',color:'#fff'}} className="text-decoration-none px-3">
                  Live <InsertLinkIcon className="pb-1"></InsertLinkIcon>
                </a>
                <a href="" className="text-decoration-none px-3 border border-secondary text-white">
                  Code <CodeIcon className="pb-1"></CodeIcon>
                </a>
              </div>
            </Card.Body>
          </Card>

        </div>
      </div>
    </>
  );
};

export default Projects;
