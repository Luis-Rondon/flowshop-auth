import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        

        <div style={profileStyle}>

          <p style={titleStyle}>Apunta a las estrellas, y llegarás a las montañas.</p>

          <div style={iconStyle}>
            <span style={iconStyle}>icon</span>
            <span style={iconStyle}>icon</span>
            <span style={iconStyle}>icon</span>
            <span style={iconStyle}>icon</span>
          </div>
          
          <img
            src={user.picture}
            alt={user.name}
            style={imageStyle}
            title={user.email}
          />
          <div>
            <h2 style={nameStyle}>{user.name}</h2>
            
          </div>
        </div>
      
      </div>
    )
  );
};

const navStyle = {
  backgroundColor: "lightgray",
  padding: "10px",
};

const ulStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  overflow: "hidden",
};

const liStyle = {
  float: "left",
  marginRight: "10px",
};

const titleStyle = { 
  fontSize:"17px",
  fontWeight: "600",
  color: "rgb(140, 28, 245)",
  marginRight: "300px",
  letterSpacing: "-0.5px",

};

const iconStyle = { 
  padding: 6,
  marginRight: "5px"
};

const profileStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "10px",
  marginRight: "50px",
  justifyContent: "right"
 
};

const imageStyle = {
  borderRadius: "50%",
  marginRight: "13px",
  marginLeft: "20px",
  cursor: "pointer",
  width: "40px",

  

};

const nameStyle = {
  margin: 0,
  justifyContent: "right",
  color: "rgb(140, 28, 245)",
  fontSize: "18px",
  letterSpacing: "-0.5px",
 

};

const emailStyle = {
  margin: 0,
  color: "rgb(140, 28, 245)",
};

export default Profile;
