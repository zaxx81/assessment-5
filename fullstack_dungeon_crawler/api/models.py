from email.policy import default
from django.contrib.auth.models import AbstractUser
from django.db import models


class AppUser(AbstractUser):
    username = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []


class Dialog(models.Model):
    name = models.CharField(max_length=100)
    icon = models.TextField(max_length=500)
    dialog = models.TextField(max_length=1500)

    def __str__(self):
        return self.name


class Monster(models.Model):
    name = models.CharField(max_length=100)
    image = models.TextField(max_length=500)
    description = models.TextField(max_length=1500)

    def __str__(self):
        return self.name