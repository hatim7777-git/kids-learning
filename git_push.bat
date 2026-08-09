@echo off
setlocal enabledelayedexpansion

:: Read version from version.txt if it exists
set "VERSION=1.0.0"
if exist version.txt (
    set /p VERSION=<version.txt
)

echo ====================================================
echo   Kids_Learning_App [v%VERSION%] - GIT SECURE BACKUP
echo ====================================================

:: 1. Check current git status visually for the operator
echo [CURRENT STATUS] Checking workspace modifications...
echo ----------------------------------------------------
call git status -s
echo ----------------------------------------------------
echo.

:: 2. Prompt for custom commit tracking message
set /p COMMIT_MSG="Enter change message (e.g., Added number emojis): "

:: If the user enters nothing, provide a default fallback message using the version
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Routine updates for learning dashboard v%VERSION%

echo.
echo ----------------------------------------------------
echo [STEP 1/3] Staging local workspace edits...
echo ----------------------------------------------------
call git add .
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Failed to stage files. Check directory permissions.
    pause
    exit /b %ERRORLEVEL%
)
echo Done.

echo.
echo ----------------------------------------------------
echo [STEP 2/3] Committing changes to local repository...
echo ----------------------------------------------------
call git commit -m "%COMMIT_MSG%"
if %ERRORLEVEL% neq 0 (
    echo [NOTICE] Nothing to commit, or commit skipped. Moving forward...
)

echo.
echo ----------------------------------------------------
echo [STEP 3/3] Pushing snapshots safely to GitHub (Origin)...
echo ----------------------------------------------------
call git push origin
if %ERRORLEVEL% neq 0 (
    echo.
    echo [FAILED] Cloud synchronization failed. Check network or remote credentials.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ====================================================
echo   SUCCESS! LEARNING APP BACKED UP TO GITHUB
echo ====================================================
echo.
pause
