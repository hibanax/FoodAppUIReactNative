import * as React from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import profile from '../assets/images/profile.png';
import menu from '../assets/images/menu.png';
import colors from '../assets/colors/colors';
import fontWeight from '../assets/fonts/fontweight';


Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = ({ navigation }) => {


    const renderCategoryItem = ({ item }) => {
        return (
            <View 
            style={[
                styles.kategorieItemWrapper, 
                {
                    backgroundColor: item.selected ? colors.glowny : colors.tlo,            
                    marginLeft: item.id == 1 ? 20 : 0,
                },
            ]}>
                <Image source={item.image} style={styles.kategorieItemImage} />
                <Text style={styles.kategorieItemTytul}>{item.title}</Text>
                <View 
                style={[
                    styles.kategorieSelectWrapper, 
                {
                    backgroundColor: item.selected ? colors.tlo : colors.pob,
                },
                ]}>
                    <Feather 
                    name="chevron-right" 
                    size={8} 
                    style={styles.kategorieSelectItem}
                    color={item.selected ? colors.text : colors.tlo}
                    />
                </View>
            </View>
        );
    };


  return (
    <View style={StyleSheet.container}>

        <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} 
        snapToAlignment="top"
        decelerationRate="normal"
        >

        {/* Header */}
        <SafeAreaView >
            <View style={styles.headerWrapper}>
                <Image 
                source={profile} 
                style={styles.profileImage} />
                <Image 
                source={menu} 
                style={styles.menuImage} />
            </View>
        </SafeAreaView>

        {/* Tytuly */}
        <View style={styles.titleWrapper}>
            <Text style={styles.malytytul}>Jedzenie</Text>
            <Text style={styles.duzytytul}>Dostawa</Text>
        </View>

        {/* Szukaj */}
        <View style={styles.szukajWrapper}>
            <Feather name="search" size={16} color={colors.text} />
            <View style={styles.szukaj}>
                <Text style={styles.szukajText}>Szukaj</Text>
            </View>
        </View>

        {/* Kategorie */}
        <View style={styles.kategorieWrapper}>
            <Text style={styles.kategorieTytul}>Kategorie</Text>
            <View style={styles.kategorieListaWrapper}>
                <FlatList 
                data={categoriesData}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate="normal"
                />
            </View>
        </View>

        {/* Popularne */}
        <View style={styles.popularneWrapper}>
        <Text style={styles.popularneTytul}>Popularne</Text>
        {popularData.map(item => (
            <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('Details', {item: item,}
            )} >
            <View
            
            style={[styles.popularneKartaWrapper, 
                {
                    marginTop: item.id == 1 ? 10 : 20,
                },
            ]}>
                <View>
                    <View>
                        <View style={styles.popularneTopWrapper}>
                            <MaterialCommunityIcons
                             name="crown" 
                             size={12} 
                             color={colors.glowny} />
                            <Text style={styles.popularneTopText}>Top tygodnia!</Text>
                        </View>
                        <View style={styles.popularneTytulyWrapper}>
                            <Text style={styles.popularneTytulyTytul}>{item.title}</Text>
                            <Text style={styles.popularneTytulyWaga}>Waga: {item.weight}</Text>
                        </View>
                    </View>
                    <View style={styles.popularneKartaDol}>
                        <View style={styles.pizzaprzycisk}>
                            <Feather name="plus" size={10} color={colors.text} />
                        </View>
                        <View style={styles.ocenaWrapper}>
                            <MaterialCommunityIcons name="star" size={10} color={colors.text} />
                            <Text style={styles.ocena}>{item.rating}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.popularneKartaPrawo}>
                   <Image source={item.image} style={styles.popularneKartaImage} /> 
                </View>
            </View>
            </TouchableOpacity>
        ))} 
        </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
    flex: 1,
    },

    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },

    profileImage: {
        width: 41,
        height: 41,
        borderRadius: 40,
    },

    titleWrapper: {
        paddingHorizontal: 20,
    },

    malytytul: {
        fontSize: 16,
        fontWeight: fontWeight.Light,
        fontFamily: 'Helvetica',
        color: colors.text,
    },

    duzytytul: {
        fontSize: 32,
        fontFamily: 'Helvetica',
        fontWeight: fontWeight.Heavy,
        color: colors.text,
        marginTop: 5,
    },

    szukajWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 18,
    },
    
    szukaj: {
        flex: 1,
        marginLeft: 9,
        borderBottomColor: colors.textj,
        borderBottomWidth: 2,
    },

    szukajText: {
        fontWeight: fontWeight.Regular,
        fontSize: 14,
        marginBottom: 0.9, 
        color: colors.textj,
    },
    
    kategorieWrapper: {
        marginTop: 30,
    },

    kategorieTytul: {
        fontSize: 16,
        paddingHorizontal: 20,
        fontWeight: fontWeight.Bold,
    },

    kategorieListaWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },

    kategorieItemWrapper: {
        backgroundColor: colors.glowny,
        marginRight: 20,
        borderRadius: 20,
        shadowColor: "#262626",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.09,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 6,
    },

    kategorieItemImage: {
        width: 60,
        height: 60,
        marginTop: 24,
        alignSelf: 'center',
        marginHorizontal: 20,
    },

    kategorieItemTytul: {
        textAlign: 'center',
        fontWeight: fontWeight.Medium,
        fontSize: 14,
        marginTop: 15,
    },

    kategorieSelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 18,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
    },

    kategorieSelectItem: {
        alignSelf: 'center',

    },

    popularneWrapper: {
        paddingHorizontal: 20,
        shadowColor: "#262626",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.18,
        shadowRadius: 9,
        elevation: 21,
    },
    
    popularneTytul: {
        fontSize: 16,
        fontWeight: fontWeight.Bold,
        marginBottom: 6,
    },

    popularneKartaWrapper: {
        backgroundColor: colors.tlo,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        

    },

    popularneTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    popularneTopText: {
        marginLeft: 10,
        fontWeight: fontWeight.Semibold,
        fontSize: 14,
},

    popularneTytulyWrapper: {
        marginTop: 20,
    },

    popularneTytulyTytul: {
        fontWeight: fontWeight.Semibold,
        fontSize: 14,
        color: colors.text,
    },

    popularneTytulyWaga: {
        fontWeight: fontWeight.Medium,
        fontSize: 12,
        color: colors.textj,
        fontStyle: 'italic',
        marginTop: 5,
    },

    popularneKartaDol: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },

    pizzaprzycisk: {
        backgroundColor: colors.glowny,
        paddingHorizontal: 40,
        paddingVertical: 21,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },

    ocenaWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    ocena: {
        fontWeight: fontWeight.Semibold,
        fontSize: 12,
        color: colors.text,
        marginLeft: 5,
    },

    popularneKartaPrawo: {
        marginLeft: 40,
    },

    popularneKartaImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },

});