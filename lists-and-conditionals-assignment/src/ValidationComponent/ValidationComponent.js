import React from 'react';

const validationComponent = (props) => {
    let validation = (<p> Text too short</p>);
    if(props.length > 5) {
        validation = (<p>Text long enough</p>)
    }
    return(
            <div className="ValidationComponent">
                {validation}
            </div>
            );
};

export default validationComponent;
