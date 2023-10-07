import React from "react";

import { useDispatch } from "react-redux";
import * as typeActions from "../../store/actions/postActions";
import { useNavigate } from "react-router-dom";

export default function PostItem(props) {
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const postData = props.data;

  console.log({ postData });
  function deletePost(e, id) {
    e.preventDefault();
    dispatch({
      type: typeActions.DELETE_POST,
      payload: {
        id: id,
      },
    });
  }

  function editarPost(e, id) {
    e.preventDefault();
    navigete(`/formulario/${id}`);
  }
  return (
    <div className="mainPost">
      <div className="post">
        <div className="infoProfile">
          <img
            className="avatarPost"
            src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671122.jpg?w=740&t=st=1696531672~exp=1696532272~hmac=736e6e70ec5548b14c59481a87be00881d4ec60c43cc32f4b22295b7df7354b1"
            alt="avatar post"
          />
          <h5 className="namePost">Usuario Random</h5>
        </div>

        <div>
          <div className="tittlePost">{postData.title}</div>
        </div>
        <div className="textPost">{postData.text}</div>

        <div className="partButtons">
          <button
            className="btn btn_edit"
            type="button"
            onClick={(e) => editarPost(e, postData.id)}
          >
            Edit
          </button>
          <button
            className="btn btn_delete"
            type="button"
            onClick={(e) => deletePost(e, postData.id)}
          >
            Delete
          </button>
        </div>
      </div>

      <img className="imagePost" src={postData.image} alt={postData.title} />
    </div>
  );
}
