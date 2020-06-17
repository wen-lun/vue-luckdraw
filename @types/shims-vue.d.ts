declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module 'konva/lib/Layer' {
    export { Layer } from 'konva/types/Layer';
}

declare module 'konva/lib/Shape' {
    export { Shape } from 'konva/types/Shape';
}

declare module 'konva/lib/shapes/Circle' {
    export { Circle } from 'konva/types/shapes/Circle';
}

declare module 'konva/lib/shapes/Text' {
    export { Text } from 'konva/types/shapes/Text';
}

declare module 'konva/lib/Stage' {
    export { Stage } from 'konva/types/Stage';
}

declare module 'konva/lib/Animation' {
    export { Animation } from 'konva/types/Animation';
}

declare module 'konva/lib/Tween' {
    export { Tween } from 'konva/types/Tween';
}
