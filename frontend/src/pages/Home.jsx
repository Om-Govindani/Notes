import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNote from "./AddEditNote";
import Modal from "react-modal"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
const Home = ()=>{

    const [userInfo , setUserInfo]= useState(null)
    const navigate = useNavigate

    const [openAddEditModal,setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null
    })

    const getUserInfo = async () => {
        try {
            const response = await axiosInstance.get("/getUser");
            if (response.data && response.data.user) {
                setUserInfo(response.data.user);
            }
        }catch(error){
            if (error.response.status === 401) {
                localStorage.clear();
                navigate("/login");
            }
        }
    };

    useEffect(()=>{
        getUserInfo();
        return ()=>{};
    },[]);

    return(
        <>
        <Navbar userInfo={userInfo}/>
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4 mt-8">
            <NoteCard 
                title="Meeting on7th April" 
                date="4th apr 2024" 
                content="meeting on 7th april meeting on 7th april" 
                tags="#meeting" 
                isPinned={true} 
                onEdit={()=>{}}
                onDelete={()=>{}}
                onPinNote={()=>{}}/>
            </div>
        </div>
        
        <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" 
        onClick={()=>{
            setOpenAddEditModal({isShown: true , type: "add" , data:null})
        }}>
            <MdAdd className="text-[32px] text-white"/>
        </button>
        <Modal 
            isOpen={openAddEditModal.isShown}
            onRequestClose = {()=>{}}
            style = {{
                overlay: {
                    backgroundColor: "rgba(0,0,0,0.2)"
                },
            }}
            contentLabel = ""
            className = "w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-y-auto">
                <AddEditNote 
                type={openAddEditModal.type}
                noteData = {openAddEditModal.data}
                onClose={()=>{setOpenAddEditModal({isShown:false , type:"add" , data: null})}}/>
            </Modal>
        </>
    )
}
export default Home 