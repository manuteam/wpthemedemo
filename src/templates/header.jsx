import * as React from 'react';
import {NavLink} from 'react-router-dom';
import headerData from './template-parts/jsonData/header.json'

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            headerData,
            linkList: headerData.linkList,
            logo: headerData.logo
        }
    }



    render() {

        const { logo, linkList } = this.state

        //  Check and return submenu items for each parent menu item
        let submenuListGenerate = (subLinksArray) => {
            if ( subLinksArray.length ) {
                return (
                    <ul className="submenu">
                        {subLinksArray.map(item => (
                            <li>
                                <NavLink to={item.linkTo} className="sub-menu-item">
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    )
            } else return false
        }



        return (
            <header id="topnav" className="defaultscroll sticky">
                <div className="container">
                    <NavLink to="/" className="logo">
                        {logo.map(item => (
                            <img src={rootSettings.URL.build + `${item.image}`} height="24" className={item.class} alt=""/>
                        ))}
                    </NavLink>

                    <div className="menu-extras">
                        <div className="menu-item">
                            <a className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div id="navigation">
                        <ul className="navigation-menu">

                            {linkList.map(item => (
                                <li className={item.subLinks.length ? `has-submenu parent-menu-item` : ''}>
                                    <NavLink to={item.linkTo} className="sub-menu-item">
                                        {item.title}
                                    </NavLink>
                                    {item.subLinks.length ? <span className="menu-arrow"></span> : ''}
                                    {submenuListGenerate(item.subLinks)}
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;