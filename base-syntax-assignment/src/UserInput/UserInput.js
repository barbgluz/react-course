import React from 'react';

const userInput = (props) => {
    const style = {
        width: '60%',
        border: 'solid 1px lavender',
        padding: '5px'
    }
    return(
        <div className="userInput" >
            <input style={style} type="text" onChange={props.changed} value={props.currentName}/>
        </div>
        );
};

export default userInput;
