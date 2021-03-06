import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div 
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '90vh'
                }}
            >
                <h1>Home</h1>
            </div>
        </>
    )
}

export default Home