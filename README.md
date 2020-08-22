# react-test

Minimal React setup, 0 dependencias y arquitectura limpia.

## Dependencias

- `react` - Librería genérica de JavaScript para crear interfaces de usuario.
- `react-dom` - Renderizador de React para el DOM.

## Dependencias de Desarrollo / Bulding

### Webpack

- `webpack` - _task runner_ / _module-bundler_, para producir un archivo de varios, ejecutar tareas, etc.
- `webpack-cli` - Utilidades CLI para manejar `webpack`.
- `webpack-dev-server` - Servidor local para `webpack`, soporta _live-reload_ y _hot module reload_.

### Babel

- `@babel/core` - Transpilador de JavaScript, basado en presets
- `@babel/preset-env` - Presets para ES6 en adelante
- `@babel/preset-react` - Preset especial para JSX
- `@babel/plugin-transform-runtime` - Babel polyfills (para usar async/await syntax)

## Install

`npm install`

## Run

`npm start`

## Build

`npm run build`
