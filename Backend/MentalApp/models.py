from django.db import models

# Create your models here.

"""
The Class that will store population on anxiety vs population on no anxiety
"""
class GenderAnxiaty(models.Model):

    Date = models.DateField(null=True)
    #ZAECTotalVaccinations = models.BigIntegerField(null=True)

