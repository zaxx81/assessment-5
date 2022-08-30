from rest_framework import serializers
from .models import Dialog, AppUser, Monster

class DialogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dialog
        fields = '__all__'

class DungeonSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = 'dungeon'


class MonsterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monster
        fields = '__all__'