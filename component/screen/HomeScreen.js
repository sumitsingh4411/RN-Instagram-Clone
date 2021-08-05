import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Avatar } from 'native-base';
import { Provider as PaperProvider } from 'react-native-paper';
import { Card } from 'react-native-paper';
import Design from '../card/Design';
function HomeScreen() {
    return (
        <PaperProvider>
            <View>
                <Card>
                    <ScrollView horizontal style={{ padding: 5, zIndex: 999 }}>
                        <Avatar
                            source={{
                                uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                            }}
                            style={{ width: 80, height: 80, margin: 5, borderWidth: 3, borderColor: 'red' }}
                        >
                            SS
                        </Avatar>
                        <Avatar
                            source={{
                                uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                            }}
                            style={{ width: 80, height: 80, margin: 5, borderWidth: 3, borderColor: 'red' }}
                        >
                            SS
                        </Avatar>
                        <Avatar
                            source={{
                                uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                            }}
                            style={{ width: 80, height: 80, margin: 5, borderWidth: 3, borderColor: 'red' }}
                        >
                            SS
                        </Avatar>
                        <Avatar
                            source={{
                                uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                            }}
                            style={{ width: 80, height: 80, margin: 5, borderWidth: 3, borderColor: 'red' }}
                        >
                            SS
                        </Avatar>
                        <Avatar
                            source={{
                                uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                            }}
                            style={{ width: 80, height: 80, margin: 5, borderWidth: 3, borderColor: 'red' }}
                        >
                            SS
                        </Avatar>
                    </ScrollView>
                </Card>
                <ScrollView style={{marginBottom:100}}>
                    <Design />
                    <Design />
                </ScrollView>
            </View>
        </PaperProvider>
    );
}


export default HomeScreen;