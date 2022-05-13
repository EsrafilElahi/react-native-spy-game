import React, { useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Center
} from "react-native";
import { Text, Box, Button } from "native-base";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";
import { SpyListContext } from '../context/context/spyListContext';

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const FinishScreen = ({ navigation, route }) => {
  const { language } = route.params;
  const [isFontLoaded] = useFonts(customFonts);
  const { spyList, dispatch: spyListDispatch } = useContext(SpyListContext);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <Box style={styles.header}>
        <Text
          style={{
            fontSize: language === "en-US" ? 35 : 35,
            fontFamily: language === "en-US" ? "farsan" : "vahid",
            paddingTop: 15,
            width: "100%",
            textAlign: "center",
          }}
        >
          {i18n.t("spyList")}
        </Text>
      </Box>

      <Box style={styles.spiesList}>
        <FlatList
          data={spyList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Text
              style={{
                marginVertical: 10,
                fontFamily: language === "en-US" ? "farsan" : "vahid",
                fontSize: language === "en-US" ? 20 : 20,
                paddingTop: 10,
                paddingBottom: 5,
                backgroundColor: "rgba(39, 245, 243, 0.21)",
                textAlign: language === "en-US" ? "left" : "right",
                borderRadius: 5,
              }}
            >{` ${i18n.t("number")} ${item} `}</Text>
          )}
        />
      </Box>

      <Box style={styles.footer}>
        <TouchableOpacity style={{ width: "80%" }}>
          <Button onPress={() => {
            navigation.replace("Home");
          }} variant="outline">
            <Text
              style={[
                styles.btn,
                {
                  fontFamily: language == "en-US" ? "farsan" : "vahid",
                  fontSize: language === "en-US" ? 23 : 25,
                  paddingVertical: language === "en-US" ? 3 : 0,
                  paddingTop: language === "en-US" ? 8 : 10,
                  paddingRight: 5,
                },
              ]}
            >
              {i18n.t("home")}
            </Text>
          </Button>
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
};

export default FinishScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  header: {
    flex: 1,
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spiesList: {
    flex: 3,
    paddingHorizontal: 10,
    flexGrow: 3,
  },
  footer: {
    flex: 1,
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  btn: {
    textAlign: "center",
    color: "white",
  },
});
