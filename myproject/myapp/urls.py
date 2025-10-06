from django.urls import path
from .views import course_list, register_user ,registration_list,login_user

urlpatterns = [
    path("courses/", course_list, name="course-list"),
    path("register/", register_user, name="register-user"),
    path("registrations/", registration_list, name="registration-list"), 
    path("login/", login_user, name="login-user"), 
]
