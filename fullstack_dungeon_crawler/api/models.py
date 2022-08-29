from email.policy import default
from django.contrib.auth.models import AbstractUser
from django.db import models


class AppUser(AbstractUser):
    username = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    
    is_superuser = models.BooleanField(default=False)
    dungeon = models.JSONField(default={"test": "123"})

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []


class Dialog(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    dialog_output = models.TextField(max_length=1500)

    def __str__(self):
        return self.name
    