@echo off
set /p "datapk=Enter dataPk needed : "

xcopy ".\KCode\DataSchema\%datapk%\*.json" ..\FrontEndByVite\ColumnSchema
xcopy ".\KCode\TableSchema\%datapk%\*.json" ..\FrontEndByVite\TableSchema

cd ..\FrontEndByVite
call npm run buildWithClientValid
xcopy .\publicDir\binWithClientValid ..\crudBD\public\binWithClientValid /h /i /c /k /e /r /y
cd ..\crudBD
