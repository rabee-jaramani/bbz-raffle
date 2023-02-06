import React from 'react'
import { GridLoader } from 'react-spinners';

export default function Loader() {
    return (
        <div className='loader-cont'>
            <h2 style={{ color: '#000' }}>Picking The Winners</h2>
            <GridLoader color="#F0674A" size={40} />
        </div>
    )
}
