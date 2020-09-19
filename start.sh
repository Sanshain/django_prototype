git clone https://github.com/Sanshain/django_prototype.git
virtualenv __venv
__venv/bin/activate
pip install -r "django_prototype/requirements.txt"
python manage.py migrate
cd django_prototype/proto_app/static
npm i
