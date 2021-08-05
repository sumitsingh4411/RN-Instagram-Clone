import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../assets/download.png')}
                    alt="instagram logo"
                    style={{ width: 200, height: 200, resizeMode: 'contain' }}
                />
            </View>
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Link to="/register" ><Text style={{ color: 'blue' }}> Sign Up with email </Text></Link>
                <Link to="/login" >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{fontSize:15}}>Already have an account ?</Text>
                        <Text style={{ color: 'blue' }}> Log in.</Text>
                    </View>
                </Link>
            </View>
        </View>
    );
}

