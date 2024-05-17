// "use client";

// import dynamic from "next/dynamic";
// import { useMemo } from "react";

// import "react-quill/dist/quill.snow.css";

// interface EditorProps {
//   onChange: (value: string) => void;
//   value: string;
// };

// export const Editor = ({
//   onChange,
//   value,
// }: EditorProps) => {
//   const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

//   return (
//     <div className="bg-white">
//       <ReactQuill
//         theme="snow"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// };
import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

export const Editor = ({
  onChange,
  value,
}: EditorProps) => {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];

  const handleEditorChange = (newContent: string) => {
    onChange(newContent);
  };

  return (
    <div className="bg-white">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleEditorChange}
        modules={quillModules}
        formats={quillFormats}
      />
    </div>
  );
};
