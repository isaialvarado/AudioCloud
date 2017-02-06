from django.conf.urls import include, url
from django.conf import settings
from django.views.decorators.cache import cache_page
from django.views.generic import TemplateView
from django.contrib import admin

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^api/tracks/', include('audio.urls')),
    url(r'^/api/obtain-auth-token', include('useraccounts.urls')),
]
