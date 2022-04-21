import React from 'react';

function Photo({ photo }) {



    return (


        <div>
            <img src="/uploads/1650553107553test-photo.jpg"></img>
         {console.log(photo.id)}
        </div>
    )
}


export default Photo;