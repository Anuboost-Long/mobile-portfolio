import { List } from "phosphor-react-native";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

import { ImageAsset } from "@/assets/image-asset";
import { Color } from "@/constants/color-constant";
import { Dimension } from "@/constants/dimension";
import { navigationOperation } from "@/utils/navigation";

import SizedBox from "../common/sizedbox";
import Logo from "../logo/Logo";

export default function HomeHeader() {
  const openDrawer = () => {
    navigationOperation.openDrawer();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{ width: moderateScale(30) }}
          onPress={openDrawer}
        >
          <List color={Color.WHITE} size={moderateScale(25)} />
        </TouchableOpacity>
        <Logo width={moderateScale(30)} />
        <TouchableOpacity style={styles.profile}>
          <Image source={ImageAsset.Me} style={styles.profile} />
        </TouchableOpacity>
      </View>
      <SizedBox height={moderateScale(10)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.BACKDROP,
    position: "absolute",
  },
  innerContainer: {
    backgroundColor: Color.BLACK,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimension.ScreenWidth,
    paddingHorizontal: moderateScale(20),
    height: moderateScale(50),
    ...Platform.select({
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  profile: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(20),
  },
});
