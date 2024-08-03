if not exist "node_modules" (
    call npm i
)

call node KCode/Backend.js
call node KCode/Database.js
call npm run home

xcopy ".\KCode\DataSchema\318\*.json" ..\FrontEndByVite\ColumnSchema
xcopy ".\KCode\TableSchema\318\*.json" ..\FrontEndByVite\TableSchema

cd ..\FrontEndByVite

if not exist "node_modules" (
    call npm i
)
call npm run Washtex
xcopy .\publicDir\Laundry ..\crudBD\public\Laundry /h /i /c /k /e /r /y
cd ..\crudBD
call node app

