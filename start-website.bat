@echo off
color 0a
title Space Portfolio Dev Server
echo =========================================
echo    Starting Space Portfolio Server...
echo =========================================
echo.
echo Step 1: Installing dependencies...
echo Please WAIT. This will take 1-3 minutes. Do NOT close this window.
echo.
call npm install
echo.
echo Step 2: Launching Vite Development Server...
echo =========================================
echo THE SERVER IS NOW RUNNING!
echo You can now open exactly this link in your browser:
echo http://localhost:5173
echo =========================================
echo.
echo DO NOT CLOSE THIS WINDOW while viewing your site!
call npm run dev
pause
