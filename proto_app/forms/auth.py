from django.contrib.auth.forms import AuthenticationForm


class LoginForm(AuthenticationForm):

    def __init__(self, *args, **kwargs):
        super(AuthenticationForm, self).__init__(*args, **kwargs)

        for field_name in tuple(dict(self.fields).keys()):  # ['username', 'password']:
            self.fields[field_name].help_text = None
            self.fields[field_name].label = ''

        self.fields['username'].widget.attrs['placeholder'] = 'Логин'
        self.fields['username'].widget.attrs['autofocus'] = 'true'
        self.fields['password'].widget.attrs['placeholder'] = 'Пароль'
