import React from 'react';
import { View, Text, ScrollView,Alert } from 'react-native';
import InvitationCard from './components/InvitationCard'; 
import { globalStyles } from './styles/styles';    



export default function App() {
    const handleAccept=(title)=>{ 
        Alert.alert('${title} accepted');
    }
   
    return (
        <ScrollView style={globalStyles.container}>
        <View style={globalStyles.header}>
        <Text style={globalStyles.headerText}>Dəvətlər</Text>
        </View>
        <View style={globalStyles.cardContainer}>
        <InvitationCard
                title="ITAM - 1"
                description="Salam, bizə dizayner lazımdır. Komandamıza qoşulmaq istəyirsənmi?"
            />
        <InvitationCard
                title="ITAM - 2"
                description="Proqramçı axtarırıq. Komandamıza qoşul!"
            />
        <InvitationCard
                title="ITAM - 3"
                description="Salam, frontend inkişaf etdirici lazımdır. Bizimlə işləmək istəyirsənmi?"
            />
        </View>
        </ScrollView>
 );
}