from django.conf.urls import include, url
from django.views.decorators.csrf import csrf_exempt

from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

from .views import UserViewSet

from useraccounts import views

router = DefaultRouter()
# router.register(r'users', UserViewSet)

# urlpatterns = router.urls

urlpatterns = [
    url(r'^$', UserViewSet.retrieve ),
    url(r'^$', csrf_exempt(obtain_auth_token))
]



# from django.conf.urls import url
# from django.utils.translation import ugettext_lazy as _
#
# from useraccounts import views as account_views
#
# urlpatterns = [
#     url(_(r'^register/$'), account_views.UserRegisterView.as_view(), name='register'),
#     url(_(r'^login/$'), account_views.UserLoginView.as_view(), name='login'),
#     url(_(r'^confirm/email/(?P<activation_key>.*)/$'), account_views.UserConfirmEmailView.as_view(),
#         name='confirm_email'),
#     url(_(r'^status/email/$'), account_views.UserEmailConfirmationStatusView.as_view(), name='status'),
#
# ]
