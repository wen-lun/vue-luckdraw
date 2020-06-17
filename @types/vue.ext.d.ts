import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        beforeCreate(): any
        created(): any
        beforeMount(): any
        mounted(): any
        beforeDestroy(): any
        destroyed(): any
        beforeUpdate(): any
        updated(): any
        activated(): any
        deactivated(): any
        render?: (h?: CreateElement) => void;
        errorCaptured(err?: Error, vm?: Vue, info?: string): any

    }
}
