import React from "react";

export const Alert = (props) => {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong><i className={props.alert.heading}></i>&nbsp;&nbsp;</strong>{props.alert.message}
        </div>
    )
}