
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
// import {Ionicons} from 'react-native-vector-icons';
import Profile from './Profile';
import Acceuil from './Acceuil';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Restaurants from './Restaurants';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Acceuil') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile' ) {
              iconName = focused ? 'person' : 'person-outline';
            }
            else if (route.name === 'Connexion' ) {
                iconName = focused ? 'person' : 'person-outline';
            }
            else if (route.name === 'Inscription' ) {
                iconName = focused ? 'person' : 'person-outline';
            }
            else if (route.name === 'Restaurants') {
                iconName = focused ? 'restaurant' : 'restaurant-outline';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // tabBarActiveTintColor: 'tomato',
          // tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 10
          },
          tabBarLabelStyle:{
            padding: 10
          }
          // tabBarShowLabel: false
        })}
      >
        <Tab.Screen
          name="Acceuil"
          component={Acceuil}
          options={{
            title: 'Accueil',
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{title: 'Profile'}}
          initialParams={{nom: "Inconnu"}}
        />
        <Tab.Screen 
          name="Connexion" 
          component={Connexion} 
          options={{title: 'Connexion'}}
        />
        <Tab.Screen 
          name="Inscription" 
          component={Inscription} 
          options={{title: 'Inscription'}}
        />

        <Tab.Screen 
          name="Restaurants" 
          component={Restaurants} 
          options={{title: 'Restaurants'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}