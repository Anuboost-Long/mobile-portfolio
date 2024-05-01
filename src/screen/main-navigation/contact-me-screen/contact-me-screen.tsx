import {
  Envelope,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone
} from "phosphor-react-native"
import React from "react"
import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Button from "@/components/button/button"
import Container from "@/components/common/container"
import SizedBox from "@/components/common/sizedbox"
import Logo from "@/components/logo/Logo"
import { Color } from "@/constants/color-constant"
import { Dimension } from "@/constants/dimension"
import { FontConstant } from "@/constants/font-constant"
import { GlobalStyle } from "@/utils/globalstyle"

export default function ContactMeScreen() {
  const openLink = (link: string) => {
    Linking.openURL(link)
  }
  return (
    <Container additionalHeight={60} backgroundColor={Color.BLACK}>
      <SizedBox height={moderateScale(30)} />
      <View style={styles.container}>
        <Logo width={moderateScale(150)} />
        <SizedBox height={moderateScale(20)} />
        <View style={styles.contactContainer}>
          <Text style={styles.labelText}>You can contact me via</Text>
          <SizedBox height={moderateScale(20)} />
          <Button
            containerStyle={styles.button}
            textStyle={{ color: Color.WHITE }}
            onPress={() => openLink(`tel:+855969720720`)}
            label="+855 969 720 720"
            icon={<Phone size={moderateScale(20)} color={Color.WHITE} />}
          />
          <SizedBox height={moderateScale(10)} />
          <Button
            containerStyle={styles.button}
            textStyle={{ color: Color.WHITE }}
            onPress={() => openLink(`tel:+855969720720`)}
            label="+855 17 829 861"
            icon={<Phone size={moderateScale(20)} color={Color.WHITE} />}
          />
          <SizedBox height={moderateScale(10)} />
          <Button
            containerStyle={styles.button}
            textStyle={{ color: Color.WHITE }}
            onPress={() => openLink(`mailto:kimlongly57@gmail.com`)}
            label="kimlongly57@gmail.com"
            icon={<Envelope size={moderateScale(20)} color={Color.WHITE} />}
          />
          <SizedBox height={moderateScale(10)} />
          <Button
            onPress={() =>
              openLink("https://www.linkedin.com/in/kimlong-ly-b12116230/")
            }
            label="Kimlongly"
            containerStyle={styles.button}
            textStyle={{ color: Color.WHITE }}
            icon={<LinkedinLogo size={moderateScale(20)} color={Color.WHITE} />}
          />
          <SizedBox height={moderateScale(10)} />
        </View>
        <SizedBox height={moderateScale(10)} />
        <View style={GlobalStyle.rowCenter}>
          <TouchableOpacity style={styles.socialContainer}>
            <FacebookLogo
              color={Color.BLACK}
              size={moderateScale(25)}
              weight="regular"
            />
          </TouchableOpacity>
          <SizedBox width={moderateScale(10)} />
          <TouchableOpacity
            style={styles.socialContainer}
            onPress={() =>
              openLink(
                "https://www.instagram.com/anuboostrn_?igsh=NWhiaHI4NnU5ejBk&utm_source=qr"
              )
            }
          >
            <InstagramLogo
              color={Color.BLACK}
              size={moderateScale(25)}
              weight="regular"
            />
          </TouchableOpacity>
          <SizedBox width={moderateScale(10)} />
          <TouchableOpacity style={styles.socialContainer}>
            <GithubLogo
              color={Color.BLACK}
              size={moderateScale(25)}
              weight="regular"
            />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  contactContainer: {
    width: Dimension.ScreenWidth - moderateScale(20),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: Color.WHITE
  },
  sectionLabel: {
    color: Color.BLACK,
    fontSize: moderateScale(14),
    fontFamily: FontConstant.SEMIBOLD
  },
  labelText: {
    color: Color.WHITE,
    fontSize: moderateScale(16),
    fontFamily: FontConstant.BOLD,
    textAlign: "center"
  },
  button: {
    backgroundColor: Color.BLACK,
    borderWidth: 1,
    borderColor: Color.WHITE,
    height: moderateScale(40)
  },
  socialContainer: {
    backgroundColor: Color.WHITE,
    borderRadius: moderateScale(100),
    padding: moderateScale(5)
  }
})
