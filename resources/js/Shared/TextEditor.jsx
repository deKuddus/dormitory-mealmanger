import React from "react";
import ReactQuill from "react-quill";

const TextEditor = ({value,name,onChangeHandler,label=null}) =>{
    return (
        <div className="flex flex-col">
            {label && <label className="mb-3 block text-black dark:text-white">{label}</label>}
        <ReactQuill
            className="h-48 pr-6 mb-12 w-full"
            theme="snow"
            value={value}
            onChange={(e) => onChangeHandler(name, e)}
        />
        </div>
    );
}

export default TextEditor;
