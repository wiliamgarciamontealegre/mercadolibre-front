import React from 'react';
import { Spin } from 'antd';
import "../../Styles/Loading.css"
const Loading = ({ open }: any) => {
    return (
        <>
            {open &&
                <div className='styleLoading'>
                    <Spin />
                </div>
            }
        </>
    )
}

export default Loading;