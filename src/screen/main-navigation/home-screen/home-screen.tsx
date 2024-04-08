import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { IconAsset } from "@/assets/icon-assets";
import Container from "@/components/common/container";
import SizedBox from "@/components/common/sizedbox";
import { Color } from "@/constants/color-constant";
import { Dimension } from "@/constants/dimension";
import { FontConstant } from "@/constants/font-constant";
import useTopicsItem, { TopicsProp } from "@/hooks/useTopicsItem";
import { navigationOperation, NavigationParam } from "@/utils/navigation";

export default function HomeScreen() {
  const { topics } = useTopicsItem();

  const navigate = (navigation: NavigationParam) => {
    navigationOperation.navigate(navigation);
  };

  const renderTopics = (item: TopicsProp) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.topicItem}
        onPress={() => navigate(item.navigation)}
      >
        <Icon size={moderateScale(20)} color={Color.BLACK} />
        <SizedBox width={moderateScale(5)} />
        <Text style={styles.topicText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container
      backgroundColor={Color.BLACK}
      additionalHeight={moderateScale(65)}
    >
      <Text style={styles.headerText}>Introduction</Text>
      <SizedBox height={moderateScale(20)} />
      <View style={styles.icon}>
        <IconAsset.ReactNative
          height={Dimension.ScreenWidth / 2}
          width={Dimension.ScreenWidth}
        />
      </View>
      <SizedBox height={moderateScale(20)} />
      <Text style={styles.greetingText}>Greetings</Text>
      <Text style={styles.description}>
        My name is Ly kimlong, I am a react native developer. I created this app
        so you can explore and experience all the project that I have made
        through react native, and hopefully these experiences would be enough to
        convice you to contact and hire me :D.
      </Text>
      <SizedBox height={moderateScale(20)} />
      <Text style={styles.description}>
        You can scroll to see through the summaries or skip to these topics to
        see full detail
      </Text>
      <SizedBox height={moderateScale(10)} />
      <View style={styles.topicContainer}>
        {topics.map((item) => renderTopics(item))}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    alignSelf: "center",
  },
  introContainer: {
    borderWidth: 5,
    borderColor: Color.WHITE,
    width: Dimension.ScreenWidth - moderateScale(120),
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    alignSelf: "center",
  },
  headerText: {
    fontFamily: FontConstant.STYLE,
    fontSize: moderateScale(26),
    color: Color.WHITE,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  greetingText: {
    fontFamily: FontConstant.BOLD,
    fontSize: moderateScale(24),
    color: Color.WHITE,
    textAlign: "center",
  },
  description: {
    fontFamily: FontConstant.MEDIUM,
    fontSize: moderateScale(14),
    color: Color.WHITE,
    textAlign: "center",
    alignSelf: "center",
    width: "90%",
  },
  topicContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  topicItem: {
    backgroundColor: Color.GRAYDIM,
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    marginHorizontal: moderateScale(10),
    marginBottom: moderateScale(5),
    flexDirection: "row",
    alignItems: "center",
  },
  topicText: {
    fontSize: moderateScale(14),
    color: Color.BLACK,
    fontFamily: FontConstant.SEMIBOLD,
  },
});
