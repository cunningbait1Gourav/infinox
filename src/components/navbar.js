import './navbar.css'

function Navbar(){
    return(
        <div className='nav bet'>
            <div className='logo'>Logo</div>
            <div className='nav'>
                <div className='pad'>Home</div>
                <div className='pad'>About</div>
                <div className='pad'>Products</div>
                <div className='pad'>Services</div>
                <div className='pad'>Gallery</div>
            </div>
        </div>
    )
}

export default Navbar;