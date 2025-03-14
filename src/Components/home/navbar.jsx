export default function Appp() {
    return (
        <div className="App1 flex">
            <img src="https://placehold.co/120x50" alt="logo" />
            
            <ul className="side-bar flex">
                <li className='active'><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            
            <div>
                <button className="btn bt">login</button>
                <button className="btn bt4"><MdOutlineLightMode />
                </button>
            </div>
            
        </div>
    );
}

