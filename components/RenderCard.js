import React, { useEffect, useState, useRef, useContext } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Box,
  Center,
  Button,
} from "native-base";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";
import { useNavigation } from "@react-navigation/native";

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const RenderCard = (props) => {
  const {
    item,
    language,
    index,
    questionRef,
    lastIndex,
    timer,
    // spyList,
    // setSpyList,
  } = props;
  const [isFontLoaded] = useFonts(customFonts);
  const [title, setTitle] = useState(
    language === "en-US" ? " Click It " : "  کلیک کن  "
  );

  const navigation = useNavigation();

  // const checkSpy = () => {
  //   if (item == " جاسوس " || item == " Spy ") {
  //     // console.log("render card new :", { item, index });
  //     setSpyList((prev) => [...prev, { item, index }]);
  //   }
  // };

  // useEffect(() => {
  //   checkSpy();
  // }, [index]);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <Center style={[styles.container]}>
      <Box style={styles.header}>
        <Center style={{ backgroundColor: "#0d9488", width: "100%" }}>
          <Text
            style={{
              fontFamily: language === "en-US" ? "farsan" : "vahid",
              fontSize: language === "en-US" ? 20 : 22,
              paddingTop: 20,
              textAlign: "center",
              paddingBottom: 15,
            }}
          >
            {` ${i18n.t("number")} ${index + 1} `}
          </Text>
        </Center>
      </Box>
      <Box style={styles.item}>
        <Text
          ref={questionRef}
          style={{
            fontFamily: language === "en-US" ? "farsan" : "vahid",
            fontSize: language === "en-US" ? 55 : 55,
            paddingTop: language === "en-US" ? 85 : 80,
            paddingVertical: language === "en-US" ? 40 : 40,
            width: "100%",
            textAlign: "center",
            // backgroundColor: "#0d9488",
            opacity: 0,
          }}
        >
          {item}
        </Text>
        <TouchableOpacity
          style={{
            width: "70%",
            marginTop: 30,
            backgroundColor: "rgba(39, 245, 217, 0.2)",
            borderRadius: 5,
          }}
        >
          <Button
            style={{
              display:
                title !==
                  (language === "en-US" ? " Click It " : "  کلیک کن  ") &&
                  index === lastIndex
                  ? "none"
                  : "flex",
            }}
            onPress={() => {
              questionRef?.current.setNativeProps({
                style: { opacity: 1 },
              });

              setTitle(language === "en-US" ? " Swipe It " : "  سوایپ کن  ");
            }}
            variant="outline"
          >
            <Text
              style={[
                styles.btn,
                {
                  fontFamily: language == "en-US" ? "farsan" : "vahid",
                  fontSize: language === "en-US" ? 28 : 28,
                  paddingVertical: language === "en-US" ? 1 : 0,
                  paddingTop: language === "en-US" ? 13 : 17,
                  paddingRight: language === "en-US" ? 7 : 10,
                },
              ]}
            >
              {title}
            </Text>
          </Button>
          <Button
            onPress={() => {
              navigation.replace("Timer", {
                language,
                timer
              });
            }}
            style={{
              display:
                title !==
                  (language === "en-US" ? " Click It " : "  کلیک کن  ") &&
                  index === lastIndex
                  ? "flex"
                  : "none",
            }}
            variant="outline"
          >
            <Text
              style={[
                styles.btn,
                {
                  fontFamily: language == "en-US" ? "farsan" : "vahid",
                  fontSize: language === "en-US" ? 28 : 28,
                  paddingVertical: language === "en-US" ? 0 : 0,
                  paddingTop: language === "en-US" ? 14 : 17,
                  paddingRight: 5,
                },
              ]}
            >
              {i18n.t("finish")}
            </Text>
          </Button>
        </TouchableOpacity>
      </Box>
    </Center>
  );
};

export default RenderCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: Dimensions.get("screen").width,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  item: {
    width: "100%",
    flex: 5,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 80,
  },
  btn: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
  },
});
