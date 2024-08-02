import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";

function Header(props) {
  const { setShow, show } = props;
  const [clicked, setClicked] = useState(false);
  const [name] = useState("Sam");
  const handleChangeName = () => {
    setClicked(!clicked);
    console.log(setShow, "this is setshow");
    console.log("this is clicked 1");

    handleChange();
    if (setShow) setShow(!show);
  };

  useEffect(() => {
    console.log("this is called from mount with out dependencies");
  }, []); // compoenent did mount ( If it has empty array means i will run only once when the component is mounted)

  useEffect(() => {
    if (clicked) console.log("this is called from update with dependencies");
  }, [clicked]); // Component did update (If the array has any dependencies means i will call when ever the values has been changed for the variable)

  useEffect(() => {
    return () => {
      console.log("this is unmount phase");
    };
  }, []);
  // we will add the component unmount logics here with in the return keyword and also when we are using unmount hooks the array dependencies has to be empty
  const handleChange = () => {
    console.log("this is clicked 2");
  };
  return (
    <Wrapper>
      <p
        style={{
          color: clicked ? "green" : "red",
        }}
      >
        {props.name}
      </p>
      <button
        onClick={() => {
          handleChangeName();
          handleChange();
        }}
      >
        Click me
      </button>
    </Wrapper>
  );
}

export default Header;
