from django.conf.urls import url, include
from rest_framework import routers
# from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.urlpatterns import format_suffix_patterns
from django.views.decorators.csrf import csrf_exempt

from audio import views


router = routers.DefaultRouter()

urlpatterns = [
    url(r'^$', views.tracks),
    url(r'^(?P<track_id>[0-9]+)/$', views.track),
    url(r'^search/(?P<keywords>[\w ?!,]+)?/?$', views.search),
    url(r'^create$', views.create),
]

urlpatterns = format_suffix_patterns(urlpatterns)
