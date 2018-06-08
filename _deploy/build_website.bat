@echo off
call "%~dp0\jekyll_cmd.bat" build
exit /b %ERRORLEVEL%