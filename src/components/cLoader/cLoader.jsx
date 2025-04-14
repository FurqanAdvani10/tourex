import React from 'react'
import { Spin } from 'antd';
import './loader.css'
import { LoadingOutlined } from '@ant-design/icons';
import { HashLoader } from 'react-spinners';

const CLoader = () => {
  return (
    <div className="loading-spinner">
      <div className="loader-main-container">
        <HashLoader color='#bb9166' />
      </div>
    </div>
  )
}

export default CLoader
