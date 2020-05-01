@echo off
setlocal
set DEST_WEBSITE=%~dp0\_site
set PUBLISH_PROFILE=%~dp0\website.PublishSettings

REM *****************************
REM Check PreRequisites
REM *****************************
IF NOT EXIST "%PUBLISH_PROFILE%" GOTO :NO_AZURE_PUBLISH_PROFILE

CALL "%~dp0\build_website.bat"
IF %ERRORLEVEL% NEQ 0 GOTO :EXIT

REM *****************************
REM Generate web.config
REM *****************************
IF NOT "%WEBCONFIG_TRANSFORM%" == "" (
  echo Applying transform from file web.%WEBCONFIG_TRANSFORM%.config
  ctt source:..\web.config transform:..\web.%WEBCONFIG_TRANSFORM%.config  d:_site\web.config preservewhitespace:true indent:true parameters:%WEBCONFIG_TRANSFORM_PARAMETERS%
  IF %ERRORLEVEL% NEQ 0 GOTO :EXIT
)

REM *****************************
REM Azure Deploy
REM *****************************
set WAWSDeploy_COMMAND=%~dp0\WAWSDeploy.exe
"%WAWSDeploy_COMMAND%" "%DEST_WEBSITE%" "%PUBLISH_PROFILE%" /p %1 /DeleteExistingFiles
IF %ERRORLEVEL% NEQ 0 GOTO :WAWSDeploy_ERROR

ECHO Website has been correctly deployed
GOTO :EXIT

:NO_AZURE_PUBLISH_PROFILE
ECHO No Azure publish profile is setup. Please download and place it to [%PUBLISH_PROFILE%]
set ERRORLEVEL=1
GOTO :EXIT

:WAWSDeploy_ERROR
ECHO Unexpected error while deploying to azure website
set ERRORLEVEL=1
GOTO :EXIT

:EXIT
exit /b %ERRORLEVEL%