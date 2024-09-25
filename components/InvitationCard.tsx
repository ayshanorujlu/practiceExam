import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';

const InvitationCard = () => {



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={image} style={styles.image}>  
            <Text style={styles.headerText}>ITAM</Text>
        </ImageBackground>
      </View>
    
      
        
    </View>
  );
};

export default InvitationCard;