import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';

export default props => {
  const { isDarkTheme } = useThemeContext();
  return (
    <img
      src={
        isDarkTheme ? useBaseUrl(props.darkMode) : useBaseUrl(props.lightMode)
      }
    />
  );
};
