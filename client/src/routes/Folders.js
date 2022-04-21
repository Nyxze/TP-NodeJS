import React, { useState, useEffect } from 'react';
import Folder from '../component/Folder';
import axios from 'axios';

export default function Folders() {

    const URL_API = "http://localhost:3000/folder/";
    const [foldersData, setFoldersData] = useState([])

    const getFoldersData = async () => {
        const { data } = await axios.get(URL_API);
        setFoldersData(data);
    };
    useEffect(() => {
        getFoldersData();
    }, [])

    const createFolderList = () =>{
        return foldersData.map((folder)=>{
            return (
                <Folder folderName={folder.folderName} folder={folder} key={folder.id}/>
            )
        })
        
    }

    return (
        <div>
            {createFolderList()}
        </div>
    )
}