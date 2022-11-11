import React from 'react';

import AutoHeightWebView from 'react-native-autoheight-webview';
import {
  BASE_URL_FILE,
  defaultOptions,
  mathJaxOptions,
} from '@services/html-renderer/constants/html-renderer-constants';
import {
  htmlStyles,
  customStyle,
} from '@services/html-renderer/html-renderer-style';

interface IHtmlRenderer {
  htmlContent: string;
  hasLatex: boolean;
}

//TODO: re-arranging

const useHtmlRenderer: React.FC<IHtmlRenderer> = ({htmlContent, hasLatex}) => {
  const wrapMathjax = (content: string) => {
    const options = JSON.stringify(
      Object.assign({}, defaultOptions, mathJaxOptions),
    );

    return `
               <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
               <script type="text/x-mathjax-config">
                   MathJax.Hub.Config(${options});
   
                   MathJax.Hub.Queue(function() {
                       var height = document.documentElement.scrollHeight;
                       window.ReactNativeWebView.postMessage(String(height));
                       document.getElementById("formula").style.visibility = '';
                   });
               </script>
   
               <script type="text/javascript" async src="file:///android_asset/MathJaxOffline/MathJax.js?config=MML_CHTML-full"></script>
               <div id="formula" style="visibility: hidden; flexWrap: 'wrap'; overflow: 'hidden';">
           ${content}
                   
               </div>
           `;
  };

  /**
   * Custom styles to render options, solutions etc in black text over a white background
   */

  return (
    <AutoHeightWebView
      source={{
        html: hasLatex ? wrapMathjax(htmlContent) : htmlContent,
        baseUrl: BASE_URL_FILE,
      }}
      style={htmlStyles.inputStyle}
      customStyle={customStyle}
      scrollEnabled={true}
      androidLayerType="hardware"
      viewportContent={'width=device-width, user-scalable=no'}
      scalesPageToFit={true}
    />
  );
};

export default useHtmlRenderer;
