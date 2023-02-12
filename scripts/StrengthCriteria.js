// 'StrengthCriteria' as a functional component to render the list of criteria for analyzing a strong password
// DONE 5: Styled StrengthCriteria component using styles written in this file (inline styling)
import React from 'react';

let criteriaContainerStyle = {
    marginTop: 35,
    textAlign: 'left'
}

let criterionStyle = {
    color: '#aaa',
	fontSize: 15
}

let iconStyle = {
    padding: '2px 5px 5px 2px'
}

const StrengthCriteria = function () {
    return (
        <div style={criteriaContainerStyle}>
            <span id='checkCharLength' style={criterionStyle}>
                <i className="fa fa-times" style={iconStyle} aria-hidden="true"></i>
                Minimum 8 characters long
            </span><br />
            <span id='checkCapitalLetter' style={criterionStyle}>
                <i className="fa fa-times" style={iconStyle} aria-hidden="true"></i>
                Atleast 1 capital letter
            </span><br />
            <span id='checkNumber' style={criterionStyle}>
                <i className="fa fa-times" style={iconStyle} aria-hidden="true"></i>
                Atleast 1 number
            </span><br />
            <span id='checkSpecialChar' style={criterionStyle}>
                <i className="fa fa-times" style={iconStyle} aria-hidden="true"></i>
                Atleast 1 special character
            </span><br />
        </div>
    );
}

export default StrengthCriteria;