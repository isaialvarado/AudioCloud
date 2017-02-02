from django.conf.urls import include, url
from django.conf import settings
from django.views.decorators.cache import cache_page

from django.contrib import admin

urlpatterns = [
    # url(r'^api/v1/accounts', include('useraccounts.urls')),
    # url(r'^api/v1/getdata', include('base.urls')),
    url(r'^$', include('audio.urls')),
    url(r'^api/tracks$', include('audio.urls')),
    # url(r'', cache_page(settings.PAGE_CACHE_SECONDS)(base_views.IndexView.as_view()), name='index'),

]
