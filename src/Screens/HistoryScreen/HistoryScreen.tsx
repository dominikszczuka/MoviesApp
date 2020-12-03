import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import React from "react";

const HistoryToDoScreen = () => {
  const clearTaskButton = <button>Clear Tasks</button>;

  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={clearTaskButton} />
      <h1>Finished Task</h1>
    </LayoutWrapper>
  );
};

export default HistoryToDoScreen;
