import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';


import { USERS, CATEGORIES, STREAMS } from '../../data';

const HomeScreen = ({ route, navigation }) => {


    const [selectedCategory, setSelectedCategory] = useState('Gaming')

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#000',
            padding: 32
        }}>

            <View style={{
                marginTop: 40,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{
                    width: 60,
                    height: 60,
                    borderRadius: 35,
                    borderColor: '#6441A5',
                    borderWidth: 4,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('../../assets/user0.png')} />
                </View>
                <Text style={{
                    color: '#FFF',
                    fontSize: 24,
                    marginLeft: 8
                }}>👋Hi, ReactNativeSpace!</Text>
            </View>


            <View style={{
                marginTop: 32,
                height: 100
            }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {USERS.map((item, index) =>
                        <View
                            key={index}
                            style={{
                                marginRight: 8,
                                width: 70,
                                height: 70,
                                borderRadius: 35,
                                borderColor: '#B20C0C',
                                borderWidth: item.isLive ? 2 : 0,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Image source={item.img} />
                            {item.isLive &&
                                <View style={{
                                    position: 'absolute',
                                    bottom: -15,
                                    backgroundColor: '#B20C0C',
                                    paddingHorizontal: 8,
                                    paddingVertical: 2,
                                    borderRadius: 16
                                }}>
                                    <Text style={{
                                        color: '#FFF',
                                        fontWeight: '600'
                                    }}>LIVE</Text>
                                </View>}
                        </View>
                    )}
                </ScrollView>
            </View>

            <View style={{
                height: 40,
                marginTop: 16
            }}>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {CATEGORIES.map((item, index) =>
                        <TouchableOpacity
                            key={index}
                            style={{
                                backgroundColor: selectedCategory === item.name ? '#6441A5' : '#211E26',
                                paddingVertical: 8,
                                paddingHorizontal: 16,
                                borderRadius: 8,
                                marginRight: 8
                            }}
                            onPress={() => setSelectedCategory(item.name)}>
                            <Text style={{
                                color: '#FFF',
                                fontSize: 16,
                                fontWeight: '400'
                            }}>{item.name}</Text>
                        </TouchableOpacity>)}
                </ScrollView>

            </View>

            <ScrollView style={{ marginTop: 8 }}>
                {STREAMS.map((item, index) =>
                    <View key={index}
                        style={{
                            marginTop: 16,
                            alignSelf: 'center'
                        }}>
                        <View>
                            <Image source={item.img} />
                            <View style={{
                                position: 'absolute',
                                backgroundColor: '#B20C0C',
                                paddingHorizontal: 8,
                                paddingVertical: 2,
                                borderRadius: 8,
                                margin: 8
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontSize: 12,
                                    fontWeight: '400'
                                }}>LIVE</Text>
                            </View>
                            <View style={{
                                position: 'absolute',
                                bottom: 0,
                                padding: 2,
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                paddingHorizontal: 8,
                                paddingVertical: 2,
                                borderRadius: 8,
                                margin: 8
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontSize: 12,
                                    fontWeight: '400'
                                }}>{item.viewers + ' Viewers'}</Text>
                            </View>
                        </View>

                        <View style={{
                            marginTop: 8,
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                            <View style={{width: 45, height: 45, borderRadius: 15}}>
                                <Image source={item.userimg} style={{
                                    width: 45,
                                    height: 45,
                                    resizeMode: 'cover'
                                }}/>
                            </View>
                            <View style={{marginLeft: 8}}>
                                <Text style={{
                                    color:'#FFF',
                                    fontSize: 18,
                                    fontWeight: '600'
                                }}>{item.title}</Text>
                                <Text style={{
                                    color:'#7C7C7D',
                                    fontSize: 14,
                                    fontWeight: '400'
                                }}>{item.game}</Text>
                            </View>
                        </View>
                    </View>)}
            </ScrollView>



        </View>
    )
}

export default HomeScreen;