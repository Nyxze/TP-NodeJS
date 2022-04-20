import React from "react";

const TableRow = ( {data} ) => {
   
    console.log(data);
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.createdAt}</td>
            <td>{data.updatedAt}</td>
        </tr>
    );
};

export default TableRow;