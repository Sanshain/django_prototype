Usefull django sample project for quick start anyone project

## Quick start
- Clone the repositiry:
```
git clone https://github.com/Sanshain/django_prototype.git
```
- Create own virtualenv and activate it:
  ```
  virtualenv __venv
  ```
- Activate vitrualenv:
  - linux:
  ```
    venv/bin/activate
  ```
  - windows:
  ```
    __venv\Scripts\activate
  ```
- Install required packages:
  ```
  pip install -r "django_prototype/requirements.txt"
  ```
- install npm packages:
  ```
  cd django_prototype\proto_app\static
  npm i
  ```
- Change `SECRET_KEY` value inside `prototype_project/prototype_project/settings.py` (for secure)
- Using pycharm change project name and proto_app name to wished name (use `shift+F6`). 
- (optionally) start `rollup` and `gulp` to build static files:
  ```
  rollup -cw
  gulp
  ```
