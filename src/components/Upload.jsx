'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './style.module.css';

const Upload = () => {
    const [files, setFiles] = useState([]);

    const handleFile = async (e) => {
        console.log("hi");
        const file = e.target.files;
        setFiles((prev) => [...prev, file[0]])
    };

    const onDrop = async (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files;
        setFiles((prev) => [...prev, file[0]])
    };

    const removeFile = (file) => {
        let updated = files.filter((item) => item.lastModified !== file.lastModified)
        setFiles(updated);
    }

    const openInTab = (file) => {
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank');
    }

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
        //         onChange={handleFile}
        //     />
        //     {/* <Image height="60" width="60" alt="dragnDropIcon" src={"https} /> */}
        //     <p variant="span" style={{ fontSize: "23px" }}>
        //         Drag & Drop
        //     </p>
        // </div>



        <div class="flex flex-col justify-center w-full">
            <label
                onDrop={onDrop}
                class="relative flex justify-center w-full h-32 px-4 transition bg-black border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
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
                <input accept="application/pdf" type="file" name="file_upload" style={{ visibility: 'hidden' }} class="absolute" onChange={handleFile}></input>
            </label>

            <div className='flex flex-col gap-5'>
                {files.map((item) => (
                    <div class="flex flex-row gap-10">
                        <p className='font-medium cursor-pointer' onClick={() => openInTab(item)}>{item.name.slice(0, 9)}</p>
                        <button onClick={() => removeFile(item)} className='font-bold text-red-900 cursor-pointer'>X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Upload
