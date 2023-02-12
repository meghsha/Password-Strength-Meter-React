// 'Header' as a functional component to display the heading text
// DONE 2: Styled Header component using styles written in external stylesheet (external styling)
import React from 'react';

const Header = function () {
    return (
        <div className='header-container'>
            <h2 className='heading'>Password Strength Meter</h2>
        </div>
    );
}

export default Header;