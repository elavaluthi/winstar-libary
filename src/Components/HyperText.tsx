// import React from 'react';
// import { Text } from 'react-native';
// import type { TextStyle, GestureResponderEvent } from 'react-native';

// interface HyperTextProps {
//   text: string;
//   handleOnPress: (event: GestureResponderEvent) => void;
//   styles?: TextStyle; // Optional custom styles
//   fontFamily?: string; // Optional font family
// }

// export default function HyperText({
//   text,
//   handleOnPress,
//   styles,
//   fontFamily = 'Arial', // Default font family if none is provided
// }: HyperTextProps) {
//   return (
//     <Text
//       style={[
//         { color: 'skyblue', textDecorationLine: 'underline', fontFamily },
//         styles, // Apply any additional styles passed
//       ]}
//       onPress={handleOnPress} // Directly pass the function without wrapping it in an anonymous function
//     >
//       {text}
//     </Text>
//   );
// }
import React from 'react';
import { Text } from 'react-native';
import type { TextStyle, GestureResponderEvent } from 'react-native';

interface HyperTextProps {
  text: string;
  handleOnPress: (event: GestureResponderEvent) => void;
  styles?: TextStyle; // Optional custom styles
  fontFamily?: string; // Optional font family
}

const HyperText: React.FC<HyperTextProps> = ({ text, handleOnPress, styles, fontFamily }) => {
  return (
    <Text
      onPress={handleOnPress}
      style={[styles, fontFamily ? { fontFamily } : {}]}
    >
      {text}
    </Text>
  );
};

export default HyperText;