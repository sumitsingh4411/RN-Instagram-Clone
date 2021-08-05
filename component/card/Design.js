import React from 'react'
import { View, Text, Image, KeyboardAvoidingView } from 'react-native'
import { Avatar, Input } from 'native-base';
import { Octicons, Feather, Fontisto } from 'react-native-vector-icons';

export default function Design() {
    return (
        <View style={{ marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center' }}>
                    <Avatar
                        source={{
                            uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                        }}
                        style={{ width: 40, height: 40, margin: 5, borderWidth: 3, borderColor: 'red' }}
                    >
                        SS
                    </Avatar>
                    <View style={{ marginLeft: 4  }}>
                        <Text>sumit singh</Text>
                        <Text>sumit singh</Text>
                    </View>
                </View>
                <View style={{ padding: 10, marginRight: 10 }}>
                    <Octicons name='kebab-vertical' size={24} />
                </View>
            </View>
            <View>
                <Image
                    style={{ width: '100%', height: 300, resizeMode: 'stretch' }}
                    source={{
                        uri: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Feather name='heart' size={30} style={{ marginLeft: 3 }} />
                    <Fontisto name='hipchat' size={30} style={{ marginLeft: 15 }} />
                    <Feather name='send' size={30} style={{ marginLeft: 15 }} />
                </View>
                <View>
                    <Feather name='bookmark' size={30} style={{ marginRight: 10 }} />
                </View>
            </View>
            <View style={{padding:2}}>
                <Text>2345 likes</Text>
                <Text>Name sumit kumar singh</Text>
                <Text>...more</Text>
            </View>
            <KeyboardAvoidingView>
                <Input
                    InputLeftElement={<Avatar
                        source={{
                            uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                        }}
                        style={{ width: 40, height: 40, marginLeft: 10, borderWidth: 3, borderColor: 'red' }}
                    >
                        SS
                    </Avatar>}
                    placeholder='Add a comment'
                    InputRightElement={<Text style={{marginRight:10}}>❤️</Text>}
                />
            </KeyboardAvoidingView>
        </View>
    )
}
