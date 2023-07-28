export interface ButtonCustomProps extends ExtendButtonBase<ButtonTypeMap<{}, 'button'>> {
    to?: string;
    href?: string;
    onClick?: any;
    classCustom?: any;
    color?: any;
    large?: boolean | any;
    variant?: any;
    children: string;
    startIcon?: IconProp;
    endIcon?: IconProp;
}
