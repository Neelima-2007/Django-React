
from django.contrib import admin
from .models import Course,Registration,Gallery,Contact

class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email','mobile', 'course')   
    search_fields = ('name', 'email', 'course_name')
    list_filter = ('course',) 

class GalleryAdmin(admin.ModelAdmin):
    list_display =('title','description','image_url')

class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'message', 'created_at')
    search_fields = ('name', 'email')
    list_filter = ('created_at',)


admin.site.register(Course,CourseAdmin)
admin.site.register(Registration,RegistrationAdmin)
admin.site.register(Gallery,GalleryAdmin)
admin.site.register(Contact, ContactAdmin) 