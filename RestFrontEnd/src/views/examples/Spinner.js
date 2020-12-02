import React from 'react';
import spinner from '../../assets/img/spinner.gif';
export default () => {
    return (
        <div>
            <img
                src={spinner}
                alt="Loading...."
                style={{ width: "100px", height: "100px", margin: "20px auto", display: "block" }}
            />
        </div>
    )
}