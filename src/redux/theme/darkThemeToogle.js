import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_TYPE } from './theme.action'
import { selectCurrentTheme } from "./theme.selector";
import { ThemeIcon } from "../../components/cart/cart-icon/cart-icon.styles";
const DarkThemeToggle = () => {
  const darkThemeEnabled = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();

  return (
      <ThemeIcon color={`${darkThemeEnabled ? 'white': 'black'}`}  onClick={() => dispatch({ type: TOGGLE_TYPE.TOGGLE_DARKTHEME })}/>
  );
};

export default DarkThemeToggle;