# Generated by Django 3.2.5 on 2021-11-15 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GenderAnxiaty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Year', models.BigIntegerField()),
                ('Male_Anxiety', models.BigIntegerField()),
                ('Female_Anxiety', models.BigIntegerField()),
                ('Percentage_Male', models.FloatField()),
                ('Percentage_Female', models.FloatField()),
            ],
        ),
    ]
