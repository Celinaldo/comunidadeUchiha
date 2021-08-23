import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useFonts, DonegalOne_400Regular } from '@expo-google-fonts/dev';

const { width, height } = Dimensions.get("window");

export default function Home() {
    const [loading] = useFonts({
        FontGoogle: DonegalOne_400Regular
    });

    if (!loading) {
        return null;
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.box}>

                    <Image
                        source={require("../image/rinegam.png")}
                        style={{
                            width: 250,
                            height: 250,
                            marginHorizontal:80,
                            marginTop:150,
                        }}
                    />

                </View>
                <View style={styles.box2}>
                    <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#A50C0E" }}
                    >
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 75 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <AntDesign
                                name="user"
                                size={32}
                                color='black'
                                style={{ marginLeft: 15, marginTop: 40 }}
                            />
                            <TextInput
                                placeholder="Clã"
                                placeholderTextColor='black'
                                style={styles.textinputcla}
                                keyboardType='email-address'
                                textAlign='center'
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <AntDesign
                                name="lock1"
                                size={32}
                                color='black'
                                style={{ marginTop: 30, marginLeft: 15 }}
                            />
                            <TextInput style={styles.textinputsenha}
                                placeholder="Password"
                                placeholderTextColor='black'
                                textAlign='center'
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#A50C0E',
                                width: 150,
                                height: 50,
                                borderRadius: 30
                            }}>
                                <Text style={{
                                    fontFamily: 'FontGoogle',
                                    fontSize: 18,

                                }}>Entra</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonSign}>
                            <TouchableOpacity>
                                <Text>Sign-In</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>

            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    box: {
        height: 0.63 * height,
        backgroundColor: "#A50C0E",
        borderBottomRightRadius: 75,
    },
    box2: {
        flex: 1,
    },
    textinputcla: {
        width: '80%',
        height: 50,
        marginTop: 30,
        marginRight: 30,
        borderRadius: 20,
        borderWidth: 1,
        fontFamily: 'FontGoogle'
    },
    textinputsenha: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        marginRight: 30,
        marginTop: 20,
        borderRadius: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        marginTop: 10,
    },
    buttonSign: {
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20

    }
})