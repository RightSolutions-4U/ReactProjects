import React from "react";

export default function Box(props){
    // const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: props.on ? "#222222" : "trasparent"
    }

    // const styles = {
    //     backgroundColor: on ? "#222222" : "trasparent"
    // }
    // function toggle(){
    //     setOn(prevOn => !prevOn)
    // }
    

    return(
    <div style={styles} className="box" key={props.id} onClick={() => props.handleClick(props.id)}></div>
    )
}
    
