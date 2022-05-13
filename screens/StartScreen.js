import React, { useEffect, useState, useRef, useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Text, Box, Button, Select, FlatList } from "native-base";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";

import { LocationContext } from "../context/context/locationContext";
import { ThingsContext } from "../context/context/thingsContext";
import { VariousContext } from "../context/context/variousContext";
import { MixContext } from "../context/context/mixContext";
import { CategoryContext } from "../context/context/categoryContext";
import { SettingsDataContext } from "../context/context/settingsDataContext";

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const StartScreen = ({ navigation, route }) => {
  const { language } = route.params;
  const [isFontLoaded] = useFonts(customFonts);
  const [data, setData] = useState(null);
  const [randomItem, setRandomItem] = useState();

  const { category, dispatch: categoryDispatch } = useContext(CategoryContext);
  const { settingsData, dispatch: settingsDispatch } =
    useContext(SettingsDataContext);
  const { location, dispatch: locationDispatch } = useContext(LocationContext);
  const { things, dispatch: thingsDispatch } = useContext(ThingsContext);
  const { various, dispatch: variousDispatch } = useContext(VariousContext);
  const { mix, dispatch: mixDispatch } = useContext(MixContext);

  let players = [...Array(30).keys()].map((item) => item + 1);
  let spies = [...Array(10).keys()].map((item) => item + 1);
  let timer = [...Array(15).keys()].map((item) => item + 1);

  const loadRandomItem = async () => {
    if (data) {
      if (language === "en-US") {
        await setRandomItem(data[Math.floor(Math.random() * data?.length)].en);
      } else {
        await setRandomItem(data[Math.floor(Math.random() * data?.length)].fa);
      }
    }
  };
  const loadLocation = async () => {
    try {
      let isEnabled = location.filter((item) => item.isEnabled);
      await setData(isEnabled);
    } catch (error) {
      console.log("error load location", error);
    }
  };
  const loadThings = async () => {
    try {
      let isEnabled = things.filter((item) => item.isEnabled);
      await setData(isEnabled);
    } catch (error) {
      console.log("error load location", error);
    }
  };
  const loadVarious = async () => {
    try {
      let isEnabled = various.filter((item) => item.isEnabled);
      await setData(isEnabled);
    } catch (error) {
      console.log("error load location", error);
    }
  };
  const loadMix = async () => {
    try {
      let isEnabled = mix.filter((item) => item.isEnabled);
      await setData(isEnabled);
    } catch (error) {
      console.log("error load location", error);
    }
  };

  useEffect(() => {
    loadRandomItem();
  }, [data, category.category]);

  useEffect(() => {
    if (category.category === "location") loadLocation();
    if (category.category === "things") loadThings();
    if (category.category === "various") loadVarious();
    if (category.category === "mix") loadMix();
  }, [category.category]);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <Box
        style={[
          styles.playersBox,
          { flexDirection: language == "en-US" ? "row-reverse" : "row" },
        ]}
      >
        <Box w="1/2">
          <Select
            style={{ fontFamily: "farsan", fontSize: 18 }}
            selectedValue={settingsData.player}
            mt={1}
            onValueChange={(itemValue) =>
              settingsDispatch({
                type: "CHANGE_SETTINGS_DATA_PLAYER",
                payload: { player: itemValue },
              })
            }
            _selectedItem={{
              bg: "teal.500",
              borderRadius: 10,
            }}
          >
            {players.map((item) => (
              <Select.Item
                key={item}
                _text={{
                  fontFamily: "farsan",
                  fontSize: 19,
                }}
                label={` ${item} `}
                value={item}
              />
            ))}
          </Select>
        </Box>
        <Box w="1/2" style={{ marginTop: 10 }}>
          <Text
            style={{
              textAlign: language == "en-US" ? "left" : "right",
              fontFamily: language == "en-US" ? "farsan" : "vahid",
              fontSize: language == "en-US" ? 19 : 21,
              paddingTop: language == "en-US" ? 0 : 8,
            }}
          >
            {i18n.t("players")}
          </Text>
        </Box>
      </Box>

      <Box
        style={[
          styles.spiesBox,
          { flexDirection: language == "en-US" ? "row-reverse" : "row" },
        ]}
      >
        <Box w="1/2">
          <Select
            style={{ fontFamily: "farsan", fontSize: 18 }}
            selectedValue={settingsData.spy}
            mt={1}
            onValueChange={(itemValue) =>
              settingsDispatch({
                type: "CHANGE_SETTINGS_DATA_SPY",
                payload: { spy: itemValue },
              })
            }
            _selectedItem={{
              bg: "teal.600",
              borderRadius: 10,
            }}
          >
            {spies.map((item) => (
              <Select.Item
                key={item}
                _text={{
                  fontFamily: "farsan",
                  fontSize: 19,
                }}
                label={` ${item} `}
                value={item}
              />
            ))}
          </Select>
        </Box>
        <Box w="1/2" style={{ marginTop: 10 }}>
          <Text
            style={{
              textAlign: language == "en-US" ? "left" : "right",
              fontFamily: language == "en-US" ? "farsan" : "vahid",
              fontSize: language == "en-US" ? 19 : 21,
              paddingTop: language == "en-US" ? 0 : 8,
            }}
          >
            {i18n.t("spies")}
          </Text>
        </Box>
      </Box>

      <Box
        style={[
          styles.timerBox,
          { flexDirection: language == "en-US" ? "row-reverse" : "row" },
        ]}
      >
        <Box w="1/2">
          <Select
            style={{ fontFamily: "farsan", fontSize: 18 }}
            selectedValue={settingsData.timer}
            mt={1}
            onValueChange={(itemValue) =>
              settingsDispatch({
                type: "CHANGE_SETTINGS_DATA_TIMER",
                payload: { timer: itemValue },
              })
            }
            _selectedItem={{
              bg: "teal.600",
              borderRadius: 10,
            }}
          >
            {timer.map((item) => (
              <Select.Item
                key={item}
                _text={{
                  fontFamily: "farsan",
                  fontSize: 19,
                }}
                label={` ${item} `}
                value={item}
              />
            ))}
          </Select>
        </Box>
        <Box w="1/2" style={{ marginTop: 10 }}>
          <Text
            style={{
              textAlign: language == "en-US" ? "left" : "right",
              fontFamily: language == "en-US" ? "farsan" : "vahid",
              fontSize: language == "en-US" ? 19 : 21,
              paddingTop: language == "en-US" ? 0 : 8,
            }}
          >
            {i18n.t("timer")}
          </Text>
        </Box>
      </Box>

      <Box style={styles.btnStartBox}>
        <TouchableOpacity style={{ width: "100%" }}>
          <Button
            onPress={() =>
              navigation.navigate("Card", {
                language,
                randomItem,
              })
            }
            variant="outline"
          >
            <Text
              style={[
                styles.btn,
                { fontFamily: language == "en-US" ? "farsan" : "vahid" },
              ]}
            >
              {i18n.t("start")}
            </Text>
          </Button>
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 15,
  },

  playersBox: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  spiesBox: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  timerBox: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btnStartBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },

  btn: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    paddingVertical: 3,
    paddingTop: 7,
  },
});
