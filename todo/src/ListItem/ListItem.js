import React from "react";

import "./ListItem.css";

const listitem = (props) => {
    return (
        <div id="listitem">
            <p>{props.name}</p>
            <div>
                <input
                    type="checkbox"
                    checked={props.status}
                    // onChange={console.log('onchange')}
                    onClick={() => props.check(props.id)}
                />
                <i className="fa fa-trash w3-large" onClick={() => props.delete(props.id)}></i>
            </div>
        </div>
    );
};

export default listitem;
