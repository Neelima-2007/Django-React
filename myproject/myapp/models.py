
from django.db import models
#This is Course Registartion Model
class Course(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
#This is student Registration Model
class Registration(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile = models.CharField(max_length=15, unique=False, null=True, blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name}-{self.email}-{self.mobile}-{self.course}"

# This is Gallery.jsx Model 

class Gallery(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField()  # store image URL from Unsplash or uploads

    def __str__(self):
        return self.title