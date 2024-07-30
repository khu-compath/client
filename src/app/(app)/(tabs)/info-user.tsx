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
      <Text preset="c1" text="당신이 몰랐던 캠퍼스 라이프" />
      <Text preset="c2" text="당신이 몰랐던 캠퍼스 라이프" />
      <Text preset="c3" text="당신이 몰랐던 캠퍼스 라이프" />
      <Text preset="c4" text="당신이 몰랐던 캠퍼스 라이프" />
      <Text preset="c5" text="당신이 몰랐던 캠퍼스 라이프" />
      <Text preset="c6" text="당신이 몰랐던 캠퍼스 라이프" />
      <Text preset="c7" text="당신이 몰랐던 캠퍼스 라이프" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
