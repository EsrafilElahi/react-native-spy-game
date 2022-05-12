import React, { useEffect, useState, useRef, useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Text, Box, Button, Pressable, Select } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";

import { LocationContext } from "../context/context/locationContext";
import { ThingsContext } from './../context/context/thingsContext';
import { VariousContext } from './../context/context/variousContext';
import { MixContext } from './../context/context/mixContext';
import { CategoryContext } from './../context/context/categoryContext';

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const ChangeCategoryScreen = ({ navigation, route }) => {
  const { language } = route.params;
  const [isFontLoaded] = useFonts(customFonts);
  const { category, dispatch: categoryDispatch } = useContext(CategoryContext);
  const { location, dispatch: locationDispatch } = useContext(LocationContext);
  const { things, dispatch: thingsDispatch } = useContext(ThingsContext);
  const { various, dispatch: variousDispatch } = useContext(VariousContext);
  const { mix, dispatch: mixDispatch } = useContext(MixContext);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <Pressable
        style={styles.back_icon}
        onPress={() => navigation.navigate("Home", { category })}
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
              fontSize: language === "en-US" ? 18 : 19,
            }}
            selectedValue={category.category}
            mt={1}
            onValueChange={(itemValue) => categoryDispatch({ type: "CHANGE_CATEGORY", payload: itemValue })}
            _selectedItem={{
              bg: "teal.500",
              borderRadius: 10,
            }}
            _item={{
              marginVertical: 5,
            }}
          >
            <Select.Item
              label={i18n.t("location")}
              value="location"
              _text={{
                fontSize: language === "en-US" ? 18 : 19,
                paddingTop: language === "en-US" ? 0.5 : 1.5,
                fontFamily: language === "en-US" ? "farsan" : "vahid",
                letterSpacing: "lg",
              }}
            />
            <Select.Item
              label={i18n.t("things")}
              value="things"
              _text={{
                fontSize: language === "en-US" ? 18 : 19,
                paddingTop: language === "en-US" ? 0.5 : 1.5,
                fontFamily: language === "en-US" ? "farsan" : "vahid",
                letterSpacing: "lg",
              }}
            />
            <Select.Item
              label={i18n.t("variousWord")}
              value="various"
              _text={{
                fontSize: language === "en-US" ? 18 : 19,
                paddingTop: language === "en-US" ? 0.5 : 1.5,
                fontFamily: language === "en-US" ? "farsan" : "vahid",
                letterSpacing: "lg",
              }}
            />
            <Select.Item
              label={i18n.t("mixAllCategory")}
              value="mix"
              _text={{
                fontSize: language === "en-US" ? 18 : 19,
                paddingTop: language === "en-US" ? 0.5 : 1.5,
                fontFamily: language === "en-US" ? "farsan" : "vahid",
                letterSpacing: "lg",
              }}
            />
          </Select>
        </Box>
        <Box w="1/2" style={{ marginTop: 7 }}>
          <Text
            style={{
              textAlign: language == "en-US" ? "left" : "right",
              fontFamily: language == "en-US" ? "farsan" : "vahid",
              fontSize: language == "en-US" ? 21 : 23,
              paddingTop: language == "en-US" ? 0 : 12,
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
                category.category === "location"
                  ? "location"
                  : category.category === "things"
                    ? "things"
                    : category.category === "various"
                      ? "various"
                      : "mix",
                {
                  language,
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
                  fontSize: language == "en-US" ? 21 : 22,
                  paddingVertical: language == "en-US" ? 3 : 2,
                  paddingTop: language == "en-US" ? 6 : 9,
                },
              ]}
            >
              {i18n.t("addCategoryCase")}
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
  },
  back_icon: {
    backgroundColor: "black",
    borderColor: "gray",
    borderWidth: 0.4,
    width: 50,
    height: 50,
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
