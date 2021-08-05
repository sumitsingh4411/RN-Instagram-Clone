import * as React from 'react';
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    HStack,
} from 'native-base';
import { Link } from "react-router-native";
import { View, Image } from 'react-native';
export default function Register() {

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
            <Box
                safeArea
                flex={1}
                p={2}
                w="90%"
                mx='auto'
            >
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../../assets/logo.png')}
                        alt="instagram logo"
                        style={{ width: 50, height: 50, resizeMode: 'contain' }}
                    />
                    <Text style={{ padding: 15, marginTop: 10, fontSize: 29, fontWeight: 'bold', color: 'cyan' }}>Register</Text>
                </View>

                <VStack space={2} mt={5}>
                    <FormControl>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Full Name
                        </FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Email
                        </FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Password
                        </FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Confirm Password
                        </FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    <VStack space={2} mt={5}>
                        <Button colorScheme="cyan" _text={{ color: 'white' }}>
                            SignUp
                        </Button>

                        <HStack justifyContent="center" alignItem='center'>
                            <HStack justifyContent="center">
                                <Link _text={{ color: 'cyan.500', bold: true, fontSize: 'm', marginTop:10 }} to="/login">
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>Already have an account ?</Text>
                                        <Text style={{ color: 'blue' }}> Log in.</Text>
                                    </View>
                                </Link>
                            </HStack>
                        </HStack>
                    </VStack>
                </VStack>
            </Box>
        </View>
    );
}