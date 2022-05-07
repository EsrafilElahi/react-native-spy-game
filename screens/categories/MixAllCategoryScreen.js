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
  Modal,
  Input,
  FormControl,
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
  const [persian, setPersian] = useState("  ");
  const [english, setEnglish] = useState("  ");
  const [showModal, setShowModal] = useState(false);

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

  const handleAddItem = () => {
    setShowModal(false);
    setPersian("");
    setEnglish("");
    let copy = [...mixData];
    copy.push({ fa: persian, en: english, isEnabled: true });
    setMixData(copy);
  };

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
        <Center
          style={{
            width: "100%",
            flex: 4,
            textAlign: "right",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "70%",
              height: 50,
              textAlign: "right",
            }}
          >
            <Button onPress={() => setShowModal(true)} variant="outline">
              <Text
                style={[
                  styles.btn,
                  {
                    fontFamily: language == "en-US" ? "farsan" : "vahid",
                    fontSize: language == "en-US" ? 21 : 21,
                    paddingVertical: language == "en-US" ? 3 : 0,
                    paddingTop: language == "en-US" ? 6 : 7,
                  },
                ]}
              >
                {i18n.t("addCategoryCase")}
              </Text>
            </Button>
          </TouchableOpacity>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: language == "en-US" ? "farsan" : "vahid",
                        fontSize: language == "en-US" ? 19 : 22,
                        textAlign: language == "en-US" ? "left" : "right",
                        width: "100%",
                      }}
                    >
                      {i18n.t("persianName")}
                    </Text>
                  </FormControl.Label>
                  <Input
                    style={{
                      fontFamily: language == "en-US" ? "farsan" : "vahid",
                      fontSize: language == "en-US" ? 19 : 20,
                    }}
                    value={persian}
                    onChangeText={(newTxt) => setPersian(newTxt)}
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormControl.Label>
                    <Text
                      style={{
                        color: "white",
                        fontFamily:
                          language == "en-US" ? "farsan" : "vahid" ?? "farsan",
                        fontSize: language == "en-US" ? 19 : 22,
                        paddingTop: 10,
                        width: "100%",
                        textAlign: language == "en-US" ? "left" : "right",
                      }}
                    >
                      {i18n.t("englishName")}
                    </Text>
                  </FormControl.Label>
                  <Input
                    style={{
                      fontFamily: language == "en-US" ? "farsan" : "vahid",
                      fontSize: language == "en-US" ? 19 : 20,
                    }}
                    value={english}
                    onChangeText={(newTxt) => setEnglish(newTxt)}
                  />
                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group
                  style={{
                    display: "flex",
                    flexDirection: language === "en-US" ? "row-reverse" : "row",
                    width: "100%",
                    justifyContent:
                      language === "en-US" ? "flex-end" : "flex-end",
                  }}
                  space={4}
                >
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontFamily: language == "en-US" ? "farsan" : "vahid",
                        fontSize: language == "en-US" ? 19 : 23,
                        paddingVertical: language == "en-US" ? 3 : 0,
                        paddingTop: language == "en-US" ? 6 : 6,
                      }}
                    >
                      {i18n.t("cancel")}
                    </Text>
                  </Button>
                  <Button colorScheme="teal" onPress={handleAddItem}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: language == "en-US" ? "farsan" : "vahid",
                        fontSize: language == "en-US" ? 19 : 22,
                        paddingVertical: language == "en-US" ? 3 : 0,
                        paddingTop: language == "en-US" ? 6 : 5,
                      }}
                    >
                      {i18n.t("save")}
                    </Text>
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Center>
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
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    position: "absolute",
    zIndex: 2,
    left: 10,
  },
  btn: {
    textAlign: "center",
    color: "white",
  },
});
