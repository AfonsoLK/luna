"""
URL configuration for the Luna v4 application.

This module defines the main URL patterns for the Django application,
including admin interface and API routes.
"""
from django.contrib import admin
from django.urls import path
from core.api import api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),
]
