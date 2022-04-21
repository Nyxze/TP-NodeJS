import React from 'react';

function Folder({ folder }) {



    return (


        <div>
           <pre>{JSON.stringify(folder,null,2)}</pre>

        </div>
    )
}


export default Folder;