import React from 'react';

function Folder({ onClick,folder }) {




    return (
        <div id={"folder_id"+folder.id}>
             <button onClick={onClick} id={folder.id}>{folder.folderName}</button>
        </div>
    )
}


export default Folder;