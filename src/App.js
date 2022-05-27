import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import{
  Authenticator,
  Button,
  Heading,
  Image,
  View,
  Card

} from "@aws-amplify/ui-react";


export default function App() {
  return (
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
      {({ signOut, user }) => (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading>Hello There</Heading>
        <Button onClick={signOut}>Sign out</Button>
      </Card>
 


    





    </View>
      )}
    </Authenticator> 
  );
}


