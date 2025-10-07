from django.urls import path
from .views import course_list, register_user ,registration_list,login_user, update_registration,delete_registration

urlpatterns = [
    path("courses/", course_list, name="course-list"),
    path("register/", register_user, name="register-user"),
    path("registrations/", registration_list, name="registration-list"), 
    path("login/", login_user, name="login-user"), 
    path('registrations/<int:pk>/update/', update_registration, name="update-registration"),
    path("registrations/<int:pk>/delete/", delete_registration, name="delete-registration"),
]
