# models.py
from django.db import models

class WeatherData(models.Model):
    description = models.CharField(max_length=255)
    temp = models.FloatField()
    temp_max = models.FloatField()
    temp_min = models.FloatField()
    humidity = models.FloatField()
    sunrise = models.IntegerField()
    sunset = models.IntegerField()
    country = models.CharField(max_length=50)

    def __str__(self):
        return self.description
