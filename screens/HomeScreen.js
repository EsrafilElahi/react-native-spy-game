import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Platform,
  BackHandler,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Box,
  Center,
  Container,
  Image,
  VStack,
  Button,
  Pressable,
  Heading,
} from "native-base";
import { useFonts } from "expo-font";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";
import Btn from "../components/Btn";
import { uuid } from "../components/Uuid";

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const HomeScreen = ({ navigation, route }) => {
  const [isFontLoaded] = useFonts(customFonts);
  const [language, setLanguage] = useState("fa-IR");
  const [exitApp, setExitApp] = useState(0);

  const [locationData, setLocationData] = useState([
    {
      en: " bank ",
      fa: " بانک ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " restaurant ",
      fa: " رستوران ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " masque ",
      fa: " مسجد ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " airport ",
      fa: " فرودگاه ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " hotel ",
      fa: " هتل ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " school ",
      fa: " مدرسه ",
      isEnabled: true,
      id: uuid(),
    },
  ]);
  const [thingsData, setThingsData] = useState([
    {
      en: " pencil ",
      fa: " مداد ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " mobile ",
      fa: " موبایل ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " shoes ",
      fa: " کفش ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " car ",
      fa: " ماشین ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " tv ",
      fa: " تلویزیون ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " toy ",
      fa: " اسباب بازی ",
      isEnabled: true,
      id: uuid(),
    },
  ]);
  const [variousData, setVariousData] = useState([
    {
      en: " marriage ",
      fa: " ازدواج ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " dream ",
      fa: " رویا ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " party ",
      fa: " جشن ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " happy ",
      fa: " خوشحال ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " water ",
      fa: " آب ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " jungle ",
      fa: " جنگل ",
      isEnabled: true,
      id: uuid(),
    },
  ]);
  const [mixData, setMixData] = useState([
    {
      en: " bank ",
      fa: " بانک ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " party ",
      fa: " جشن ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " shoes ",
      fa: " کفش ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " car ",
      fa: " ماشین ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " marriage ",
      fa: " ازدواج ",
      isEnabled: true,
      id: uuid(),
    },
    {
      en: " boy ",
      fa: " پسر ",
      isEnabled: true,
      id: uuid(),
    },
  ]);

  useEffect(() => {
    console.log(
      "route?.params.category --> ",
      route.params?.category ?? "location"
    );
    console.log(
      "route?.params.locationDataHome --> ",
      route.params?.locationDataHome ?? locationData
    );
    console.log(
      "route?.params.thingsDataHome --> ",
      route.params?.thingsDataHome ?? thingsData
    );
    console.log(
      "route?.params.variousDataHome --> ",
      route.params?.variousDataHome ?? variousData
    );
    console.log(
      "route?.params.mixDataHome --> ",
      route.params?.mixDataHome ?? mixData
    );
  }, [
    route.params?.category,
    route.params?.locationDataHome,
    route.params?.thingsDataHome,
    route.params?.variousDataHome,
    route.params?.mixDataHome,
  ]);

  i18n.fallbacks = true;
  i18n.translations = { en, fa };
  i18n.locale = language;

  // const backAction = () => {
  //   setTimeout(() => {
  //     setExitApp(0);
  //   }, 2000); // 2 seconds to tap second-time

  //   if (exitApp === 0) {
  //     setExitApp((prev) => prev + 1);

  //     ToastAndroid.show(
  //       "please press back button again to exit app",
  //       ToastAndroid.SHORT
  //     );
  //   } else if (exitApp === 1) {
  //     BackHandler.exitApp();
  //   }
  //   return true;
  // };

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );
  //   return () => backHandler.remove();
  // },[]);

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
            flexDirection:
              language == "en-US" || Localization.locale == "fa-IR"
                ? "row"
                : "row-reverse",
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
                category: route.params?.category ?? "location",
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
                cat: route.params?.category ?? "location",
                lh: route.params?.locationDataHome ?? locationData,
                th: route.params?.thingsDataHome ?? thingsData,
                vh: route.params?.variousDataHome ?? variousData,
                mh: route.params?.mixDataHome ?? mixData,
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
    // fontSize: 23,
    // paddingVertical: 0,
    // paddingTop: 5,
  },
  developed: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
  },
});
