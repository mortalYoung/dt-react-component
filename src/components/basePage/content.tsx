import React, { useState } from 'react';
import { Table } from 'antd';
import { ContentProps } from './types';

export default function Header (props: ContentProps) {
    const {
        styles, dataSource, columns
    } = props;
    const [ tableData, setData ] = useState<object[]>(dataSource || [])
    return (
        <div
            className="dtc-basePage_content"
            style={styles}
        >
            <Table dataSource={tableData} columns={columns} />
        </div>
    )
}
