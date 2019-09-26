import React, { useState,useEffect } from 'react';
import HookChild from './hookChild';
function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState({
      name:'rajvir',
      count:true,
      childState:null
  });

  function  onClickFun(){
   setCount({
    ...count,
       name:'rajvir singh',
       count : !count.count
   })
};

function childState(value){
  console.log('value',value)
setCount({
  ...count,
  childState:value,
  
})
}
console.log(count.name)
  return (
    <div>
      <p>You clicked times</p>
      <button onClick={onClickFun}  className={'abc ' + count.count ? 'a' : 'b'}>
        {count.name}
      </button>
      <HookChild name={count.name} childStateProp={childState} />
    </div>
  );
}

export default Example;