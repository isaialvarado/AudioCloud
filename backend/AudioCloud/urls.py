from django.conf.urls import include, url
from django.conf import settings
from django.views.decorators.cache import cache_page
from django.views.generic import TemplateView
from django.contrib import admin

urlpatterns = [
    # url(r'^api/v1/accounts', include('useraccounts.urls')),
    # url(r'^api/v1/getdata', include('base.urls')),
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^api/tracks$', include('audio.urls')),
    # url(r'', cache_page(settings.PAGE_CACHE_SECONDS)(base_views.IndexView.as_view()), name='index'),

]
