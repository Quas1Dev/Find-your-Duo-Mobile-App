import { ImageBackground } from 'react-native';
import { styles } from './styles';

import backgroundImage from '../../assets/background-galaxy.png';

interface BackgroundProps {
    children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
    
    return (
        // Renders a background to the image
        <ImageBackground
            source={backgroundImage}
            defaultSource={backgroundImage}
            style={styles.container}>
            {children}
        </ImageBackground>
    )
}