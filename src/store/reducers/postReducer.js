import * as actionTypes from "../actions/postActions";

const initialState = {
  posts: [
    {
      id: 1,
      title: "16 little UI rules that make a big impact",
      text: "A UI design case study to redesign an example user interface using logical rules or guidelines",
      image:
        "https://img.freepik.com/foto-gratis/calavera-muchas-partes-diferentes_698780-1005.jpg?w=740&t=st=1696532096~exp=1696532696~hmac=154f6163748ad73b8e837bd5c4c9e21a35fd089ab2be1d0d912f16d6a19c9af7",
    },
    {
      id: 2,
      title: "Golden age of UX is over?",
      text: "We’re living in a post-design era.",
      image:
        "https://img.freepik.com/foto-gratis/sitio-ia-que-ayuda-produccion-software_1268-21620.jpg?w=1380&t=st=1696555181~exp=1696555781~hmac=3e4b103e677ee916ef3d92a9ca5b98760889ec548ec69d72bb36e478b5618070",
    },
    {
      id: 3,
      title: "Cruel last words",
      text: "This piece is part of a collection of short stories that all occur before, during or after the hospital stay, as detailed in the original piece: Impatiently Waiting for My Mom to Die.",
      image:
        "https://img.freepik.com/vector-gratis/plantilla-landing-page-isometrica-programacion_23-2148215430.jpg?w=1380&t=st=1696555216~exp=1696555816~hmac=81cb4bd04bee91caa3f4374bfe190c9139088793a5137610e9af1dd0ec95c8a0",
    },
    {
      id: 4,
      title: "10 tiny habits that can change your life.",
      text: "I tried these for 20 days and here’s the result!",
      image:
        "https://img.freepik.com/vector-gratis/ilustracion-concepto-cursos-big-data-linea_335657-5525.jpg?w=740&t=st=1696555256~exp=1696555856~hmac=682e78a5f53d779eba70aac4224d21910eb98899faadf42c696e98cbd91f4fad",
    },
  ],
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          (post) => post.id !== Number(action.payload.id)
        ),
      };

    case actionTypes.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
