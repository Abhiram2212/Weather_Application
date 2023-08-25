# weather_api/views.py
import requests
from django.http import JsonResponse
from django.conf import settings
from .config import OPENWEATHERMAP_API_KEY

def get_weather(request):
    city = request.GET.get('city', '')
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={OPENWEATHERMAP_API_KEY}'

    response = requests.get(url)
    data = response.json()

    return JsonResponse(data)
