import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function CreateNewFolder({ id, setSubmitted }) {

    let URL_API = "http://localhost:3000/folder/new";
    const { register, handleSubmit, formState, reset } = useForm();
    const { isSubmiting } = formState
    const onSubmit = async (data) => {

        try {

            data.userId = 1
            data.parentId = id
            await axios.post(URL_API, data)
            reset()
            setSubmitted(true);

        } catch (err) {
            console.log(err)
        }


    }

    return (
        <form onSubmit={
            handleSubmit(onSubmit)}
        >
            <input type="text" placeholder="Folder Name" {...register("folderName", { required: true })} />
            <input type="submit" disabled={isSubmiting} value="Create new folder" />
        </form>
    );
}