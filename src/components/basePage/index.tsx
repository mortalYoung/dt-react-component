import React, { useState } from 'react'
import { HeaderProps } from './types';
import { Card } from 'antd';
import Header from './header';
import Content from './content';

export interface basePageProps {
    header: HeaderProps
}

export default class BasePage extends React.Component<basePageProps, any> {
    render () {
        const {
            header,
            content,
            footer
        } = this.props;
        return (
            <Card className="dtc-basePage">
                {header && <Header {...header} />}

            </Card>
        )
    }
}
