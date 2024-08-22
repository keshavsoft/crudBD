ECHO OFF

rem Check if VS Code is installed - Checks if its in the path
rem Not 100% sure best way as think installer allows yout to NOT put it in the %PATH%
CALL where /q code
IF ERRORLEVEL 1 (
    ECHO Visual Studio Code is not installed.
    ECHO Downloading installer from https://vscode-update.azurewebsites.net/latest/win32/stable

    rem Download the file & name it VSCodeSetup.exe relative to this running batch file
    CALL powershell -Command "(New-Object Net.WebClient).DownloadFile('https://vscode-update.azurewebsites.net/latest/win32/stable', 'VSCodeSetup.exe')"

    rem Run the installer & ensure it does not launch after install
    rem https://github.com/Microsoft/vscode/issues/860
    rem CALL VSCodeSetup.exe /verysilent
    CALL VSCodeSetup.exe /silent /mergetasks=!runcode
)