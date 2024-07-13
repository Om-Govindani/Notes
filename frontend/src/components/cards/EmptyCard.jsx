import React from "react";

const EmptyCard = ({isSearch}) => {
    return (
        <div className="flex flex-col items-center justify-center mt-40 opacity-40">
            {isSearch ? <img width="200" height="200" src="https://img.icons8.com/external-filled-outline-perfect-kalash/256/external-not-found-web-development-and-programming-filled-outline-perfect-kalash.png" alt="external-not-found-web-development-and-programming-filled-outline-perfect-kalash"/>:<img width="200" height="200" src="https://img.icons8.com/officel/160/add-property.png" alt="add-property" className="opacity-100"/>}
            <p className="w-1/2 text-md font-medium font-serif text-slate-700 text-center leading-7 mt-5">{isSearch? "Oops , we can't the matching note":"Start creating your first note!<br/> click the 'Add' button to plot down your thoughts , ideas and reminders.<br/>Lets get Started !!"}</p>
        </div>
    )
}

export default EmptyCard;