from django.urls import path
from .views import (course_list,create_course,update_course,delete_course, register_user ,registration_list,login_list,
                    login_user,update_registration,delete_registration,get_gallery_list, add_gallery_item,
                    create_contact, get_contacts, update_contact, delete_contact,admin_summary,
                    )


urlpatterns = [
    path('admin/summary/', admin_summary, name='admin-summary'),

    path("courses/", course_list, name="course-list"),
    path("courses/add/", create_course, name="create-course"),
    path("courses/<int:pk>/update/", update_course, name="update-course"),   
    path("courses/<int:pk>/delete/", delete_course, name="delete-course"),   
    path("register/", register_user, name="register-user"),
    path("registrations/", registration_list, name="registration-list"), 
    path('loginlist/', login_list, name='login_list'),
    path("login/", login_user, name="login-user"), 
    path('registrations/<int:pk>/update/', update_registration, name="update-registration"),
    path("registrations/<int:pk>/delete/", delete_registration, name="delete-registration"),
    path('gallery/', get_gallery_list, name='get-gallery-list'),
    path('gallery/add/', add_gallery_item, name='add-gallery-item'),
    path('contacts/', get_contacts, name='contact-list'),          # READ
    path('contacts/add/', create_contact, name='contact-create'),  # CREATE
    path('contacts/update/<int:pk>/', update_contact, name='contact-update'),  # UPDATE
    path('contacts/delete/<int:pk>/', delete_contact, name='contact-delete'),  # DELETE

    
]
