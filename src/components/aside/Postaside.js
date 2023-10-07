import React from "react";

export default function Postaside (props){


  return(
    <div className="asidePost">
        <div className="post">
          <div className="infoProfile">
            <img
              className="avatarPost"
              src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671122.jpg?w=740&t=st=1696531672~exp=1696532272~hmac=736e6e70ec5548b14c59481a87be00881d4ec60c43cc32f4b22295b7df7354b1"
              alt="avatar post"
            />
            <h5 className="namePost">Usuario Random</h5>
          </div>
          <div className="tittleAside">{props.title}</div>
        </div>
      </div>
  )


}

