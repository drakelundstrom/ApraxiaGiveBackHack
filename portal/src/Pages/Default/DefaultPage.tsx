import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../Components/Button";
import { LightTheme } from "../../Style/Themes/LightTheme";

export const DefaultPage = (): JSX.Element => {
  return (
    <Background>
        <Outlet />
    </Background>
  );
};



const Background = styled.div`
  display: flex;
  background-color: ${LightTheme.background.layerOne};
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  color: ${LightTheme.text.primary};
`;
