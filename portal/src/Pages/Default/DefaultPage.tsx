import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../Components/Button";

export const DefaultPage = (): JSX.Element => {
  return (
    <Box>
      <Button >Home</Button>
      
      <Page>
        <Outlet />
      </Page>
    </Box>
  );
};

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
`;
