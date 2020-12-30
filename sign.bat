if exist "%cd%\key1.keystore" del "%cd%\key1.keystore" &&
ionic cordova platform update android && 
ionic cordova platform rm android
ionic cordova platform add android
ionic cordova build android --prod --release &&  jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore key1.keystore "%cd%\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"  ideaTeam -storepass idea@24  
&& zipalign -f -v 4 "%cd%\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"  "%cd%\mingo.apk"

  && 
 keytool -genkey -v -keystore key1.keystore -keyalg RSA -keysize 2048 -validity 10000 -genkey -noprompt -alias ideaTeam -dname "CN=idea, OU=idea, O=organization, L=idleb, S=saraqeb, C=22727" -storepass idea@24 -keypass idea@24 
  &&  

if exist "%cd%\key1.keystore" del "%cd%\key1.keystore" &&



ionic cordova build android --prod --release && jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore key1.keystore "%cd%\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"  ideaTeam -storepass idea@24  && zipalign -f -v 4 "%cd%\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"  "%cd%\mingo.apk" && zipalign -f -v 4 "%cd%\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"  "%cd%\mingo.apk"
 keytool -genkey -v -keystore key1.keystore -keyalg RSA -keysize 2048 -validity 10000 -genkey -noprompt -alias ideaTeam -dname "CN=idea, OU=idea, O=organization, L=idleb, S=saraqeb, C=22727" -storepass idea@24 -keypass idea@24 

ionic cordova platform add android 
ionic cordova platform add android@7.1.2
ionic cordova build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore key1.keystore "platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"  ideaTeam -storepass idea@24  
zipalign -f -v 4 "platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"  "mingo.apk"












ionic cordova platform update android
ionic cordova platform rm android
ionic cordova platform add android@7.1.2
ionic cordova platform add android
ionic cordova build android --prod --release
keytool -genkey -v -keystore key1.keystore -keyalg RSA -keysize 2048 -validity 10000 -genkey -noprompt -alias ideaTeam -dname "CN=idea, OU=idea, O=organization, L=idleb, S=saraqeb, C=22727" -storepass idea@24 -keypass idea@24 
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore key1.keystore "platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"  ideaTeam -storepass idea@24 
zipalign -f -v 4 "platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"  "mingo.apk"
