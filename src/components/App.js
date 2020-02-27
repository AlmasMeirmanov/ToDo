import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import Items from "./Items"
import { useItems } from "../hooks"

export default props => {
  return (
    <Provider store={store}>
      <div>
        <Items />
      </div>
    </Provider>
  )
}
