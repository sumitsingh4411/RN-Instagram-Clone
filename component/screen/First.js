import React from 'react'
import { Image, TextInput, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, Feather } from 'react-native-vector-icons';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import AddScreen from './AddScreen';
import LikeScreen from './LikeScreen';
import ProfileScreen from './ProfileScreen';





const Tab = createBottomTabNavigator();
export default function First() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: () => { return null },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                        return <Ionicons name={iconName} size={30} color={color} />;
                    } else if (route.name === 'Search') {
                        iconName = 'search';
                        return <Ionicons name={iconName} size={30} color={color} />;
                    }
                    else if (route.name === 'Add') {
                        iconName = 'ios-add-circle-outline';
                        return <Ionicons name={iconName} size={30} color={color} />;
                    }
                    else if (route.name === 'Like') {
                        iconName = 'heart';
                        return <Ionicons name={iconName} size={30} color={color} />;
                    }
                    else if (route.name === 'Profile') {
                        iconName = 'face';
                        return <MaterialIcons name={iconName} size={30} color={color} />;
                    }

                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerTitle: props =>
                        <Image
                            source={require('../../assets/download.png')}
                            alt="instagram logo"
                            style={{ width: 100, height: 60, resizeMode: 'contain' }}
                        />
                    ,
                    headerRight: () => (
                        <Feather name='send' size={26} color='grey' style={{ padding: 10, marginRight: 20 }} />
                    ),
                }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    headerTitle: props =>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Ionicons name='arrow-back' size={30} style={{ marginRight: 20 }} />
                            <TextInput
                                placeholder='search'
                                style={{ width: 300, fontSize: 20, fontWeight: 'bold', backgroundColor: '#E8E8E8', height: 40, borderRadius: 10, padding: 3 }}
                            />
                        </View>
                    ,

                }}

            />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="Like" component={LikeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerTitle: 'sumit__singh_84'
                }}
            />
        </Tab.Navigator>
    )
}
