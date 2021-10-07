import React from 'react';
import { SafeAreaView, View } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style'

export const LoginScreen = () => {

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.View}>
                <Card>
                    <Card.Title title="Aline Learn better!" titleStyle={loginStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput placeholder="User-name"></TextInput>
                        <TextInput placeholder="Password" secureTextEntry="true"></TextInput>
                        <Button uppercase={false} style={loginStyle.cardButton}>Forgot email/Password</Button>
                        <Button mode="contained" style={loginStyle.cardButton}>Login</Button>
                        <Button style={loginStyle.cardButton}>Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}