/// <reference types="react" />

declare module 'shell-mfe/react-router-dom' {
  import * as reactRouterDOM from '@types/react-router-dom'

  export function Routes(): Element[]

  export = reactRouterDOM
}
