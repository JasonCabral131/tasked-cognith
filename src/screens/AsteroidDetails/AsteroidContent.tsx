import React, {Component} from 'react';
import {Colors} from './../../fixture/colors';
import {Alert, Linking, View, Text} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {fontSize} from '../../fixture/fonts';
type Props = {
  label: String;
  subLabel: String | number | undefined;
  isUrl?: boolean;
  px?: number | string;
};
export class AsteroidContent extends Component<Props> {
  render() {
    return (
      <View
        testID="asteroid-content-container"
        style={{
          marginTop: 8,
          paddingHorizontal: this.props.px ? parseFloat(this.props.px as string) : 8,
        }}>
        <Text style={{fontSize: fontSize.sm, fontWeight: '700'}}>
          {this.props?.label}
        </Text>
        {this.props.isUrl ? (
          <Text
            style={{
              fontSize: fontSize.sm,
              fontWeight: '600',
              color: Colors.primary,
            }}
            onPress={() => {
              Linking.canOpenURL(this.props.subLabel as string).then(
                supported => {
                  if (supported) {
                    Linking.openURL(this.props.subLabel as string);
                  } else {
                    Alert.alert('Failed to open url');
                  }
                },
              );
            }}>
            {this.props.subLabel}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: fontSize.sm,
              fontWeight: '500',
              color: Colors.secondaryColor,
            }}
            onPress={() => {
              Clipboard.setString(this.props.subLabel as string);
              Alert.alert('copy to clipboard');
            }}>
            {this.props.subLabel}
          </Text>
        )}
      </View>
    );
  }
}

export default AsteroidContent;