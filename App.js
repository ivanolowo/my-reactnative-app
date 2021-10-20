import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './App/screens/login/login.screen'
import { theme } from './App.style'


export default function App() {
  const [user, setUser] = useState({username: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.username === details.password) {
      console.log('Please try again, password cannot be the same as username');
      setError('Please try again, password cannot be the same as username')
    } else {
      console.log('You are logged in successfully')
      setUser({
        username: details.username
      });
    }
  }

  const Logout = () => {
    setUser({ username: "" });
  }
  return (
    <PaperProvider theme={theme}>
      {(user.username !== "") ? (
        <div>
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
          <LoginScreen Login={Login} error={error} />
      )}
    </PaperProvider>
  );
}

