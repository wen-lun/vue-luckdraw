import Vue from 'vue';

export function install(vue: typeof Vue): void;

export class LuckDraw extends Vue {
    static name: string;
    static install(vue: typeof Vue): void;
    stop(): void
}
