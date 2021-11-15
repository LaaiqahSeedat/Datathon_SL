from django.contrib import admin
from .models import GenderAnxiaty
from import_export.admin import ImportExportModelAdmin
# Register your models here.

admin.site.register(GenderAnxiaty,ImportExportModelAdmin)
