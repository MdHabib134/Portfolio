import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="tech-section">
        <h2>Tools</h2>
        <ul>
          <li>IDEs and Editors: Visual Studio Code, NetBeans, Jupyter Notebook, PyCharm, Google Colab</li>
          <li>Database Tools: SQL Server Management Studio, phpMyAdmin</li>
          <li>Project Management: Jira, Trello</li>
          <li>API Testing: Swagger</li>
          <li>Designing: Figma, Balsamiq</li>
          <li>Communication: Microsoft Teams, Slack</li>
          <li>Productivity: Microsoft Office, OneNote, Google Docs</li>
        </ul>
      </div>
  );
}

export default Toolstack;
