# Generated by Django 3.1.1 on 2020-09-27 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Detail',
            fields=[
                ('number', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('description', models.CharField(max_length=300)),
                ('inpfile', models.FileField(upload_to='')),
            ],
        ),
    ]
