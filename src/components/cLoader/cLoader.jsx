import React from 'react'
import { Spin } from 'antd';
import './loader.css'
import { LoadingOutlined } from '@ant-design/icons';
import { HashLoader } from 'react-spinners';

const CLoader = () => {
  return (
    <div className="loading-spinner">
      {/* You can also use a spinner here */}
      <HashLoader color='#560ce3'/>
      {/* <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} /> */}
    </div>
  )
}

export default CLoader
