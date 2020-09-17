from django.http import HttpRequest, HttpResponse

from django.shortcuts import render

from .mixins import *


def index(request: HttpRequest):
    return HttpResponse('test')
