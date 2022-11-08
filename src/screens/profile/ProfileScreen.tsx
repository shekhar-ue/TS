import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
// var UserExperior = require('react-native-userexperior');
// import UserExperior from 'react-native-userexperior';
import {UserExperiorMaskView } from '../../utils/userexperior.util';
/**
 * ? Local Imports
 */
import createStyles from "./ProfileScreen.style";
// import Text from "@shared-components/text-wrapper/TextWrapper";

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  // const ref = useRef();
  // const ref = React.useRef();
  // const textInputRef: React.RefObject<Text> = React.createRef();

  return (
    <View style={styles.container}>
      {/* <Text h1 color={colors.text}> */}
      <Text
        h1 color={colors.text}
        ref={view => UserExperiorMaskView(view)}>
        Profile
      </Text>
    </View>
  );
};

export default ProfileScreen;
