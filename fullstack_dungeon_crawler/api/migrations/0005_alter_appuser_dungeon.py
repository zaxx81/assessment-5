# Generated by Django 4.1 on 2022-08-29 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_appuser_dungeon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appuser',
            name='dungeon',
            field=models.JSONField(default={'test': '123'}),
        ),
    ]