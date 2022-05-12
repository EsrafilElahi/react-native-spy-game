import React, { useEffect, useState, useRef, createRef } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Text, Center, Button } from "native-base";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";
import CountDown from "react-native-countdown-component";

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const Timer = ({ navigation, route }) => {
  const { language, timer } = route.params;
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Center
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          fontFamily: "farsan",
          flex: 1,
        }}
      >
        <CountDown
          until={timer * 60}
          size={50}
          onFinish={() => navigation.replace("Home")}
          digitStyle={{
            backgroundColor: "black",
            fontFamily: "farsan",
          }}
          digitTxtStyle={{
            color: "white",
            fontFamily: "farsan",
          }}
          timeToShow={["M", "S"]}
          timeLabels={{ m: "Min", s: "Sec" }}
          timeLabelStyle={{ color: "white", fontFamily: "farsan" }}
          separatorStyle={{ color: "white", marginBottom: 50 }}
          showSeparator
        />
      </Center>
      <Center
        style={{
          flex: 3,
          paddingHorizontal: 40,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "baseline",
          paddingTop: 100,
        }}
      >
        <TouchableOpacity style={{ width: "100%" }}>
          <Button onPress={() => navigation.replace("Finish", {
            language
          })} variant="outline">
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
              {i18n.t("end")}
            </Text>
          </Button>
        </TouchableOpacity>
      </Center>
    </SafeAreaView>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  btn: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
  },
});
