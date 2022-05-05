import React from 'react'
import { HeaderProps, ContentProps, FooterProps } from './types';
import { Card } from 'antd';
import Header from './header';
import Content from './content';

export interface basePageProps {
    header?: HeaderProps,
    content?: ContentProps,
    footer?: FooterProps
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
                { header && <Header {...header} /> }
                { content && <Content {...content} /> }
                {/* { footer && <Footer {...footer} /> } */}
            </Card>
        )
    }
}
