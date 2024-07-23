import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Text, Screen } from "src/components"
// import { spacing } from "src/theme"
// import { useStores } from "src/models"

export default observer(function InfoUserScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  return (
    <Screen preset="fixed" style={$root} safeAreaEdges={["top"]}>
      <Text text="infoUser" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
