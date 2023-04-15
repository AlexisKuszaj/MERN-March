import React from 'react';

const Result = (props) => {
  const { allTabs, currentTabIndex } = props;

  return (
    <div className="result">
      { allTabs[currentTabIndex].content }
    </div>
  )
}

export default Result;