'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './style.module.css';

const Upload = () => {
    const fileInputRef = useRef(null);
    // const [image, setImage] = useState([]);

    const selectFile = () => {
        fileInputRef.current.click();
    };

    const dropFile = async (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            let formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append("images", files[i]);
            }

            // for (let i = 0; i < files.length; i++) {
            //     setImage((prev) => [
            //         ...prev,
            //         {
            //             title: files[i].name,
            //             url: uploaded.data.imageUrls[i],
            //         },
            //     ]);
            // }
        }
    };

    const onDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
    };

    const onDrop = async (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            let formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append("images", files[i]);
            }
            // const uploaded = await uploadImg(formData);
            // console.log("uploaded: ", uploaded.data.imageUrls);

            // for (let i = 0; i < files.length; i++) {
            //     setImage((prev) => [
            //         ...prev,
            //         {
            //             title: files[i].name,
            //             url: uploaded.data.imageUrls[i],
            //         },
            //     ]);
            // }
        }
    };

    return (
        // <div
        //     className={styles.dragBox}
        //     onClick={selectFile}
        //     style={{ cursor: "pointer" }}
        //     onDragOver={onDragOver}
        //     onDrop={onDrop}
        // >
        //     <input
        //         type="file"
        //         accept=".png, .jpg, .jpeg"
        //         multiple
        //         style={{ display: "none" }}
        //         ref={fileInputRef}
        //         onChange={dropFile}
        //     />
        //     {/* <Image height="60" width="60" alt="dragnDropIcon" src={"https} /> */}
        //     <p variant="span" style={{ fontSize: "23px" }}>
        //         Drag & Drop
        //     </p>
        // </div>


        
<div class="flex justify-center w-full">
    <label
        class="flex justify-center w-full h-32 px-4 transition bg-black border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span class="font-medium text-gray-600">
                Drop files to Attach, or
                <span class="text-blue-600 underline">browse</span>
            </span>
        </span>
        <input type="file" name="file_upload" class="hidden"></input>
    </label>
</div>
    )
}

export default Upload
