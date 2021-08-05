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

export default function Login() {

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
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
                    <Text style={{ padding: 15, marginTop: 30, fontSize:29, fontWeight:'bold', color:'cyan' }}>Login</Text>
                </View>


                <VStack space={2} mt={5}>
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
                    <VStack space={2} mt={5}>
                        <Button colorScheme="cyan" _text={{ color: 'white' }}>
                            Login
                        </Button>

                        <HStack justifyContent="center" alignItem='center' >
                            <HStack justifyContent="center">
                                <Link _text={{ color: 'cyan.500', bold: true, fontSize: 'sm' }} to="/register">
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: 'blue' }}>Create an account ? </Text>
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