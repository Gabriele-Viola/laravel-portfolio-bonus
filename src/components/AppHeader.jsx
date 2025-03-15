import { NavLink } from "react-router-dom"
export default function AppHeader() {
    return (
        <header className=" bg-success py-2">
            <div className="container d-flex justify-content-between">

                <div className="left-menu">

                    <NavLink className='text-decoration-none text-light'>
                        <span>LOGO</span>
                    </NavLink>

                </div>
                <div className="right-menu text-decoration-none text-light">
                    <NavLink className='text-decoration-none text-light ms-5'>
                        <span>Home</span>
                    </NavLink>
                    <NavLink className='text-decoration-none text-light ms-5'>
                        <span>About</span>
                    </NavLink>
                    <NavLink className='text-decoration-none text-light ms-5'>
                        <span>Contact</span>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}