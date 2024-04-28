import moment from "moment"
import React from "react"
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import { moderateScale } from "react-native-size-matters"

import { ImageAsset } from "@/assets/image-asset"
import Container from "@/components/common/container"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { Dimension } from "@/constants/dimension"
import { FontConstant } from "@/constants/font-constant"
import { ScreenConstant } from "@/constants/screen-constant"
import useTopicsItem, { HobbieProp } from "@/hooks/useTopicsItem"
import { navigationOperation, NavigationParam } from "@/utils/navigation"

export default function AboutMeScreen() {
  const { hobbie } = useTopicsItem()

  const navigate = (navigation: NavigationParam) => {
    navigationOperation.navigate(navigation)
  }

  const openLink = (link?: string) => {
    Linking.openURL(link ?? "")
  }

  const renderHobbie = (item: HobbieProp) => {
    const Icon = item.icon
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.hobbieItem}
        onPress={() => openLink(item.link)}
      >
        <Icon width={moderateScale(40)} height={moderateScale(40)} />
        <Text style={styles.hobbieText}>{item.label}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <Container
      backgroundColor={Color.BLACK}
      additionalHeight={moderateScale(60)}
    >
      <Image source={ImageAsset.Me} style={styles.profileImage} />
      <SizedBox height={moderateScale(10)} />
      <Text style={styles.description}>
        Hello again, as I have introduced myself my name is (Ly kimlong,{" "}
        {moment().diff(moment("2003-03-20", "YYYY-MM-DD"), "years")}). I am a
        Cambodian developer with a drive to strive and improve to be better as
        an individual and as a working developer.
      </Text>
      <SizedBox height={moderateScale(20)} />
      <Text style={styles.description}>
        <Text style={[styles.description, styles.leadingTopic]}>
          Education:
        </Text>{" "}
        I am a fresh software engineering graduand from a prestige institute
        called{" "}
        <Text style={styles.emphasis}>
          KIT (Kirirom Institute of technology)
        </Text>
        , established at Kirirom mountain.
      </Text>
      <SizedBox height={moderateScale(10)} />
      <TouchableOpacity
        onPress={() => openLink("https://www.facebook.com/KITinstitute")}
      >
        <Image source={ImageAsset.Me} style={styles.profileImage} />
      </TouchableOpacity>
      <SizedBox height={moderateScale(10)} />
      <TouchableOpacity
        onPress={() =>
          navigate({
            screen: ScreenConstant.MainNavigation.EducationBackGroundScreen
          })
        }
      >
        <Text
          style={[styles.description, styles.emphasis, styles.smallDescription]}
        >
          More info of my education background
        </Text>
      </TouchableOpacity>
      <SizedBox height={moderateScale(20)} />
      <Text style={styles.description}>
        <Text style={[styles.description, styles.leadingTopic]}>
          Professional Experience:
        </Text>{" "}
        Currently, I am working as a mobile lead developer specialize in react
        native at a logistic company called{" "}
        <Text style={styles.emphasis}>"Apollo Elogistics"</Text>. A company
        focus on to be the best at providing the best logistic service in
        Cambodia.
      </Text>
      <SizedBox height={moderateScale(10)} />
      <TouchableOpacity
        onPress={() => openLink("https://www.apolloelogistics.com/")}
      >
        <Image source={ImageAsset.Apollo} style={styles.profileImage} />
      </TouchableOpacity>
      <SizedBox height={moderateScale(10)} />
      <TouchableOpacity
        onPress={() =>
          navigate({
            screen: ScreenConstant.MainNavigation.WorkExperienceScreen
          })
        }
      >
        <Text
          style={[styles.description, styles.emphasis, styles.smallDescription]}
        >
          More info of my professional career
        </Text>
      </TouchableOpacity>
      <SizedBox height={moderateScale(20)} />
      <Text style={styles.description}>
        <Text style={[styles.description, styles.leadingTopic]}>
          Interest and hobbies:
        </Text>{" "}
        One of my most favorite thing to do is working on my physique. I love to
        enhance my physical fitness as much as possible, since I always have a
        goal of seeing myself in my peak physical condition. In addtion, I am
        also into e-sport, although I haven't have the time to play any games
        myself, I like to entertain myself by watching e-sport tournament{" "}
        <Text style={styles.emphasis}>(valorant to be exact)</Text> and
        speedruns of games just to improve my strategic thinking and appreciate
        people who when through their way to be the best a what they enjoy.
        Recently I also pick back up the interest in{" "}
        <Text style={styles.emphasis}>professional wrestling</Text>.
      </Text>
      <SizedBox height={moderateScale(10)} />
      <View style={styles.hobbieHolder}>
        {hobbie.map((item) => renderHobbie(item))}
      </View>
      <SizedBox height={moderateScale(20)} />
      <Text style={styles.description}>
        <Text style={[styles.description, styles.leadingTopic]}>
          Work Ethics:
        </Text>{" "}
        I am a type of person who love to hone the skill that I learned to the
        point that my brain can think up of a solution to the problem instantly
        using the technology that I am assigned to do. Since I have come a long
        way with react native and is comfortable enough with the tech, I am
        picking up other tech stack to improve my coding arsenal{" "}
        <Text style={styles.emphasis}>(Specifically C# and .NET)</Text> I am
        taking my journey to the desktop application side and also venture to
        backend side as well.{`\n`}Also I love challenges of the work, as long
        as it gives me a new view point in development and improve my skill
        (soft and hard).{" "}
        <Text style={styles.emphasis}>
          I always value those who value my working ethic, my craft and the
          contribution that I brought to the project, money is secondary
          although it should worth the work that I gave to you, but you have to
          respect me as an employee and appreciate my hard work toward your
          project/company, in order for our collaboration to take steps toward
          greatness.
        </Text>
      </Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: FontConstant.STYLE,
    fontSize: moderateScale(26),
    color: Color.WHITE,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  profileImage: {
    alignSelf: "center",
    width: moderateScale(200),
    height: moderateScale(200),
    borderRadius: moderateScale(10)
  },
  description: {
    fontFamily: FontConstant.MEDIUM,
    fontSize: moderateScale(14),
    color: Color.WHITE,
    textAlign: "justify",
    alignSelf: "center",
    width: "90%"
  },
  leadingTopic: {
    fontFamily: FontConstant.BLACK,
    fontSize: moderateScale(16)
  },

  emphasis: {
    fontFamily: FontConstant.BLACK
  },
  smallDescription: {
    textAlign: "center",
    fontSize: moderateScale(12)
  },
  hobbieHolder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  hobbieItem: {
    width: (Dimension.ScreenWidth - moderateScale(70)) / 4,
    height: (Dimension.ScreenWidth - moderateScale(70)) / 4,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: moderateScale(5),
    borderRadius: moderateScale(10),
    backgroundColor: Color.CHARCOAL
  },
  hobbieText: {
    fontFamily: FontConstant.BOLD,
    fontSize: moderateScale(12),
    color: Color.BLACK,
    textAlign: "center",
    alignSelf: "center"
  }
})
