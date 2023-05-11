export interface HeaderMenuProps {
    id: string;
};

export interface HeaderAdvertiseProps {
    variant: string;
};

export interface HeaderActiveListProps {
    dataArray: Array<number | string> [];
    prefixForId: string;
    onHoverChange: (currentHoverValue: string) => void;
};

export interface HeaderMenuFilmsAllFiltresProps {
    genresFirst:[ { nameRu: string, nameEn: string} ];
    genresSecond:[ { nameRu: string, nameEn: string} ];
    years: number [];
};

export interface HeaderSectionsProps {
    hoverListener: (e: React.DragEvent<HTMLDivElement>) => void;
    leaveListener: (e: React.DragEvent<HTMLDivElement>) => void;
    toggleSearchSection: (e: React.MouseEvent<HTMLDivElement>) => void;
};