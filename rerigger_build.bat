:: # 1. Create an empty commit with a message
git commit --allow-empty -m "trigger build: force sync"
echo.

:: # 2. Push the empty commit to your remote branch
git push origin main

echo.

pause