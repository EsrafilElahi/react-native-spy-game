import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  AsyncStorageStatic,
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
import {
  EvilIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";

import LocationScreen from "./categories/LocationScreen";
import ThingScreen from "./categories/ThingScreen";
import VariousWordScreen from "./categories/VariousWordScreen";
import MixAllCategoryScreen from "./categories/MixAllCategoryScreen";

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const ChangeCategoryScreen = ({ navigation, route }) => {
  const { language, cat } = route.params;
  const [isFontLoaded] = useFonts(customFonts);
  const [category, setCategory] = useState(cat ?? "location");
  // const [categoryScreens, setCategoryScreens] = useState({});

  // const loadCategoryscreens = async () => {
  //   setCategoryScreens({
  //     location: await require("./categories/LocationScreen"),
  //     things: await require("./categories/ThingScreen"),
  //     various: await require("./categories/VariousWordScreen"),
  //     mix: await require("./categories/MixAllCategoryScreen"),
  //   });
  // };

  // useEffect(() => {
  //   loadCategoryscreens();
  // }, []);

  useEffect(() => {
    console.log("category =>", category);
    console.log("cat =>", cat);
  }, []);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <Pressable
        style={styles.back_icon}
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: { category },
            merge: true,
          })
        }
      >
        <AntDesign
          style={{
            textAlign: "center",
          }}
          name="left"
          size={15}
          color="white"
        />
      </Pressable>

      <Box
        style={[
          styles.selectBox,
          { flexDirection: language == "en-US" ? "row-reverse" : "row" },
        ]}
      >
        <Box w="1/2">
          <Select
            style={{
              fontFamily: language === "en-US" ? "farsan" : "vahid",
              fontSize: language === "en-US" ? 16 : 17,
            }}
            selectedValue={cat === category ? cat : category}
            mt={1}
            onValueChange={(itemValue) => setCategory(itemValue)}
            _selectedItem={{
              bg: "teal.500",
              borderRadius: 10,
            }}
          >
            <Select.Item
              label={i18n.t("location")}
              value="location"
              _text={{
                fontSize: language === "en-US" ? 16 : 17,
                paddingTop: language === "en-US" ? 0.5 : 1.5,
                fontFamily: language === "en-US" ? "farsan" : "vahid",
                letterSpacing: "lg",
              }}
            />
            <Select.Item
              label={i18n.t("things")}
              value="things"
              _text={{
                fontSize: language === "en-US" ? 16 : 18,
                paddingTop: language === "en-US" ? 0.5 : 1.5,
                fontFamily: language === "en-US" ? "farsan" : "vahid",
                letterSpacing: "lg",
              }}
            />
            <Select.Item
              label={i18n.t("variousWord")}
              value="various"
              _text={{
                fontSize: language === "en-US" ? 16 : 17,
                paddingTop: language === "en-US" ? 0.5 : 1.5,
                fontFamily: language === "en-US" ? "farsan" : "vahid",
                letterSpacing: "lg",
              }}
            />
            <Select.Item
              label={i18n.t("mixAllCategory")}
              value="mix"
              _text={{
                fontSize: language === "en-US" ? 16 : 17,
                paddingTop: language === "en-US" ? 0.5 : 1.5,
                fontFamily: language === "en-US" ? "farsan" : "vahid",
                letterSpacing: "lg",
              }}
            />
          </Select>
        </Box>
        <Box w="1/2" style={{ marginTop: 10 }}>
          <Text
            style={{
              textAlign: language == "en-US" ? "left" : "right",
              fontFamily: language == "en-US" ? "farsan" : "vahid",
              fontSize: language == "en-US" ? 19 : 20,
            }}
          >
            {i18n.t("category")}
          </Text>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={styles.changeCategory}
      >
        <TouchableOpacity style={{ width: "100%", marginTop: 30 }}>
          <Button
            onPress={() =>
              navigation.navigate(
                category === "location"
                  ? "location"
                  : category === "things"
                  ? "things"
                  : category === "various"
                  ? "various"
                  : "mix",
                {
                  language,
                  category,
                }
              )
            }
            variant="outline"
          >
            <Text
              style={[
                styles.btn,
                {
                  fontFamily: language == "en-US" ? "farsan" : "vahid",
                  fontSize: language == "en-US" ? 19 : 20,
                },
              ]}
            >
              {i18n.t("addCase")}
            </Text>
          </Button>
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
};

export default ChangeCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 15,
  },
  selectBox: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  changeCategory: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  btn: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    paddingVertical: 3,
    paddingTop: 6,
  },
  back_icon: {
    backgroundColor: "black",
    borderColor: "gray",
    borderWidth: 0.4,
    width: 50,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    position: "absolute",
    zIndex: 2,
    left: 10,
    top: 20,
  },
});
