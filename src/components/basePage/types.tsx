import type { TableProps, FormItemProps, FormProps } from 'antd';

export interface ItemProps {
    type: string;
    dataSource?: Record<string, any>[];
    childrenOption?: Record<string, any>;
    itemOption?: FormItemProps;
    customRender?: FormItemProps<any>['children'];
}

export interface BtnProps {
    type?: string;
    dataSource?: Record<string, any>[];
    childrenOption?: Record<string, any>;
    itemOption?: FormItemProps;
}

export interface HeaderProps {
    styles?: React.CSSProperties;
    initialValues?: Record<string, any>;
    itemList?: ItemProps[];
    btnList?: BtnProps[];
    hideSearch?: boolean;
    hideReset?: boolean;
    onSubmit?: (value: object) => void;
    formOption?: FormProps;
}

export interface ContentProps {
    styles?: React.CSSProperties;
    dataSource?: TableProps<any>['dataSource'];
    columns: TableProps<any>['columns'];
}

export interface FooterProps {
    styles?: React.CSSProperties;
}
