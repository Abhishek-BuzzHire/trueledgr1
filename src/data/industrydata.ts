export interface Service {
    slug: string;
    heroSec: {
        title: string;
        head: string;
        info: string[];
        img: string;
    };
    secTwo: {
        head: string;
        info: string;
    };
    threeSec: {
        head: string;
        info: string;
        para: string[];
        points: {
            head: string;
            info: string;
        }[]
    };
    fourSec: {
        head: string;
        card: {
            img: string;
            head: string;
            info: string;
        }[]
    };
    fiveSec: {
        head: string;
        info: string;
        button: string;
    };
    sixSec:
    {
        head: string;
        card: string[];
    }[];
    serviceWork: {
        head: string;
        info: string;
        card: {
            num: string,
            img: string,
            head: string;
            info: string;
        }[]
    };
    readySec: {
        head: string;
        info1: string;
        info2: string;
        button: string;
    };
    faqs: {
        id: string;
        q: string;
        a: string;
    }[]
}