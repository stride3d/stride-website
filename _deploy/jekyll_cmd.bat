@echo off
setlocal
set JEKYLL_COMMAND=%*
set SOURCE_WEBSITE=%~dp0..
set DEST_WEBSITE=%~dp0\_site
REM Automatically setup Jekyll path if not set (for TeamCity)
IF [%JEKYLL_PATH%] == [] set JEKYLL_PATH=%~dp0..\_jekyll

REM *****************************
REM Check PreRequisites
REM *****************************
set JEKYLL_EXE_PATH=%JEKYLL_PATH%\ruby\bin\jekyll.bat
IF NOT EXIST "%JEKYLL_EXE_PATH%" GOTO :NO_JEKYLL_PATH

REM *****************************
REM Run Jekyll
REM *****************************
SET PATH="%JEKYLL_PATH%\ruby\bin";%PATH%
CALL "%JEKYLL_EXE_PATH%" %JEKYLL_COMMAND% -s %SOURCE_WEBSITE% -d %DEST_WEBSITE%
IF %ERRORLEVEL% NEQ 0 GOTO :JEKYLL_ERROR

ECHO Website has been correctly generated
GOTO :EXIT

:JEKYLL_ERROR
ECHO An error occured when generating the website
set ERRORLEVEL=1
GOTO :EXIT

:NO_JEKYLL_PATH
ECHO.
ECHO The JEKYLL_PATH = [%JEKYLL_PATH%] must point to a valid folder with a valid ruby\bin\jekyll location 
set ERRORLEVEL=1
GOTO :EXIT

:EXIT
exit /b %ERRORLEVEL%