git clone https://github.com/Sanshain/django_prototype.git
virtualenv __venv
__venv\Scripts\activate
@echo off
pip list
echo Create pip file? (y/n)
set /p x=
if "%x%"=="y" echo "__venv/Scripts/pip.exe" %%1 %%2 %%3 > pip.cmd
@echo on
pip install -r "django_prototype/requirements.txt"
python manage.py migrate
cd django_prototype/proto_app/static
npm i
@echo off

echo start rollup watch? (y/n)
set /p rl=
if "%rl%"=="y" start rollup -cw

echo start rollup watch? (y/n)
set /p g=
if "%g%"=="y" start gulp

echo Attention! Change `SECRET_KEY` in settings.py!
echo Changed?
