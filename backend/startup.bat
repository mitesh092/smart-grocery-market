@echo off
rem Set Java environment variables
set JAVA_HOME=C:\Program Files\Java\jdk-21
set JRE_HOME=C:\Program Files\Java\jdk-21
set PATH=%JAVA_HOME%\bin;%PATH%

rem Set Tomcat environment variable
set CATALINA_HOME=C:\apache-tomcat-11.0.0

rem Display variables for verification
echo JAVA_HOME=%JAVA_HOME%
echo JRE_HOME=%JRE_HOME%
echo CATALINA_HOME=%CATALINA_HOME%

rem Shutdown Tomcat (optional, if it's already running)
C:\apache-tomcat-11.0.0\bin\shutdown.bat

rem Start Tomcat
C:\apache-tomcat-11.0.0\bin\startup.bat
