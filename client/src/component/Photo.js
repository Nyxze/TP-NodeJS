import React from 'react';
import Image from 'react-bootstrap/Image'

function Photo({ photo }) {


    const URL = "http://localhost:3000/images/";
    return (
        <Image
            src={URL + photo.uploadedPhotoName}
            rounded
            fluid
            className="col-2"
        />



    )
}


export default Photo;