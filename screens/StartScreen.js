import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Platform,
  // BackHandler,
  // ToastAndroid,
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
  Select,
} from "native-base";
import { useFonts } from "expo-font";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const StartScreen = ({ navigation, route }) => {
  const { language, category } = route.params;
  const [isFontLoaded] = useFonts(customFonts);

  const [players, setPlayers] = useState(3);
  const [spies, setSpies] = useState(1);
  const [timer, setTimer] = useState(1);

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
            selectedValue={players}
            mt={1}
            onValueChange={(itemValue) => setPlayers(itemValue)}
            _selectedItem={{
              bg: "teal.500",
              borderRadius: 10,
            }}
          >
            <Select.Item label="3" value={3} />
            <Select.Item label="4" value={4} />
            <Select.Item label="5" value={5} />
            <Select.Item label="6" value={6} />
            <Select.Item label="7" value={7} />
            <Select.Item label="8" value={8} />
            <Select.Item label="9" value={9} />
            <Select.Item label="10" value={10} />
            <Select.Item label="11" value={11} />
            <Select.Item label="12" value={12} />
            <Select.Item label="13" value={13} />
            <Select.Item label="14" value={14} />
            <Select.Item label="15" value={15} />
            <Select.Item label="16" value={16} />
            <Select.Item label="17" value={17} />
            <Select.Item label="18" value={18} />
            <Select.Item label="19" value={19} />
            <Select.Item label="20" value={20} />
            <Select.Item label="21" value={21} />
            <Select.Item label="22" value={22} />
            <Select.Item label="23" value={23} />
            <Select.Item label="24" value={24} />
            <Select.Item label="25" value={25} />
          </Select>
        </Box>
        <Box w="1/2" style={{ marginTop: 10 }}>
          <Text
            style={{
              textAlign: language == "en-US" ? "left" : "right",
              fontFamily: language == "en-US" ? "farsan" : "vahid",
              fontSize: language == "en-US" ? 18 : 20,
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
            selectedValue={spies}
            mt={1}
            onValueChange={(itemValue) => setSpies(itemValue)}
            _selectedItem={{
              bg: "teal.600",
              borderRadius: 10,
            }}
          >
            <Select.Item label="1" value={1} />
            <Select.Item label="2" value={2} />
            <Select.Item label="3" value={3} />
            <Select.Item label="4" value={4} />
            <Select.Item label="5" value={5} />
            <Select.Item label="6" value={6} />
            <Select.Item label="7" value={7} />
            <Select.Item label="8" value={8} />
            <Select.Item label="9" value={9} />
            <Select.Item label="10" value={10} />
          </Select>
        </Box>
        <Box w="1/2" style={{ marginTop: 10 }}>
          <Text
            style={{
              textAlign: language == "en-US" ? "left" : "right",
              fontFamily: language == "en-US" ? "farsan" : "vahid",
              fontSize: language == "en-US" ? 18 : 20,
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
            selectedValue={timer}
            mt={1}
            onValueChange={(itemValue) => setTimer(itemValue)}
            _selectedItem={{
              bg: "teal.600",
              borderRadius: 10,
            }}
          >
            <Select.Item label="1" value={1} />
            <Select.Item label="2" value={2} />
            <Select.Item label="3" value={3} />
            <Select.Item label="4" value={4} />
            <Select.Item label="5" value={5} />
            <Select.Item label="6" value={6} />
            <Select.Item label="7" value={7} />
            <Select.Item label="8" value={8} />
            <Select.Item label="9" value={9} />
            <Select.Item label="10" value={10} />
          </Select>
        </Box>
        <Box w="1/2" style={{ marginTop: 10 }}>
          <Text
            style={{
              textAlign: language == "en-US" ? "left" : "right",
              fontFamily: language == "en-US" ? "farsan" : "vahid",
              fontSize: language == "en-US" ? 18 : 20,
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
                data: {
                  players,
                  spies,
                  timer,
                },
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
    fontSize: 20,
    paddingVertical: 3,
    // paddingTop: 3,
  },
});
