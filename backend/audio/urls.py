from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.urlpatterns import format_suffix_patterns
from django.views.decorators.csrf import csrf_exempt

from audio import views


router = routers.DefaultRouter()

urlpatterns = [
    # url(r'^$', views.TrackDataView.as_view(), name='tracks_data'),
    url(r'^$', views.tracks),
    url(r'^(?P<track_id>[0-9]+)/$', views.TrackView.as_view(), name='detail'),
    # url(r'^(?P<track_id>[0-9]+)/createtrack/$', views.CreateTrack.as_view(), name='create_track'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
