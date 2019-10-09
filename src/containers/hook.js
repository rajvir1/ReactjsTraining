import React, { useState,useEffect } from 'react';
import HookChild from './hookChild';
function Hook(props) {
  // Declare a new state variable, which we'll call "count"
  const [label, setCount] = useState({
      name:'rajvir'
  });
  const [counter, setCounter] = useState({
    count:0,
    childState:null
});

  function counterFunc(){
    setCounter({
      count:counter.count + 1
   })
};

function callbackMethod(value){

  console.log('value',value)
setCount({
  childState:value  
})
}
  return (
    <div className="border-box">
      <button onClick={counterFunc}>
        {counter.count}
      </button>
      <HookChild name={label.name} callback={callbackMethod} />
    </div>
  );
}

export default Hook;