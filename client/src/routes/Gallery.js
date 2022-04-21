import React, { useState, useEffect } from 'react';
import Photo from '../component/Photo';
import axios from 'axios';

export default function Folders() {

    const URL_API = "http://localhost:3000/photo/";
    const [photosData, setPhotosData] = useState([])

    const getFoldersData = async () => {
        const { data } = await axios.get(URL_API);
        setPhotosData(data);
        console.log(data)
    };
    useEffect(() => {
        getFoldersData();
    }, [])


    const createPhotoList = () =>{
        return photosData.map((photo)=>{
            return (
                <Photo photo={photo}  key={photo.id}/>
            )
        })
        
    }

    return (
        <div>
            <pre>{JSON.stringify(photosData,null,2)}</pre>
            {createPhotoList()}
        </div>
    )
}