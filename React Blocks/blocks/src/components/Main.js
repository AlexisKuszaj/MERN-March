import React from 'react';
import SubContents from './SubContents';
import Ad from './Ad';


const Main = (props) => {
    return (
        <div className='main'>
      <SubContents/>
      <SubContents/>
      <SubContents/>
            <div>
      <Ad/>
      </div>
            </div>
    )
};

export default Main