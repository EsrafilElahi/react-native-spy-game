import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
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
import { en, fa } from "../../i18n/locales";
import RenderItem from "../../components/RenderItem";

import { uuid } from "./../../components/Uuid";

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../../assets/fonts/farsan.ttf"),
  vahid: require("../../assets/fonts/vahid.ttf"),
};

const MixAllCategoryScreen = ({ navigation, route }) => {
  const { language, mix } = route.params;
  const [isFontLoaded] = useFonts(customFonts);

  const [mixData, setMixData] = useState(
    mix ?? [
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

  // const addItem = (titleEn, titleFa) => {
  //   setMixData((prevList) => {
  //     return [
  //       ...prevList,
  //       {
  //         en: titleEn,
  //         fa: titleFa,
  //         isEnabled: true,
  //       },
  //     ];
  //   });
  // };

  const changeSwitch = (id) => {
    let copyData = [...mixData];
    let updatedData = copyData.map((item) => {
      if (item.id === id) {
        return { ...item, isEnabled: !item.isEnabled };
      }
      return item;
    });
    setMixData(updatedData);
  };

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <Box style={styles.header}>
        <Pressable
          style={styles.back_icon}
          onPress={() =>
            navigation.navigate({
              name: "ChangeCategory",
              params: { mixData },
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
        <Center>header</Center>
      </Box>
      <Box style={styles.list}>
        <FlatList
          data={mixData}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <RenderItem
              language={language}
              item={language === "en-US" ? item.en : item.fa}
              isEnabled={item.isEnabled}
              id={item.id}
              changeSwitch={changeSwitch}
            />
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

export default MixAllCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    paddingHorizontal: 15,
  },
  list: {
    flex: 5,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexGrow: 5,
    width: "100%",
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
    // top: 20,
  },
});
