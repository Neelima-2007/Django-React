from django.urls import path
from .views import course_list,create_course,update_course,delete_course, register_user ,registration_list,login_user, update_registration,delete_registration,get_gallery_list, add_gallery_item


urlpatterns = [
    path("courses/", course_list, name="course-list"),
    path("courses/add/", create_course, name="create-course"),
    path("courses/<int:pk>/update/", update_course, name="update-course"),   
    path("courses/<int:pk>/delete/", delete_course, name="delete-course"),   
    path("register/", register_user, name="register-user"),
    path("registrations/", registration_list, name="registration-list"), 
    path("login/", login_user, name="login-user"), 
    path('registrations/<int:pk>/update/', update_registration, name="update-registration"),
    path("registrations/<int:pk>/delete/", delete_registration, name="delete-registration"),
    path('gallery/', get_gallery_list, name='get-gallery-list'),
    path('gallery/add/', add_gallery_item, name='add-gallery-item'),
    
]
