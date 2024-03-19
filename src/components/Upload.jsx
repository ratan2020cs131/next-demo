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
        <div
            className={styles.dragBox}
            onClick={selectFile}
            style={{ cursor: "pointer" }}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            <input
                type="file"
                accept=".png, .jpg, .jpeg"
                multiple
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={dropFile}
            />
            {/* <Image height="60" width="60" alt="dragnDropIcon" src={"https} /> */}
            <p variant="span" style={{ fontSize: "23px" }}>
                Drag & Drop
            </p>
        </div>
    )
}

export default Upload
