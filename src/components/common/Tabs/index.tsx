import React, { FC, useState } from 'react';
import "./index.css";

interface TabsProps {
    selectedType: number
    setSelectedType: Function
}

const Tabs : FC <TabsProps> = ({selectedType=0, setSelectedType }) => {
    return <div className='tabs-container'>
        <div className={`tab ${selectedType === 1 ? 'selected' : ''}`} onClick={()=>{
            setSelectedType(1)
        }}>
            Streaming
        </div>
        <div className={`tab ${selectedType === 2 ? 'selected' : ''}`} onClick={()=>{
            setSelectedType(2)
        }}>
            On TV
        </div>
    </div>
}

export default Tabs