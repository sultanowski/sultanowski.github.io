declare module 'swiper' {
    export interface SwiperOptions {
        modules?: any[];
        direction?: 'horizontal' | 'vertical';
        allowTouchMove?: boolean;
        navigation?: {
            nextEl?: string;
            prevEl?: string;
        };
        slidesPerView?: number;
        effect?: string;
        speed?: number;
        fadeEffect?: {
            crossFade?: boolean;
        };
        controller?: {
            control?: any;
        };
    }

    export default class Swiper {
        constructor(selector: string, options?: SwiperOptions);
        controller: {
            control?: Swiper;
        };
    }
}

declare module 'swiper/modules' {
    export const Navigation: any;
    export const EffectFade: any;
}

declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/effect-fade';