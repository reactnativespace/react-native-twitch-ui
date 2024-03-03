import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const LoginScreen = ({ route, navigation }) => {


    const [isRememberMe, setIsRememberMe] = useState(false);


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#6441A5',
            padding: 32
        }}>
            <Image
                style={{
                    marginTop: 64,
                    resizeMode: 'contain',
                    width: 75
                }}
                source={require('../../assets/logo.png')} />
            <Text
                style={{
                    fontSize: 32,
                    fontWeight: '600',
                    color: '#FFF',
                    marginTop: 8
                }}
            >Welcome🎉</Text>

            <View style={{ marginTop: 32 }}>
                <Text style={{
                    fontSize: 16,
                    color: '#FFF'
                }}>Email</Text>
                <TextInput
                    style={{
                        backgroundColor: '#FFF',
                        padding: 16,
                        marginTop: 8,
                        borderRadius: 8
                    }}
                    placeholder='Enter your email' />
            </View>

            <View style={{ marginTop: 8 }}>
                <Text style={{
                    fontSize: 16,
                    color: '#FFF'
                }}>Password</Text>
                <TextInput
                    style={{
                        backgroundColor: '#FFF',
                        padding: 16,
                        marginTop: 8,
                        borderRadius: 8
                    }}
                    placeholder='Enter your password'
                    secureTextEntry={true} />
            </View>


            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 8
                }}>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={() => setIsRememberMe(state => !state)}>
                    <FontAwesome5 name={isRememberMe ? 'check-square' : 'square'} size={20} color='#FFF' />
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#FFF',
                            marginLeft: 8
                        }}
                    >Remember me</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        color: '#FFF',
                        fontWeight: '600',
                        textDecorationLine: 'underline'
                    }}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>

            </View>


            <TouchableOpacity style={{
                backgroundColor: '#FFF',
                borderRadius: 8,
                padding: 16,
                marginTop: 32,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={()=>navigation.navigate('Home')}>
                <Text style={{
                    fontSize: 16,
                    color: '#6441A5'
                }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 8
                }}>
                <Text style={{
                    fontSize: 16,
                    color: '#FFF'
                }}>Dont't have an account?</Text>
                <Text style={{
                    fontSize: 16,
                    color: '#FFF',
                    fontWeight: '600',
                    textDecorationLine: 'underline',
                    marginLeft: 8
                }}>Sign up</Text>
            </TouchableOpacity>








        </View>
    )
}

export default LoginScreen;