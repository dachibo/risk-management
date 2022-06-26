@echo off
call ..\.venv\Scripts\Activate
call pabot --processes 4 --outputdir Results TestCases\*.robot
call pause