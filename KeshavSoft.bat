ECHO OFF

rem Check if VS Code is installed - Checks if its in the path
rem Not 100% sure best way as think installer allows yout to NOT put it in the %PATH%
CALL where /q code
IF ERRORLEVEL 1 (
    ECHO Visual Studio Code is not installed.
    ECHO Downloading installer from https://vscode-update.azurewebsites.net/latest/win32/stable

    rem Download the file & name it VSCodeSetup.exe relative to this running batch file
   call winget install -e --id Microsoft.VisualStudioCode --scope machine

	call code --install-extension humao.rest-client
	call code --install-extension formulahendry.code-runner
	call code --install-extension KeshavSoft.crud-snippets
    call code .
)

call code --install-extension humao.rest-client
call code --install-extension formulahendry.code-runner
call code --install-extension KeshavSoft.crud-snippets
call code .