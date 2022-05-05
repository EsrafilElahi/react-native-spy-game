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

const LocationScreen = ({ navigation, route }) => {
  const { language, loc } = route.params;
  const [isFontLoaded] = useFonts(customFonts);

  const [locationData, setLocationData] = useState(
    loc ?? [
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

  // const addItem = (titleEn, titleFa) => {
  //   setLocationData((prevList) => {
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
    let copyData = [...locationData];
    let updatedData = copyData.map((item) => {
      if (item.id === id) {
        return { ...item, isEnabled: !item.isEnabled };
      }
      return item;
    });
    setLocationData(updatedData);
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
              params: { locationData },
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
          data={locationData}
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

export default LocationScreen;

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
