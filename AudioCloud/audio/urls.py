from django.conf.urls import url

from . import views

urlpatterns = [
    # url(r'^$', views.root, name='root'),
     url(r'^$', views.index, name='index'),
    url(r'^(?P<id>[0-9]+)/$', views.detail, name='detail'),

    url(r'^(?P<id>[0-9]+)/results/$', views.results, name='results'),
    # url(r'^tracks/$', TrackList.as_view()),
]
