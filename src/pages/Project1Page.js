import React, {useState} from 'react';
import Navbar from '../components/Navbar/index2';
import CookingAppSection from '../components/CookingAppSection';
import Sidebar from '../components/Sidebar/index2';

const Project1Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const sourceCode = "https://github.com/Dund0/FoodApp";
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} sourcecode={sourceCode}/>
            <Navbar toggle={toggle} sourcecode={sourceCode}/>
            <CookingAppSection/>
        </>
    );
};

export default Project1Page
