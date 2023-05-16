export interface ButtonProps {
    type?: 'default' | 'ultraWide' | 'rounded';
    color?: 'default' | 'red' | 'gray' | 'gradient' | 'transparent'| 'purple';
    svg?: React.ReactElement;
    title?: Array<string> | undefined;
    onClick?: () => void;
};

export interface TileProps {
    title: string;
    svg: React.ReactElement;
    onClick?: () => void;
    hooverEffect?: 'on' | 'off';
};

export interface CardProps {
    type: 'small' | 'big' | 'reit';
    title?: string;
    raitingKP?: number;
    photoUrl?: string;
    role?: string;
    onClick?: () => void;
};

export interface QualityTagProps {
    quality: 'FullHD' | 'HD' | '1080' | '720'
};

