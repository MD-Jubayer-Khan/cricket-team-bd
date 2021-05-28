import React from 'react';

const Header = () => {
    return ( <
        div className = "sticky-top" >
        <
        nav className = "navbar navbar-expand-lg navbar-dark"
        style = {
            { backgroundColor: 'rgba(0, 0, 0, 0.75)' }
        } >
        <
        div className = "container" >
        <
        a className = "navbar-brand"
        href = "/home" > BANGLADESH CRICKET TEAM < /a> <
        button className = "navbar-toggler"
        type = "button"
        data - bs - toggle = "collapse"
        data - bs - target = "#navbarNav"
        aria - controls = "navbarNav"
        aria - expanded = "false"
        aria - label = "Toggle navigation" >
        <
        span className = "navbar-toggler-icon" > < /span> < /
        button > <
        div className = "collapse navbar-collapse"
        id = "navbarNav" >
        <
        ul className = "navbar-nav ms-auto" >
        <
        li className = "nav-item" >
        <
        a className = "nav-link active"
        aria - current = "page"
        href = "/home" > Home < /a> < /
        li > <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "/about" > About < /a> < /
        li > <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "/players" > Players < /a> < /
        li > <
        /ul> < /
        div > <
        /div> < /
        nav > <
        /div>
    );
};

export default Header;