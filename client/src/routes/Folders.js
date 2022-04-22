import React, { useState, useEffect } from 'react';
import CreateNewFolder from '../component/CreateFolder';
import Folder from '../component/Folder';
import Gallery from '../routes/Gallery';
import Upload from '../routes/Photo/Upload';
import axios from 'axios';

export default function FoldersList() {

    const [foldersData, setFoldersData] = useState([]);
    const [folderId, setFolderId] = useState("");
    const [isSubmitted, setSubmitted] = useState(false);
    let URL_API = "http://localhost:3000/folder/" + folderId;

    const getFoldersData = async () => {
        const { data } = await axios.get(URL_API);
        setFoldersData(data);
    };

    const handleClick = (e) => {
        setFolderId(e.target.id)
    }


    useEffect(() => {
        setSubmitted(false);
        getFoldersData();
    }, [folderId, isSubmitted])


    const createFolders = () => {
        return foldersData.map((folder) => {
            return (
                <div className="col-4" key={folder.id}>
                    <Folder onClick={handleClick} folder={folder} />
                </div>
            )
        })
    }

    const createChildren = () => {


        return foldersData.children.map((children) => {
            return (
                <div className="col-3" key={children.id}>
                    <Folder onClick={handleClick} folder={children} />
                </div>
            )
        })

    }
    const createParent = () => {

        return (
            <div>
                <button onClick={(e) => setFolderId(e.target.id)} id={foldersData.parentId}>Back</button>
            </div>
        )

    }
    const createGallery = () => {
        return (<Gallery photos={foldersData.photos} />)
    }




    console.log(foldersData)
    return (
        <div className="d-flex col-6">
            <CreateNewFolder setSubmitted={setSubmitted} id={foldersData.id} />
            {foldersData.id && <Upload setSubmitted={setSubmitted} folderId={foldersData.id}></Upload>}
            <div className="col-8">
                {createParent()}

                {foldersData.length && createFolders()}
                {foldersData.children && createChildren()}
                {foldersData.photos?.length > 0 && createGallery()}
            </div>
        </div>
    )

}