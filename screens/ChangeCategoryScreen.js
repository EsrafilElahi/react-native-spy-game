import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  BackHandler,
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
import { uuid } from "../components/Uuid";

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
  const { language, cat, lh, th, vh, mh } = route.params;
  const [isFontLoaded] = useFonts(customFonts);
  const [category, setCategory] = useState(cat ?? "location");

  const [locationData, setLocationData] = useState(
    lh ?? [
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
    ]
  );
  const [thingsData, setThingsData] = useState(
    th ?? [
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
    ]
  );
  const [variousData, setVariousData] = useState(
    vh ?? [
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
    ]
  );
  const [mixData, setMixData] = useState(
    mh ?? [
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
    ]
  );

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
            params: {
              category,
              locationDataHome: route.params?.locationData ?? locationData,
              thingsDataHome: route.params?.thingsData ?? thingsData,
              variousDataHome: route.params?.variousData ?? variousData,
              mixDataHome: route.params?.mixData ?? mixData,
            },
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
              fontSize: language === "en-US" ? 18 : 19,
            }}
            selectedValue={cat === category ? cat : category}
            mt={1}
            onValueChange={(itemValue) => setCategory(itemValue)}
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
                category === "location"
                  ? "location"
                  : category === "things"
                  ? "things"
                  : category === "various"
                  ? "various"
                  : "mix",
                {
                  language,
                  // allData:
                  //   category === "location"
                  //     ? route.params?.locationData ?? locationData
                  //     : category === "things"
                  //     ? route.params?.thingsData ?? thingsData
                  //     : category === "various"
                  //     ? route.params?.variousData ?? variousData
                  //     : route.params?.mixData ?? mixData,
                  loc: route.params?.locationData ?? locationData,
                  thing: route.params?.thingsData ?? thingsData,
                  various: route.params?.variousData ?? variousData,
                  mix: route.params?.mixData ?? mixData,
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
