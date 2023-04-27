export interface ButtonProps {
    type?: 'default' | 'ultraWide' | 'rounded';
    color?: 'default' | 'red' | 'gray' | 'gradient' | 'transparent'| 'purple';
    svg?: React.ReactElement;
    title?: Array<string> | undefined;
    onClick?: () => void;
} 

export interface TileProps {
    title:string;
    svg: React.ReactElement;
    onClick?: () => void;
    hooverEffect?: 'on' | 'off';
}