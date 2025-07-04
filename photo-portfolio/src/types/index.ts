export interface Photo {
    id: string;
    title: string;
    url: string;
    description?: string;
}

export interface GalleryProps {
    photos: Photo[];
}

export interface LayoutProps {
    children: React.ReactNode;
}

export interface NavbarProps {
    title: string;
}

export interface AboutProps {
    content: string;
}