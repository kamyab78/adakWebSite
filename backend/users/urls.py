from django.conf.urls import url
from django.urls import path
from users.views import CreateUserView
from django.conf.urls.static import static
from backend.settings import *

app_name = 'users'

urlpatterns = [
                  url('submit/', CreateUserView.as_view(), name='sub'),

              ] + static(MEDIA_URL, document_root=MEDIA_ROOT)
