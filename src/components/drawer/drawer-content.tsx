import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

import { Color } from "@/constants/color-constant";
import { FontConstant } from "@/constants/font-constant";
import useDrawerItem, { DrawerItemProp } from "@/hooks/useDrawerItem";
import { navigationOperation, NavigationParam } from "@/utils/navigation";

import SizedBox from "../common/sizedbox";
import Logo from "../logo/Logo";

export default function DrawerContent(props: any) {
  const { DrawerItem } = useDrawerItem();
  const { index } = props.state;

  const navigate = (navigation: NavigationParam) => {
    navigationOperation.navigate(navigation);
  };

  const renderDrawer = (item: DrawerItemProp) => {
    const Icon = item.icon;
    const active = item.id === DrawerItem[index].id;
    return (
      <TouchableOpacity
        style={[styles.drawerItem, active && styles.active]}
        key={item.id}
        onPress={() => navigate(item.navigation)}
      >
        <Icon size={moderateScale(25)} color={Color.WHITE} />
        <SizedBox width={moderateScale(10)} />
        <Text style={styles.drawerText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo width={moderateScale(100)} />
      </View>
      <ScrollView>
        <SizedBox height={moderateScale(20)} />
        {DrawerItem.map((item) => renderDrawer(item))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Drawer,
  },
  logoContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: moderateScale(20),
    borderColor: Color.CHARCOAL,
    width: "100%",
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(10),
  },
  active: {
    backgroundColor: Color.CHARCOAL,
  },
  drawerText: {
    color: Color.WHITE,
    fontFamily: FontConstant.BOLD,
    fontWeight: "bold",
    fontSize: moderateScale(14),
  },
});
