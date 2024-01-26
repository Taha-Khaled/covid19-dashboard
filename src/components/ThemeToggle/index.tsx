import { FunctionComponent, memo } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../stateManager/store";
import {
  darkMode,
  lightMode,
  selectTheme,
} from "../../stateManager/features/themeSlice";
interface ThemeToggleProps {}

const ThemeButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const ThemeIcon = styled.img`
  rotate: ${(props) => props.theme.iconRotation};
  width: 35px;
`;

const Typography = styled.h3`
  font-size: 12px;
  color: ${(props) => props.theme.fontColor};
`;

const ThemeToggle: FunctionComponent<ThemeToggleProps> = () => {
  const { theme } = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const handelThemeToggle = () => {
    theme === "light" ? dispatch(darkMode()) : dispatch(lightMode());
  };

  return (
    <ThemeButton title="Change Theme" onClick={handelThemeToggle}>
      <ThemeIcon src="./themeIcon.png" alt="theme" />
      <Typography>{theme === "light" ? "Dark Mode" : "Light Mode"}</Typography>
    </ThemeButton>
  );
};
export default memo(ThemeToggle);
