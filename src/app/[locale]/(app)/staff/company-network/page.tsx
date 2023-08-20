"use client"
import React, { useState } from 'react';
import { AiOutlinePlusSquare, AiOutlineUser, AiOutlineSearch, AiOutlineMail, AiOutlineCompass, AiOutlineTable } from 'react-icons/ai';
import ReactQuill from 'react-quill'; // Import the react-quill component
import 'react-quill/dist/quill.snow.css'; // Import the styles for the react-quill component
import { Modal, Upload, Button, Layout, Space } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
const { Sider, Content } = Layout;

const siderStyle = {
  backgroundColor: '#fff', // Background color of the sidebar
  padding: '20px', // Add padding to the sidebar items
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const App: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([ /* your initial file list here */]);
  const [editorContent, setEditorContent] = useState('');

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handlePost = () => {
    // Handle posting the content and uploaded files
    console.log('Editor Content:', editorContent);
    console.log('Uploaded Files:', fileList);
    // Reset editor content and file list
    setEditorContent('');
    setFileList([]);
  };

  const uploadButton = (
    <div>
      <AiOutlinePlusSquare />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <Sider style={siderStyle}>
            <p><AiOutlineUser /> Profile</p>
            <p><AiOutlineSearch /> Search</p>
            <p><AiOutlineMail /> Feed</p>
            <p><AiOutlineCompass /> Explores</p>
            <p><AiOutlineTable /> Spaces</p>
          </Sider>
          <Layout>
            <Content>
              <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tighter">
                  Company Network
                </h1>
                <ReactQuill // Add the ReactQuill component here
                  value={editorContent}
                  onChange={(content) => setEditorContent(content)}
                />
                {/* Other content */}
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  accept="*"
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Button type="primary" onClick={handlePost}>
                  Post
                </Button>
                <Modal visible={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Space>
    </>
  );
};
export default App;
