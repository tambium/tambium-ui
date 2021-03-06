import React from 'react';
import {
  colors,
  createTheme,
  generateShadow,
  hexToRgba,
  shadows,
  ThemeModes,
} from '@saruni-ui/theme';

const getContainerBoxShadow = ({
  isFocused,
  isInvalid,
  mode,
}: {
  isFocused: boolean;
  isInvalid?: boolean;
  mode: ThemeModes;
}) => {
  const shadowConfigs = {
    hasKeyline: [
      {
        values: shadows.state.keyline,
        color: hexToRgba(colors.border[mode], 0.36),
      },
    ],
    isFocused: [
      {
        values: shadows.state.focused,
        color: isInvalid
          ? hexToRgba(colors.borderCritical, 0.36)
          : hexToRgba(colors.focused[mode], 0.36),
      },
    ],
  };

  return generateShadow({
    props: { hasKeyline: true, isFocused },
    shadowConfigs,
  });
};

export interface TextfieldThemeProps {
  isInvalid?: boolean;
  isFocused: boolean;
  mode: ThemeModes;
}

export interface TextfieldThemeTokens {
  container: React.CSSProperties;
  input: React.CSSProperties;
}

export const Theme = createTheme<TextfieldThemeTokens, TextfieldThemeProps>(
  ({ isFocused, isInvalid, mode }) => {
    return {
      container: {
        backgroundColor: colors.surface[mode],
        borderRadius: 4,
        boxShadow: getContainerBoxShadow({ isFocused, isInvalid, mode }),
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease',
      },
      input: {
        backgroundColor: 'transparent',
        borderRadius: 4,
        borderWidth: 0,
        flex: '1 1 auto',
        height: 32,
        padding: '8px',
        outline: 0,
        width: '100%',
      },
    };
  },
);
