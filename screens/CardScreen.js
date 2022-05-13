import React, { useEffect, useState, useRef, createRef, useContext } from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Text, Box, Center, FlatList } from "native-base";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { en, fa } from "../i18n/locales";
import RenderCard from "./../components/RenderCard";
import { SettingsDataContext } from '../context/context/settingsDataContext';
import { SpyListContext } from '../context/context/spyListContext';

i18n.fallbacks = true;
i18n.translations = { en, fa };

const customFonts = {
  farsan: require("../assets/fonts/farsan.ttf"),
  vahid: require("../assets/fonts/vahid.ttf"),
};

const Cards = ({ navigation, route }) => {
  const { language, randomItem } =
    route.params;
  const [isFontLoaded] = useFonts(customFonts);
  const { settingsData, dispatch: settingsDispatch } = useContext(SettingsDataContext)
  const { spyList, dispatch: spyListDispatch } = useContext(SpyListContext);


  const playersArr = [...Array(settingsData.player - settingsData.spy).keys()].map(
    (item) => (item = randomItem)
  );
  const spiesArr = [...Array(settingsData.spy).keys()].map(
    item => (item = i18n.t("spy"))
  );
  const mergeArr = [...playersArr, ...spiesArr];
  const randomRender = mergeArr.sort((a, b) => Math.random() - 0.5);

  const arrLength = randomRender.length;
  const [questionRef, setQuestionRef] = useState([]);

  useEffect(() => {
    // add or remove refs
    setQuestionRef((questionRef) =>
      Array(arrLength)
        .fill()
        .map((_, i) => questionRef[i] || createRef())
    );
  }, [arrLength]);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {settingsData.spy >= settingsData.player - settingsData.spy ? (
        <Center
          style={{
            marginTop: 40,
          }}
        >
          <Text
            style={{
              fontFamily: language === "en-US" ? "farsan" : "vahid",
              fontSize: language === "en-US" ? 21 : 20,
              paddingTop: 10,
            }}
          >
            {i18n.t("wtf")}
          </Text>
        </Center>
      ) : (
        <Box
          style={{
            flex: 1,
            flexGrow: 1,
          }}
        >
          <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={randomRender}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index, arr }) => (
              <RenderCard
                item={item}
                language={language}
                questionRef={questionRef[index]}
                index={index}
                lastIndex={randomRender.length - 1}
                timer={settingsData.timer}
              />
            )}
          />
        </Box>
      )}
    </SafeAreaView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
