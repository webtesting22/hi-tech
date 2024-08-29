import React from "react";
import HitechLogo from "/images/HitechLogo.png";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import "./Navbar.css";
import { Link } from "react-router-dom";

const items1 = [
    {
        key: '1',
        label: (
            <Link to="/Residential" rel="noopener noreferrer">
                Residential
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to="/Commercial" rel="noopener noreferrer">
                Commercial
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link to="/Industrial" rel="noopener noreferrer">
                Industrial
            </Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link to="/Institutional" rel="noopener noreferrer">
                Institutional
            </Link>
        ),
    },
];

const items2 = [
    {
        key: '1',
        label: (
            <Link to="/PlantAndMachinery" rel="noopener noreferrer">
                Plant And Machinery
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to="/FormWork" rel="noopener noreferrer">
            Form work
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link to="/Technology" rel="noopener noreferrer">
                Technology
            </Link>
        ),
    },
];

const items3 = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Who We Are
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#" >
                Our Management
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Our Standards
            </a>
        ),
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Awards & Certifications
            </a>
        ),
    },
    {
        key: '5',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                CSR
            </a>
        ),
    },
    {
        key: '6',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Careers
            </a>
        ),
    },
];

const items4 = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#" >
                Our Clients
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Architects & Consultants
            </a>
        ),
    },
];

const DropdownMenu = ({ items, text }) => (
    <Dropdown
        menu={{ items }} placement="bottom"

    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                {text}
                <DownOutlined style={{ fontSize: "1.2rem" }} />
            </Space>
        </a>
    </Dropdown>
);

const Navbar = () => {
    return (
        <>
           <Link to="/"> <img src={HitechLogo} alt="HitechLogo" style={{ margin: "20px" }} /></Link>
            <section className="navBar" id="navbar">
                <nav className="navigationbar">
                    <DropdownMenu items={items1} text="Projects" />
                    <DropdownMenu items={items2} text="Expertise" />
                    <DropdownMenu items={items3} text="About Us" />
                    <DropdownMenu items={items4} text="Clients" />
                </nav>
            </section>
        </>
    );
}

export default Navbar;
