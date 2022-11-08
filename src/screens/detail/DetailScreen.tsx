import React, { useMemo } from "react";
import { TextInput, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import createStyles from "./DetailScreen.style";
// import Text from "@shared-components/text-wrapper/TextWrapper";
import RNBounceable from "@freakycoder/react-native-bounceable";
// var UserExperior = require('react-native-userexperior');
import UserExperior from 'react-native-userexperior';


interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text
        ref={view => UserExperior.addInSecureViewBucket(view)}>
        Detail Screen
      </Text>
      <TextInput
        // style={styles.input}
        placeholder="User Nickname"
        ref={view => UserExperior.removeFromSecureViewBucket(view)}
        // onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
      />

      <RNBounceable
        style={styles.buttonStyle}
        onPress={() => NavigationService.goBack()}
      >
        <Text color={colors.white}>Go back to Home</Text>
      </RNBounceable>
    </View>
  );
};

export default DetailScreen;
