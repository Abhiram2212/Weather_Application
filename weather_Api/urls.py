# weather_api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('get-weather/', views.get_weather, name='get_weather'),
]
