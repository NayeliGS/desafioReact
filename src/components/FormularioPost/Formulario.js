import React, { useEffect, useRef, useState } from "react";
import "../../post.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as typeActions from "../../store/actions/postActions";

export default function Formulario() {
  const navigate = useNavigate();
  const refImage = useRef();
  const refTitle = useRef();
  const refText = useRef();
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);

  const [post, setPost] = useState({});

  useEffect(() => {
    if (id > 0) {
      const postFind = posts.find((post) => post.id === Number(id));
      setPost(postFind);
    }
  }, []);

  function editarPost() {
    const editPost = {
      id: post.id,
      image: refImage.current.value,
      title: refTitle.current.value,
      text: refText.current.value,
    };
    dispatch({
      type: typeActions.EDIT_POST,
      payload: editPost,
    });
    navigate("/");
  }
  function addPost() {
    const newPost = {
      id: posts.length + 1,
      image: refImage.current.value,
      title: refTitle.current.value,
      text: refText.current.value,
    };

    dispatch({
      type: typeActions.ADD_POST,
      payload: newPost,
    });
    navigate("/");
  }

  function savePost() {
    if (id > 0) {
      editarPost();
    } else {
      addPost();
    }
  }

  return (
    <main>
      <div className="textArea">
        <div className="button_first">
          <label htmlFor="imagen"></label>
          <input
            type="text"
            ref={refImage}
            className="btn_color_add"
            placeholder="Add a url image"
            id="addImagen"
            name="addImagen"
            defaultValue={post.image}
            required
          />
        </div>

        <div className="tittle_post">
          <textarea
            id="textTitlle"
            name="textTitlle"
            ref={refTitle}
            cols={124}
            rows="6"
            placeholder="Tittle"
            className="edit_textArea"
            defaultValue={post.title}
          ></textarea>
        </div>

        <div className="text_post">
          <textarea
            id="textPost"
            name="textContentpost"
            ref={refText}
            cols={124}
            rows="14"
            placeholder="Tell your story..."
            className="body_textArea"
            defaultValue={post.text}
          ></textarea>
        </div>
        <div className="text_post">
          <button className="buttonPublish" onClick={savePost}>
            Publish
          </button>
        </div>
      </div>
    </main>
  );
}
