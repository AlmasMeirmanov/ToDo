import React, { useState } from "react"
import { useItems } from "../hooks"

export default props => {
  const { items, add, del, toggle } = useItems()
  const [item, setItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    add(item)
    setItem("")
  }
  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <input
          className="type"
          type="text"
          onChange={e => setItem(e.target.value)}
          placeholder="What needs to be done?"
          value={item}
        />
      </form>
      <ul>
        {items.map(item => (
          <li
            key={"item" + item.id}
            className={item.status === "completed" ? "completed" : ""}
            onClick={e => toggle(item.id)}
          >
            <input type="checkbox" />
            {item.text} <button onClick={e => del(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
