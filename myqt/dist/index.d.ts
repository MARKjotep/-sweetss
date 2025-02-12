import { SweetSS } from 'sweetss';

declare class Flexed extends SweetSS {
    constructor({ filename }: {
        filename: string;
    });
    colors(...colors: string[]): void;
    root(): void;
    animation(): void;
    animations(): void;
    background(): void;
}

export { Flexed };
