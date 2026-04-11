
@echo off
echo ========================================
echo Pushing Backend to GitHub
echo ========================================
echo.
echo Step 1: Login to GitHub CLI with your account
echo.
gh auth login
echo.
echo Step 2: Pushing to repository
echo.
git push -u origin master
echo.
echo ========================================
echo Done!
echo ========================================
pause
