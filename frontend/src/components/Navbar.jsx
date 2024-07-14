import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import SearchBar from "./SearchBar";
import ProfileInfo from "./cards/ProfileInfo";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchBar, setShowSearchBar] = useState(false);
    const navigate = useNavigate();
    const navbarRef = useRef(null);

    const onLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleSearch = () => {
        if (searchQuery) onSearchNote(searchQuery);
        else handleClearSearch();
    };

    const onClearSearch = () => {
        setSearchQuery("");
        handleClearSearch();
    };

    const toggleSearchBar = () => {
        setShowSearchBar(true);
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setShowSearchBar(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={navbarRef} className="bg-white h-16 flex items-center justify-between px-4 py-2 drop-shadow relative">
            {!showSearchBar && (
                <h2 className="site-name flex flex-row items-center text-lg sm:text-xl font-medium text-black py-2">
                    <img width="40" height="40" src="https://img.icons8.com/clouds/200/apple-notes.png" alt="apple-notes" /> Notes
                </h2>
            )}
            {showSearchBar ? (
                <div className="absolute left-0 right-0 mx-auto flex justify-center">
                    <SearchBar
                        value={searchQuery}
                        onChange={({ target }) => {
                            setSearchQuery(target.value);
                            handleSearch();
                        }}
                        onClearSearch={onClearSearch}
                        handleSearch={handleSearch}
                    />
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    userInfo && <MdSearch className="text-xl cursor-pointer" onClick={toggleSearchBar} />
                    {userInfo && (
                        <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
