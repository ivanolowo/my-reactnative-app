import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style'

export const LoginScreen = ({ Login, error }) => {
    
    const [details, setDetails] = useState({ username: "", password: "" });
    
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.View} onSubmit={submitHandler}>
                <Card>
                    <Card.Title title="Aline Learn better!" titleStyle={loginStyle.cardTitle}></Card.Title>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    
                    <Card.Content>
                        <TextInput placeholder="Username"
                            type="text" name="username" id="username"
                            onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username}
                        />
                        <TextInput placeholder="Password" secureTextEntry="true"
                            type="password" name="password" id="password"
                            onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
                        />
                        <Button uppercase={false} style={loginStyle.cardButton}>Forgot email/Password</Button>
                        <Button mode="contained" style={loginStyle.cardButton} value="login" type="submit"onPress={submitHandler}>Login</Button>
                        <Button style={loginStyle.cardButton}>Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}