import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        <div
            className="border rounded bg-white p-4 hover:shadow-xl transition-all ease-in-out sm:p-6 lg:p-8"
            onClick={onEdit}
        >
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <h6 className="text-sm font-medium sm:text-base lg:text-lg">{title}</h6>
                    <span className="text-xs text-slate-500 sm:text-sm">{date}</span>
                </div>
                <MdOutlinePushPin
                    className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onPinNote();
                    }}
                />
            </div>
            <p className="text-xs text-slate-600 mt-2 sm:text-sm lg:text-base">{content?.slice(0, 60)}</p>
            <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-slate-500 sm:text-sm">{tags.map((tag) => ` #${tag} `)}</div>
                <div className="flex items-center gap-2">
                    <MdCreate
                        className="icon-btn hover:text-green-500"
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit();
                        }}
                    />
                    <MdDelete
                        className="icon-btn hover:text-red-500"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
