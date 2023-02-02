import { StatusBar } from 'react-native';
import { Background } from './src/components/background';


export default function App() {
  return (
    <Background>
      {/* Enable status bar at the top *1 */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
         />
    </Background>
  );
}


/*
Dev's comments

1 - The barStyle="light-content" prop in React Native's <StatusBar /> component sets the status bar text color to white, which provides better contrast against a dark background. The use of barStyle="light-content" is recommended when the background color of the app is dark, as the white text provides better visibility and contrast against the dark background.

We must specify this property to explicitly define the color for the "text" in the status bar; otherwise, the system would decide for the app. When the system decides, it may choose dark or a light color for the text. A dark color can fit well to our application if it offers a light background, but not for an app that offers a dark background. 

The next two properties, backgroundColor and translucent are a mystery to me. Setting only the backgroound color will make the status bar completly white, than I needed to set transluced property.
*/