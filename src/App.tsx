import random from "lodash/random"
import range from "lodash/range"
import { useState } from "react"
import './App.css'

const beingTable = [
  "⚓🍎💰🍺🔔🐦💣🦴📕🧹🐛🍭🥕🐱🧪♟🍗🎞☁☕🧭🤠👑🐶🚪🥚🌲👁💎🐟🚩🔥🍴⚙",
  "🎁🥛🎸💨👻🔨👷🎧♥⌛🏠🧠✋💀🦷🍦🔑🛡🍁🍋💡⚡💧🧲🔍🧤💵🌙🎵🔒🖌✂🎲📎✈",
  "📜🐾✏🌶🧩☢🕶📏⚖🔧👣🦐🍞🍕❄⚽🧦🕷🥄⭐💼☀💉📞🎭🌡🌪🚮🏆👕☂🌊🧀💪🍷",
].flatMap(s=> Array.from(s))

const doingTable = Array.from("🚫🗨✔🎯➗⬇=!…⏩💠💥📈♾±≠⏸%📊▶❓♻⏪♀♂∛🔀🔗⬆💢🛑🔄⚛")

const pick = (table: string[]) => {
  return table.at(random(1, table.length) -1) as string
}

const makeBeing = () => range(5).map(_ => pick(beingTable))
const makeDoing = () => range(3).map(_ => pick(doingTable) + pick(beingTable))

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
          <li>{being.join("")}</li>
          {doing.map((arr, i) => <li key={i}>{arr}</li>)}
        </ul>
        <button onClick={newCharacter}>
        🔄❓
        </button>
        <a style={{marginTop: "2em"}} href="https://penguinking.com/rotate-bird/">©🐧👑</a>
      </header>
    </div>
  );
}

export default App;
