import React from 'react'
import { View, Text, Image, Button } from 'react-native'


function ProfileScreen() {
    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Image
                        source={require('../../assets/logo.png')}
                        alt="instagram logo"
                        style={{ width: 100, height: 100, resizeMode: 'contain', borderRadius: 999 }}
                    />
                    <Text style={{ marginTop: 20 }}>sumit kumar singh</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>0</Text>
                    <Text>Posts</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>7</Text>
                    <Text>Followers</Text>
                </View>
                <View style={{ alignItems: 'center', marginRight: 20 }}>
                    <Text>14</Text>
                    <Text>Following</Text>
                </View>
            </View>
            <View style={{ marginTop: 30, padding: 20 }}>
                <Button title='Edit Profile' />
            </View>
        </View>
    );
}


export default ProfileScreen;