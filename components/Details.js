import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import fontWeight from "../assets/fonts/fontweight";

import categoriesData from "../assets/data/categoriesData";
import popularData from "../assets/data/popularData";

export default Details = ({ route, navigation }) => {
  const { item } = route.params;
 



  const renderSkladnikiItem = ({ item }) => {
    return (
        
      <View style={[styles.skladnikiItemWrapper, {
          backgroundColor: item.selected ? colors.glowny : colors.tlo,
          marginLeft: item.id === '0' ? 20 : 5, 
      } ]}>
        <Image source={item.image} style={styles.skladnikImage} />
      </View>
    );
    
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLewo}>
              <Feather name="chevron-left" size={12} color={colors.text} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Dodałeś do ulubionych " + item.title + " 🥰")}>
          <View style={styles.headerPrawo}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Title */}
      <View style={styles.tytulyWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* Cena */}
      <View style={styles.cenaWrapper}>
        <Text style={styles.cena}>{item.cena}</Text>
      </View>

      {/* Pizza info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLewoWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTytuly}>Rozmiar</Text>
            <Text style={styles.infoItemText}>
              {item.rozmiarNazwa} {item.rozmiarNumer}
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTytuly}>Ciasto</Text>
            <Text style={styles.infoItemText}>{item.ciasto}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTytuly}>Czas dostawy</Text>
            <Text style={styles.infoItemText}>{item.czasDostawy}</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>

      {/* Skladniki */}
      <View style={styles.skladnikiWrapper}>
        <Text style={styles.skladnikiTytul}>Składniki</Text>
        <View style={styles.sklanikiListaWrapper}>
          <FlatList
            data={item.skladniki}
            renderItem={renderSkladnikiItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="normal"
          />
        </View>
      </View>

      {/* Skladanie zamowienia */}
      <TouchableOpacity onPress={() => alert("Twoje zamówienie na " + item.title + " zostało złożone, życzymy smacznego 😃")}>
          <View style={styles.zamowienieWrapper}>
              <Text style={styles.zamowienieText}>Złóż zamówienie</Text>
              <Feather name="chevron-right" size={18} color={colors.text}/>
          </View>
      </TouchableOpacity>
    </View>
    
  );
  
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  headerLewo: {
    borderColor: colors.textj,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },

  headerPrawo: {
    backgroundColor: colors.glowny,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.glowny,
    borderWidth: 2,
  },

  tytulyWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  title: {
    fontWeight: fontWeight.Bold,
    fontSize: 32,
    color: colors.text,
    width: "50%",
  },

  cenaWrapper: {
    paddingHorizontal: 20,
    marginTop: 21,
  },

  cena: {
    fontWeight: fontWeight.Semibold,
    fontSize: 32,
    color: colors.pob,
  },

  infoWrapper: {
    marginTop: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoLewoWrapper: {
    paddingLeft: 20,
  },

  infoItemWrapper: {
    marginBottom: 20,
  },

  infoItemTytuly: {
    fontWeight: fontWeight.Medium,
    fontSize: 15,
    color: colors.textj,
  },

  infoItemText: {
    fontWeight: fontWeight.Semibold,
    fontSize: 17,
    color: colors.text,
    paddingTop: 7,
  },

  itemImage: {
    resizeMode: "contain",
    marginLeft: 20,
  },

  skladnikiWrapper: {
    marginTop: 20,
  },

  skladnikiTytul: {
    paddingHorizontal: 20,
    fontWeight: fontWeight.Bold,
    fontSize: 16,
    color: colors.text,
  },

  sklanikiListaWrapper: {
    paddingVertical: 20,
  },

  skladnikiItemWrapper: {
    backgroundColor: colors.tlo,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 15,
    borderRadius: 15,

    shadowColor: "#262626",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.09,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 6
  },

    skladnikImage: {
        resizeMode: 'contain',
        height: 60,
        width: 70,
},

zamowienieWrapper: {
    marginTop: 21,
    marginHorizontal: 20,
    backgroundColor: colors.glowny,
    flexDirection: "row",
    paddingVertical: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

},
zamowienieText: {
    fontWeight: fontWeight.Bold,
    fontSize: 15,
    color: colors.text,
    marginRight: 10,
},
});