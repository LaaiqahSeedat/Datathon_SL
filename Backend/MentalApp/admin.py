from django.contrib import admin
from .models import AgeAnxiety, GenderAnxiaty
from import_export.admin import ImportExportModelAdmin
# Register your models here.

admin.site.register(GenderAnxiaty,ImportExportModelAdmin)
admin.site.register(AgeAnxiety,ImportExportModelAdmin)
