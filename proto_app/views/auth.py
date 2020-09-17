from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.views import LoginView
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


# Create your views here.
from django.template.loader import render_to_string

from proto_app.forms.auth import LoginForm


def index(request: HttpRequest):
    return HttpResponse('test')


class SigninView(LoginView):
    template_name = "base.html"
    from_class = LoginForm                                      # AuthenticationForm

    def get_success_url(self):
        return super().get_success_url()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context['content'] = render_to_string('fragments/login.html', {
        #     'RegisterForm': RegisterForm
        # }, self.request)
        return context

