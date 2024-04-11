import React from "react"
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet
} from "react-native"

import { Color } from "@/constants/color-constant"

import SizedBox from "./sizedbox"

interface ContainerProp {
  children: JSX.Element[] | JSX.Element
  backgroundColor?: string
  additionalHeight?: number
}

export default function Container({
  children,
  backgroundColor = Color.WHITE,
  additionalHeight = 0
}: Readonly<ContainerProp>) {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.select({
          android: "height",
          ios: "padding"
        })}
      >
        <ScrollView
          keyboardShouldPersistTaps={"handled"}
          contentContainerStyle={styles.flexGrow}
          showsVerticalScrollIndicator={false}
        >
          <SizedBox height={additionalHeight} />
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  },
  flex: {
    flex: 1
  },
  flexGrow: { flexGrow: 1 }
})
