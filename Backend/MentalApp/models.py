from django.db import models

# Create your models here.

"""
The Class that will store population on anxiety vs population on no anxiety
"""
class GenderAnxiaty(models.Model):
    Year = models.BigIntegerField(null = False)
    Male_Anxiety = models.BigIntegerField(null = False)
    Female_Anxiety = models.BigIntegerField(null = False)
    Percentage_Male = models.FloatField(null = False)
    Percentage_Female = models.FloatField(null = False)
    Total_Percentage = models.FloatField


