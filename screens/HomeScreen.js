import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  BackHandler,
  ToastAndroid
} from "react-native";
import { Text, Box, Image, Button } from "native-base";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const HomeScreen = ({ navigation, route }) => {
  const [isFontLoaded] = useFonts(customFonts);
  const [language, setLanguage] = useState("fa-IR");

  const [exitApp, setExitApp] = useState(0);


  // const backAction = () => {
  //   if (navigation.getState().routes[0].name == "Home") {
  //     setTimeout(() => {
  //       setExitApp(0);
  //     }, 2000); // 2 seconds to tap second-time

  //     if (exitApp === 0) {
  //       setExitApp(exitApp + 1);

  //       ToastAndroid.show('to exit app double click', ToastAndroid.SHORT);
  //     } else if (exitApp === 1) {
  //       BackHandler.exitApp();
  //     }
  //     return true;
  //   }
  // };

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //   return () => backHandler.remove();
  // });

  i18n.fallbacks = true;
  i18n.translations = { en, fa };
  i18n.locale = language;

  if (!isFontLoaded) {
    return null;
  }

  const changeToEnglish = () => {
    setLanguage("en-US");
  };

  const changeToFarsi = () => {
    setLanguage("fa-IR");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <Box
        style={[
          styles.title,
          {
            flexDirection: language == "en-US" ? "row" : "row-reverse",
          },
        ]}
      >
        <Text
          style={[
            styles.titleText,
            { fontFamily: language == "en-US" ? "farsan" : "vahid" },
          ]}
        >
          {i18n.t("title")}
        </Text>
        <Box style={styles.lang}>
          <TouchableOpacity onPress={() => changeToEnglish()}>
            <Text style={styles.en}>En</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeToFarsi()}>
            <Text style={styles.fa}>Fa</Text>
          </TouchableOpacity>
        </Box>
      </Box>

      <Box style={styles.logo}>
        <Image
          style={{ width: "60%", height: "100%" }}
          source={require("../assets/images/bg.jpg")}
          alt="spy logo"
        />
      </Box>

      <Box style={styles.btns}>
        <TouchableOpacity style={{ width: "100%" }}>
          <Button
            onPress={() =>
              navigation.navigate("Start", {
                language,
              })
            }
            variant="outline"
          >
            <Text
              style={[
                styles.btn,
                {
                  fontFamily: language == "en-US" ? "farsan" : "vahid",
                  fontSize: language == "en-US" ? 21 : 23,
                  paddingVertical: language == "en-US" ? 3 : 3,
                  paddingTop: language == "en-US" ? 6 : 6,
                },
              ]}
            >
              {i18n.t("newGame")}
            </Text>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "100%", marginTop: 30 }}>
          <Button
            onPress={() =>
              navigation.navigate("ChangeCategory", {
                language,
              })
            }
            variant="outline"
          >
            <Text
              style={[
                styles.btn,
                {
                  fontFamily: language == "en-US" ? "farsan" : "vahid",
                  fontSize: language == "en-US" ? 21 : 23,
                  paddingVertical: language == "en-US" ? 4 : 0,
                  paddingTop: language == "en-US" ? 6 : 10,
                },
              ]}
            >
              {i18n.t("ChangeCategory")}
            </Text>
          </Button>
        </TouchableOpacity>
      </Box>

      <Box style={styles.developed}>
        <Text
          style={{
            color: "white",
            fontFamily: "farsan",
            fontSize: 15,
          }}
          letterSpacing="lg"
        >
          Esrafil.Elahi@Gmail.Com {""}
        </Text>
        <Text
          letterSpacing="lg"
          style={{
            color: "white",
            fontFamily: "farsan",
            fontSize: 15,
            marginTop: 5,
          }}
        >
          © CopyRight 2022 {""}
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    paddingHorizontal: 5,
  },
  title: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
  },
  titleText: {
    textAlign: "center",
    color: "white",
    fontSize: 23,
    paddingTop: 5,
  },
  lang: {
    display: "flex",
    flexDirection: "row",
  },
  en: {
    fontFamily: "farsan",
    fontSize: 17,
    borderRadius: 3,
    borderColor: "white",
    borderWidth: 0.3,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 9,
    marginEnd: 4,
  },
  fa: {
    fontFamily: "farsan",
    fontSize: 17,
    borderRadius: 3,
    borderColor: "white",
    borderWidth: 0.3,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 9,
    marginStart: 4,
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 30,
    alignItems: "center",
    flex: 2,
    flexGrow: 2,
  },
  btns: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    flexGrow: 2,
    paddingHorizontal: 50,
  },
  btn: {
    textAlign: "center",
    color: "white",
  },
  developed: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
  },
});
