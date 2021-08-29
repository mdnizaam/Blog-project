/* eslint-disable react-hooks/exhaustive-deps */
import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
 
const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "Welcome to Editor.js Page ",
          "level": 1
        }
       
      },
      {
        "type": "header",
        "data": {
          "text": "Hello My Name is Nizam!",
          "level": 4,
          
        }
       
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Hello My Name is Nizam!",
          "level": 4,
          
        }
       
      },
    ]
  }
}
 
const EDITTOR_HOLDER_ID = 'editorjs';
 
const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
 
  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
  }, []);
 
  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        let content = await this.editorjs.saver.save();
        // Put your logic here to save this data to your DB


        setEditorData(content);
      },
      autofocus: true,
      tools: { 
        header: Header, 
      }, 
    });
  };

  console.log(initEditor);
 
  return (
    <>
      <div id={EDITTOR_HOLDER_ID} className="bg-success"></div>

    </>
  );
}
 
export default Editor;