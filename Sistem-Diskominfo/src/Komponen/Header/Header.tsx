import React, { ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosNotificationsOutline, IoIosSearch } from 'react-icons/io';
import './Header.css';
import Button from '../Button/Button';
import Input from '../Input/input';

const Header: React.FC = () => {
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const handleNotificationClick = () => {
        console.log("Notification button clicked");
    };

    const navigate = useNavigate();

    const handleAdminProfileClick = () => {
        navigate("/admin-profile");
    };

    const handleSearchClick = () => {
        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        const event = {
            target: { value: searchInput ? searchInput.value : '' }
        } as ChangeEvent<HTMLInputElement>;
        handleSearch(event);
    };    
    
    return (
        <div className="header">
            <div className="search-container">
                <Button className="search-button" onClick={handleSearchClick}>
                    <IoIosSearch />
                </Button>
                <Input className="search-input" type="text" placeholder="Cari sesuatu" onChange={handleSearch} />
            </div>
            
            <div className="notif-profile-container">
    <div className="notif-container">
        <Button className="notif-button" onClick={handleNotificationClick}>
            <IoIosNotificationsOutline />
        </Button>
    </div>
    <div className="profile-container">
        <Link to="/admin-profile">
            <img className="avatar" src="/image/Admin.jpeg" alt="Avatar" onClick={handleAdminProfileClick} />
        </Link>
    </div>
</div>

            </div>
    );    
}

export default Header;
