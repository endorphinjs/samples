# Примеры шаблонов для создания проектов на [EndorphinJS](https://github.com/endorphinjs/endorphin)

В этом репозитории содержатся шаблоны проектов для быстрого старта приложений на [EndorphinJS](https://github.com/endorphinjs/endorphin):

* На данный момент сборка проекта работает только через [Rollup](https://rollupjs.org/) с помощью плагина [rollup-plugin-endorphin](https://github.com/endorphinjs/rollup-plugin-endorphin). Но сам компилятор EndorphinJS не связан с системой сборки, можно создать плагины с другим системам сборки типа Webpack, Parcel и т.д.
* Сам EndorphinJS представляет из себя один пакет [endorphin](https://www.npmjs.com/package/endorphin), который может устанавливаться как dev-зависимость и содержит в себе и рантайм, и компилятор.

## Примеры

* [01-basic](./01-basic/) — настройка для самого базового проекта, который использует CSS для стилей и JS для поведения компонента. 
* [02-preprocess](./02-preprocess/) – настройка проекта, использующего [TypeScript](https://www.typescriptlang.org) для поведения компонента, [SCSS](https://sass-lang.com) в качестве препроцессора для стилей и [Autoprefixer](https://github.com/postcss/autoprefixer) в качестве пост-процессора финального CSS-бандла.
* [03-store](./03-store/) - настройка базового проекта с препроцессорами, ts-линтером и примером использования встроенного хранилища `Store`.
