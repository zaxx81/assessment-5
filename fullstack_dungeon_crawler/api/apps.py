from django.apps import AppConfig
import requests
import json
# from .models import Dialog, Monster


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'