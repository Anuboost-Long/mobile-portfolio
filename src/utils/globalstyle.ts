import { Color } from "@/constants/color-constant"

export const globalStyle = {
  paddingHorizontal: (value: number) => {
    return { paddingHorizontal: value }
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backDrop: {
    backgroundColor: Color.BACKDROP,
    flex: 1,
    position: "absolute"
  }
}
