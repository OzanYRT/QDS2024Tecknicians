REM Path: runApp.bat
start cmd /k "cd .\server\ && node server.js"
start cmd /k "cd .\client\ && npm start"
start cmd /k "cd .\webapi\webapicall\ && dotnet run"
