import React, { useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfileInfo from "./cards/ProfileInfo";
const Navbar = ({userInfo , onSearchNote , handleClearSearch})=>{
    const [searchQuery , setSearchQuery] = useState("")
    const navigate = useNavigate()
    const onLogout =()=>{
        localStorage.clear()
        navigate('/login');
    }
    const handleSearch = ()=>{
        if(searchQuery) onSearchNote(searchQuery)
        else handleClearSearch()
    }
    const onClearSearch = ()=>{
        setSearchQuery("")
        handleClearSearch();
    }
    return (
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
            
            <h2 className="flex flex-row items-center text-xl font-medium text-black py-2"><img width="50" height="0" src="https://img.icons8.com/clouds/200/apple-notes.png" alt="apple-notes"/> Notes</h2>
            <SearchBar value={searchQuery} onChange={({target})=>{
                setSearchQuery(target.value);
                handleSearch()
            }} onClearSearch={onClearSearch} handleSearch={handleSearch}/>
            <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
        </div>
    )
}

export default Navbar