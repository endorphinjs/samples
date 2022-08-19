/// <reference types="vite/client" />

declare module "*.html" {
    const component: import('endorphin').ComponentDefinition;
    export = component;
}

declare module "*.end" {
    const component: import('endorphin').ComponentDefinition;
    export = component;
}