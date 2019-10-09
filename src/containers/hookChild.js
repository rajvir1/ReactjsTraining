import React,{useState} from 'react';

function HookChild(props) {
  const [label, setLabel] = useState({
    name:'ChildData'
});

function toggle(){
  console.log(label.name)
  setLabel({
    ...label,
    label: label.name = "test"
  })
  props.callback(label.name)  
}
  return (
    <div className="border-box" style={{margin:0,paddingLeft:0,paddingRight:0,border:'none'}}>
      <button onClick={toggle}>
        Child component: {props.name}
      </button>
    </div>
  );
}

export default HookChild;