from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Course, Registration
from .serializers import CourseSerializer, RegistrationSerializer

# Course List API
@api_view(['GET'])
def course_list(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)

# Registration Create API
@api_view(['POST'])
def register_user(request):
    serializer = RegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

# Registration List API
@api_view(['GET'])
def registration_list(request):
    registrations = Registration.objects.all()
    serializer = RegistrationSerializer(registrations, many=True)
    return Response(serializer.data)
