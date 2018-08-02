@echo off
call "%~dp0\jekyll_cmd.bat" serve --incremental
exit /b %ERRORLEVEL%