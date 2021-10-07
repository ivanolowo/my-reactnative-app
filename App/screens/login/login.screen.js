import React from 'react';
import { SafeAreaView } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper';
import {loginStyle} from './login.style'

export const LoginScreen = () => {

    return (
        <SafeAreaView style={loginStyle.content}>
            <Card>
                <Card.Title title="Aline Learn better!"></Card.Title>
                <Card.Content>
                    <TextInput placeholder="Email" keyboardType="email-address"></TextInput>
                    <TextInput placeholder="Password" secureTextEntry="true"></TextInput>
                    <Button uppercase={false}>Forgot email/Password</Button>
                    <Button mode="contained">Login</Button>
                    <Button>Register</Button>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}