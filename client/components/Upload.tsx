import * as React from 'react';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const Uploader = ({ onUpload }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    onUpload(files);
  }, [files]);

  const beforeUpload = (file) => {
    setFiles((prevFiles) => [...prevFiles, file]);
    return false;
  };

  return (
    <Upload.Dragger
      style={{ marginTop: '2rem' }}
      name="file"
      multiple={true}
      accept=".pdf"
      fileList={files}
      beforeUpload={beforeUpload}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Please Upload a copy of the CR</p>
      {/*<p className="ant-upload-hint">*/}
      {/*  Support for a single or bulk upload. Strictly prohibit from uploading*/}
      {/*  company data or other band files*/}
      {/*</p>*/}
    </Upload.Dragger>
  );
};

export default Uploader;
