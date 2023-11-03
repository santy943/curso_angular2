import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './firstModule/01-lesson.ts'
import './firstModule/02-lesson.ts'
import './firstModule/03-lesson.ts'
import './firstModule/04-lesson.ts'
import './firstModule/05-lesson.ts'
import './firstModule/06-lesson.ts'
import './firstModule/07-lesson.ts'
import './firstModule/08-lesson.ts'
import './firstModule/09-lesson.ts'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
