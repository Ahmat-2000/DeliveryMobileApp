import { useState } from "react";
import { StyleSheet,Text, View, TextInput, Button, Alert } from "react-native"

export default function Connexion(props) {
    const [numberInput, setNumberInput] = useState("")
    const [nameInput, setNameInput] = useState("")
    const handleSubmit = (event) =>{

    }
    return (
    <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Numéro de tele"
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
          placeholder="Nom"
        />
        <Button 
            title="Envoyer"
            accessibilityLabel="envoie du formulaire de connexion"
            onPress={(e) => handleSubmit(e)}
            style={styles.btn}
        />
    </View>
    );
};
  
const styles = StyleSheet.create({
    container:{
        width: "80%",
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginHorizontal: 'auto'
    },
    input: {
        minWidth: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    btn:{
        maxWidth: 40,
    }
});
