export interface TileProps {
    title:string;
    svg: React.ReactElement;
    onClick?: () => void;
    hooverEffect?: 'on' | 'off';
}