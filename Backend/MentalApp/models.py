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
    Total_Percentage = models.FloatField(null = False)

class AgeAnxiety(models.Model):
    Year = models.BigIntegerField(null = False)
    UnderFive = models.FloatField(null=True)
    FiveToFourteen = models.FloatField(null=True)
    FifteenToFourtyNine = models.FloatField(null=True)
    FiftyToSixtynine = models.FloatField(null=True)
    OverSeventy = models.FloatField(null=True)
    AllAges = models.FloatField(null=True)

