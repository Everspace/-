import random from "lodash/random"
import range from "lodash/range"
import uniq from "lodash/uniq"

import { useState } from "react"
import './App.css'

const beingTable = [
  "⚓🍎💰🍺🔔🐦💣🦴📕🧹🪲🍭🥕🐈🧪♞🍗🎞☁☕🧭🤠👑🐕🚪🌎🥚🌲👁💎🪶🐟🏴🔥🍴⚙",
  "🎁🥛🎸💨👻🔨⛓👷🎧❤⏳🏠🧠✋💀🦷🍦🔑🛡🍃🍋💡🌩💧🧲🔍🧤💵🌙🎵🔒🖌✂🎲📎🛩",
  "📜🐾✏🌶🧩☢👓📏⚖👣🦐🍞🍕❄⚽🧦🕷🥄⭐💼☀💉📞🎭🌡🌪🗑🏆👕☂🌊🧀🏋🍾🔧",
  // These emoji in the pile cause problems on Windows in browser
  "🪲", // Beetle
  "🪛", // Screwdriver
].flatMap(s=> Array.from(s))

const doingTable = Array.from("🚫🗨✔🎯➗⬇=❕…⏩>←📈♾≠⏸%📊▶±❔♻⏪♂♀⋮√〰∴🔄🔀↔⬆")
.concat([
  "(🔺🟩🔵)", "([ ][ ])", "(←↕→)", "(>|<)"
])

const randomIndex = <T extends unknown>(table: T[]) => random(1, table.length) -1

const pick = (table: string[]) => {
  return table.at(randomIndex(table)) as string
}

const uniqFill = <T extends unknown>(size: number, func: () => T) => {
  let arr: T[] = []
  while(arr.length < size) {
    arr.push(...range(0, size - arr.length).map(_ => func()))
    arr = uniq(arr)
  }
  return arr
}

const makeBeing = () => uniqFill(5, () => pick(beingTable))
const makeDoing = () => uniqFill(3, () => pick(doingTable) + " " + pick(beingTable))

function App() {
  const [being, setBeing] = useState(makeBeing())
  const [doing, setDoing] = useState(makeDoing())
  const newCharacter = () => {
    setBeing(makeBeing())
    setDoing(makeDoing())
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">🔄🐦</div>
        <ul>
          <li>{being.map(s=><span key={s}>{s}</span>)}</li>
          {doing.map((arr, i) => <li key={i}>{arr}</li>)}
        </ul>
        <button onClick={newCharacter}>
        🔄❓
        </button>
        <a style={{marginTop: "2em"}} href="https://penguinking.com/rotate-bird/">©🐧👑</a>
      </header>
    </div>
  )
}

export default App;
