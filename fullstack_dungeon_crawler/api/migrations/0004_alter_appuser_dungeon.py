# Generated by Django 4.1 on 2022-08-29 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_delete_character_appuser_dungeon_delete_room_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appuser',
            name='dungeon',
            field=models.JSONField(),
        ),
    ]
