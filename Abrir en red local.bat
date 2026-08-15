@echo off
title MODO SHOP - Web
cd /d "%~dp0"
echo.
echo   MODO SHOP - servidor local
echo   --------------------------
echo   Dejá esta ventana abierta mientras uses la web.
echo   Para cerrarla: Ctrl + C  o cerrar la ventana.
echo.
start "" http://localhost:4322
node server.js
pause
