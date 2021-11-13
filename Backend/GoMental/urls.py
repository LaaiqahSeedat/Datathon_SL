from django.contrib import admin
from django.urls import path, include
import MentalApp

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('MentalApp.urls')),
]
