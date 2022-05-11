import React, { useEffect, useState, useRef, useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Text, Box, Button, Select } from "native-base";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";
import { CategoryContext } from "../context/context/categoryContext";
import { ContainerContext } from "../context/context/containerContext";
import { SettingsDataContext } from './../context/context/settingsDataContext';

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const StartScreen = ({ navigation, route }) => {
  const {
    language,
  } = route.params;
  const [isFontLoaded] = useFonts(customFonts);
  const [data, setData] = useState(null);
  const [randomItem, setRandomItem] = useState();
  const { category, dispatch: categoryDispatch } = useContext(CategoryContext);
  const { state, dispatch: containerDispatch } = useContext(ContainerContext);
  const { settingsData, dispatch: settingsDispatch } = useContext(SettingsDataContext)

  const loadRandomItem = async () => {
    if (data) {
      if (language === "en-US") {
        await setRandomItem(
          data[Math.floor(Math.random() * data?.length)].en
        );
      }

      else {
        await setRandomItem(
          data[Math.floor(Math.random() * data?.length)].fa
        );
      }
    }
  }

  const loadLocation = async () => {
    try {
      let location = await state.filter(item => item.location)
      await setData(location[0].location)
    } catch (error) {
      console.log('error load data :', error)
    }
  }
  const loadThings = async () => {
    try {
      let thing = await state.filter(item => item.things)
      await setData(thing[0].things)
    } catch (error) {
      console.log('error load data :', error)
    }
  }
  const loadVarious = async () => {
    try {
      let various = await state.filter(item => item.various)
      await setData(various[0].various)
    } catch (error) {
      console.log('error load data :', error)
    }
  }
  const loadMix = async () => {
    try {
      let mix = await state.filter(item => item.mix)
      await setData(mix[0].mix)
    } catch (error) {
      console.log('error load data :', error)
    }
  }

  // console.log(`data Home ${category.category} :`, data);
  // console.log(`random item :`, randomItem);

  useEffect(() => {
    loadRandomItem();
  }, [data, category.category])

  useEffect(() => {
    if (category.category === "location") loadLocation();
    if (category.category === "things") loadThings();
    if (category.category === "various") loadVarious();
    if (category.category === "mix") loadMix();
  }, [category.category])

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
            onValueChange={(itemValue) => settingsDispatch({ type: "CHANGE_SETTINGS_DATA_PLAYER", payload: { player: itemValue } })}
            _selectedItem={{
              bg: "teal.500",
              borderRadius: 10,
            }}
          >
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 3 "
              value={3}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 4 "
              value={4}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 5 "
              value={5}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 6 "
              value={6}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 7 "
              value={7}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 8 "
              value={8}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 9 "
              value={9}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 10 "
              value={10}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 11 "
              value={11}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 12 "
              value={12}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 13 "
              value={13}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 14 "
              value={14}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 15 "
              value={15}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 16 "
              value={16}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 17 "
              value={17}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 18 "
              value={18}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 19 "
              value={19}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 20 "
              value={20}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 21 "
              value={21}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 22 "
              value={22}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 23 "
              value={23}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 24 "
              value={24}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 25 "
              value={25}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 26 "
              value={26}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 27 "
              value={27}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 28 "
              value={28}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 29 "
              value={29}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 30 "
              value={30}
            />
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
            onValueChange={(itemValue) => settingsDispatch({ type: "CHANGE_SETTINGS_DATA_SPY", payload: { spy: itemValue } })}
            _selectedItem={{
              bg: "teal.600",
              borderRadius: 10,
            }}
          >
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 1 "
              value={1}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 2 "
              value={2}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 3 "
              value={3}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 4 "
              value={4}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 5 "
              value={5}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 6 "
              value={6}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 7 "
              value={7}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 8 "
              value={8}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 9 "
              value={9}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 10 "
              value={10}
            />
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
            onValueChange={(itemValue) => settingsDispatch({ type: "CHANGE_SETTINGS_DATA_TIMER", payload: { timer: itemValue } })}
            _selectedItem={{
              bg: "teal.600",
              borderRadius: 10,
            }}
          >
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 1 "
              value={1}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 2 "
              value={2}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 3 "
              value={3}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 4 "
              value={4}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 5 "
              value={5}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 6 "
              value={6}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 7 "
              value={7}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 8 "
              value={8}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 9 "
              value={9}
            />
            <Select.Item
              _text={{
                fontFamily: "farsan",
                fontSize: 19,
              }}
              label=" 10 "
              value={10}
            />
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
                randomItem
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
