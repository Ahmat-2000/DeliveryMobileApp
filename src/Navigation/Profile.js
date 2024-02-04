import * as React from 'react';

import { View, Text, Button } from "react-native";

export default function Profile({navigation,route}) {
    const { nom } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>C'est le profile de {nom}</Text>
            {/* <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            />
            <Text>Go back to home</Text>
            <Button
            title="Go back"
            onPress={() => navigation.goBack()}
            /> */}
        </View>
    );
}