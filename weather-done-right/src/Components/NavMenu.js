import React from 'react'
import { Link } from "react-router-dom"

function NavMenu(props) {
    return (
        <div>
            <div className="font-bold py-3 text-center">
                Weather Done Right
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block text-center"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/weather" 
                        className="text-blue-500 py-3 border-b block text-center"
                        onClick={props.closeMenu}
                        >
                            Weather
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block text-center"
                        onClick={props.closeMenu}
                        >
                            About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu