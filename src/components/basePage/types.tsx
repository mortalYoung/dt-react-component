export interface ItemProps {
    type: string;
    dataSource?: object[];
    childrenOption?: object;
    itemOption?: object;
    customRender?: any;
}

export interface BtnProps {
    type?: string;
    dataSource?: object[];
    childrenOption?: object;
    itemOption?: object;
}

export interface HeaderProps {
    styles?: object;
    initialValues?: object;
    itemList?: ItemProps[];
    btnList?: BtnProps[];
    hideSearch?: boolean;
    hideReset?: boolean;
    onSubmit?: (value: object) => void;
    formOption?: object;
}
