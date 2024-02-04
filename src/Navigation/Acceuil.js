import * as React from 'react';
import { View, Text, Button } from "react-native";

const Acceuil = ({navigation}) => {
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>C'est la page d'accueil</Text>
            {/* <Button 
            title='Go profile'
            onPress={() => navigation.navigate('Profile',{nom: "Ahmat"})}
            /> */}
        </View>
    );
}
export default Acceuil;