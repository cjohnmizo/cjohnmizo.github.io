declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';
    export interface IconProps extends SVGProps<SVGSVGElement> {
        size?: string | number;
        absoluteStrokeWidth?: boolean;
    }
    export type Icon = FC<IconProps>;
    export const Github: Icon;
    export const Linkedin: Icon;
    export const Mail: Icon;
    export const ArrowDown: Icon;
    export const Twitter: Icon;
    export const Heart: Icon;
    export const Menu: Icon;
    export const X: Icon;
    export const Code2: Icon;
    export const MapPin: Icon;
    export const Phone: Icon;
    export const Send: Icon;
    export const ExternalLink: Icon;
    export const Facebook: Icon;
    export const Instagram: Icon;
    // Generic export for any other icon

}
