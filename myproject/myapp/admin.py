
from django.contrib import admin
from .models import Course,Registration

class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email','mobile', 'course')   
    search_fields = ('name', 'email', 'course_name')
    list_filter = ('course',) 

admin.site.register(Course,CourseAdmin)
admin.site.register(Registration,RegistrationAdmin)
