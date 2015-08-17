App.info({
  name: 'Nossle',
  description: 'Find all the mobile HTML5 games in one spot',
  author: 'Kris Hamoud && Duylam Nguyen-Ngo',
  website: 'http://nossle.meteor.com',
  version: '0.0.1'
});

App.icons({
  'iphone': 'resources/icons/logo.png',
  'iphone_2x': 'resources/icons/logo.png',
  'iphone_3x': 'resources/icons/logo.png',
  'ipad': 'resources/icons/logo.png',
  'ipad_2x': 'resources/icons/logo.png',
  'android_ldpi': 'resources/icons/logo.png',
  'android_mdpi': 'resources/icons/logo.png',
  'android_hdpi': 'resources/icons/logo.png',
  'android_xhdpi': 'resources/icons/logo.png'
});

App.launchScreens({
  'iphone': 'resources/splash/logo.png',
  'iphone_2x': 'resources/splash/logo.png',
  'iphone5': 'resources/splash/logo.png',
  'iphone6': 'resources/splash/logo.png',
  'iphone6p_portrait': 'resources/splash/logo.png',
  'iphone6p_landscape': 'resources/splash/logo.png',
  'ipad_portrait': 'resources/splash/logo.png',
  'ipad_portrait_2x': 'resources/splash/logo.png',
  'ipad_landscape': 'resources/splash/logo.png',
  'ipad_landscape_2x': 'resources/splash/logo.png',
  'android_ldpi_portrait': 'resources/splash/logo.png',
  'android_ldpi_landscape': 'resources/splash/logo.png',
  'android_mdpi_portrait': 'resources/splash/logo.png',
  'android_mdpi_landscape': 'resources/splash/logo.png',
  'android_hdpi_portrait': 'resources/splash/logo.png',
  'android_hdpi_landscape': 'resources/splash/logo.png',
  'android_xhdpi_portrait': 'resources/splash/logo.png',
  'android_xhdpi_landscape': 'resources/splash/logo.png'
});

App.setPreference('StatusBarOverlaysWebView', true);
App.setPreference('StatusBarStyle', 'default');
