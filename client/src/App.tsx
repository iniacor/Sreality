// import React from 'react';
// import SearchPage from './searchPage/SearchPage';

// const App: React.FC = () => (
//   <ThemeProvider theme={theme} emotionCache={emotionCache}>
//     <SearchPage />
//   </ThemeProvider>
// );

// export default App;

import * as React from 'react';
import { EmotionCache } from '@emotion/react';
import SearchPage from './searchPage/SearchPage';

import createEmotionCache from '@theme/createEmotionCache';
import ThemeProvider from '@theme/ThemeProvider';
import theme from '@theme';

interface MyAppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = props => {
  const { emotionCache = clientSideEmotionCache } = props;

  return (
    <>
      <ThemeProvider theme={theme} emotionCache={emotionCache}>
        <SearchPage />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
