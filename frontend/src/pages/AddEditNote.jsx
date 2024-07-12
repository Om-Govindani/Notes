import React, { useState } from "react";
import TagInput from "../components/TagInput";
import { MdClose } from "react-icons/md";
import axiosInstance from "../utils/axiosInstance";

const AddEditNote = ({getAllNotes, noteData , type , onClose})=>{
    const [title , setTitle] = useState("")
    const [content , setContent] = useState("")
    const [tags , setTags] = useState([])
    const [error , setError] = useState(null)

    const addNewNote = async ()=>{
        try{
            const response = await axiosInstance.post("/add",{
                title,
                content,
                tags
            })
            if(response.data && response.data.note){
                getAllNotes();
                onClose();
            }
        }catch(error){
            if(error.response && error.response.data && error.response.data.message)
                setError(error.response.data.message);
        }
    }
    const editNote = async ()=>{}
    

    const handleAddNote = ()=>{
        if(!title)
        {
            setError("Please Enter Title");
            return;
        }
        if(!content)
        {
            setError("Please Enter Content")
            return;
        }
        setError("");
        if (type=="edit")
        {
            editNote();
        }else addNewNote();
    }
    return (<div className="relative">
        <button className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50" onClick={onClose}>
            <MdClose className="text-xl text-slate-400"/>
        </button>
        <div className="flex flex-col gap-2">
            <label className="input-label">Title</label>
            <input 
            type="text"
            className="text-2xl text-slate-950 outline-none"
            placeholder="Go to Gym at 5"
            value={title}
            onChange={({target})=>setTitle(target.value)}
            />
        </div>
        <div className="flex flex-col gap-2 mt-4">
            <label className="input-label">Content</label>
            <textarea
            type="text"
            className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
            placeholder="Content"
            rows={10}
            value={content}
            onChange={({target})=>setContent(target.value)} 
            />
        </div>
        <div className="mt-3">
            <label className="input-label">Tags</label>
            <TagInput tags={tags} setTags={setTags}/>
        </div>
        {error && <p className="pt-4 text-red-500 text-xs">{error}</p>}
        <button className="btn-primary font-medium mt-5 p-3" onClick={handleAddNote}>
            Add
        </button>
    </div>)
}
export default AddEditNote