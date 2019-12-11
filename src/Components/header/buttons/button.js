import React from "react";
function Button(props) {
  const confirm = () => {
    return props.name === props.isSelected ? "Selected" : "not";
  };
  const themes = {
    Dark: [
      {
        selector: "--contrary",
        color: "#fff"
      },
        {
          selector: "--secondary",
          colof: "#08090d",
        } ,{
          selector: "--color3",
          colof: "#fff",
        }
    ]
  };
  const change = () => {
    let root = document.documentElement;
    console.log(root.style);
   themes.Dark.map((e)=>{
    let root = document.documentElement;
    root.style.setProperty(e.selector, e.color);
    props.setBackground(props.name);
  })};
  return (
    <button className={`Button ${confirm()}`} onClick={change}>
      <span>{props.name}</span>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="paint-brush"
        className=""
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"
        ></path>
      </svg>
    </button>
  );
}

export default Button;
