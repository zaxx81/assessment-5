from django.contrib.auth.models import AbstractUser
from django.core.validators import int_list_validator
from django.db import models


class Dialog(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    dialog_output = models.TextField(max_length=1500)

    def __str__(self):
        return self.name


class Character(models.Model):
    name = models.CharField(max_length=50)
    hp_max = models.IntegerField()
    hp = models.IntegerField()

    def __str__(self):
        return self.name


class Type(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name


class Room(models.Model):
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    is_visible = models.BooleanField(default=False)
    is_discovered = models.BooleanField(default=False)
    is_explored = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    adjacent = models.CharField(validators=[int_list_validator], max_length=50)
    dialog = models.ForeignKey(Dialog, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.pk)


class AppUser(AbstractUser):
    username = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    # email = models.EmailField(
    #     verbose_name='email address',
    #     max_length=255,
    #     unique=True,
    # )
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    