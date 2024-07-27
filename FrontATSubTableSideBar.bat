@echo off
set /p "datapk=Enter dataPk needed : "

xcopy ".\KCode\DataSchema\%datapk%\*.json" ..\FrontEndByVite\ColumnSchema
xcopy ".\KCode\TableSchema\%datapk%\*.json" ..\FrontEndByVite\TableSchema

cd ..\FrontEndByVite
call npm run buildATSubTableSideBar
xcopy .\publicDir\binATSubTableSideBar ..\crudBD\public\binATSubTableSideBar /h /i /c /k /e /r /y
cd ..\crudBD
