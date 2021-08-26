import React from "react";
import styled from "styled-components";

import LoadingSpinner from "../vendor/LoadingSpinner";

const PageContent = () => {
  return (
    <Row>
      <MainContent>
        {/* Normally, an app would load here. */}
        <LoadingSpinner />
      </MainContent>
    </Row>
  );
}

const Row = styled.div`
  position: relative;
`;

const MainContent = styled.main`
  padding: 64px;
  display: flex;
  justify-content: center;
`;

export default PageContent;
