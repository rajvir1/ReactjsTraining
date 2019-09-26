import React,{useState} from 'react';

function HookChild(props) {
const [childState,setChildState] = useState({
  isvisible:false
})
function toggle(){

  setChildState({
    isvisible: !childState.isvisible,
  })
  console.log(
    'childState.isvisible',childState.isvisible
  )
  props.childStateProp(childState.isvisible)  
}
  return (
    <div>
      <p>You clicked times</p>
      {/* <button onClick={toggle} className={'btn' + ( childState ? 'red' : 'green' )}> */}
      <button onClick={toggle} className={ childState.isvisible ? 'red' : 'green'}>
        Child component {props.name}
      </button>
    </div>
  );
}

export default HookChild;