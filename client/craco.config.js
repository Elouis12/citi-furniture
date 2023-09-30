module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        const oneOfLoc = webpackConfig.module.rules.findIndex((rule) => typeof rule.oneOf !== 'undefined');
        
        if(webpackConfig.module.rules[oneOfLoc]) {
          const cssRuleLoc = webpackConfig.module.rules[oneOfLoc].oneOf.findIndex((rule) => String(rule.test) === String(/\.css$/));
          if(webpackConfig.module.rules[oneOfLoc].oneOf[cssRuleLoc]) {
            delete webpackConfig.module.rules[oneOfLoc].oneOf[cssRuleLoc].include;
            delete webpackConfig.module.rules[oneOfLoc].oneOf[cssRuleLoc].exclude;
          }
        }
        
        return webpackConfig;
      }
    }
  }
  