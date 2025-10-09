# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .models import Course, Registration
# from .serializers import CourseSerializer, RegistrationSerializer

# # Course List API
# @api_view(['GET'])
# def course_list(request):
#     courses = Course.objects.all()
#     serializer = CourseSerializer(courses, many=True)
#     return Response(serializer.data)

# # Registration Create API
# @api_view(['POST'])
# def register_user(request):
#     serializer = RegistrationSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=201)
#     return Response(serializer.errors, status=400)

# # Registration List API
# @api_view(['GET'])
# def registration_list(request):
#     registrations = Registration.objects.all()
#     serializer = RegistrationSerializer(registrations, many=True)
#     return Response(serializer.data)

#  2nd one

# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from .models import Course, Registration
# from .serializers import CourseSerializer, RegistrationSerializer

# # Course List API
# @api_view(['GET'])
# def course_list(request):
#     courses = Course.objects.all()
#     serializer = CourseSerializer(courses, many=True)
#     return Response(serializer.data)

# # Registration Create API
# @api_view(['POST'])
# def register_user(request):
#     mobile = request.data.get('mobile')

#     # ✅ Check if mobile already exists
#     if Registration.objects.filter(mobile=mobile).exists():
#         return Response(
#             {"message": "You are already registered"},
#             status=status.HTTP_400_BAD_REQUEST
#         )

#     serializer = RegistrationSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # Registration List API
# @api_view(['GET'])
# def registration_list(request):
#     registrations = Registration.objects.all()
#     serializer = RegistrationSerializer(registrations, many=True)
#     return Response(serializer.data)


# 3rd one

# myapp/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Course, Registration
from .serializers import CourseSerializer, RegistrationSerializer

# -------------------------------
# 📘 1. Course List API
# -------------------------------
@api_view(['GET'])
def course_list(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)

# -------------------------------
# 🆕 2. Create Course API
# -------------------------------
@api_view(['POST'])
def create_course(request):
    serializer = CourseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "Course added successfully!", "data": serializer.data},
            status=status.HTTP_201_CREATED
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# -------------------------------
# ✏️ 3. Update Course API
# -------------------------------
@api_view(['PUT', 'PATCH'])
def update_course(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response({"message": "Course not found!"}, status=status.HTTP_404_NOT_FOUND)

    serializer = CourseSerializer(course, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Course updated successfully!", "data": serializer.data},
                        status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# -------------------------------
# 🗑️ 4. Delete Course API
# -------------------------------
@api_view(['DELETE'])
def delete_course(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response({"message": "Course not found!"}, status=status.HTTP_404_NOT_FOUND)

    course.delete()
    return Response({"message": "Course deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)

# -------------------------------
# 📋 4. Registration List API
# -------------------------------
@api_view(['GET'])
def registration_list(request):
    registrations = Registration.objects.all()
    serializer = RegistrationSerializer(registrations, many=True)
    return Response(serializer.data)

# -------------------------------
# 🧾 2. Registration Create API
# -------------------------------
@api_view(['POST'])
def register_user(request):
    name = request.data.get('name')
    email = request.data.get('email')
    mobile = request.data.get('mobile')
    course = request.data.get('course')

    # ✅ Validate fields
    if not name or not email or not mobile or not course:
        return Response({"message": "All fields are required."},
                        status=status.HTTP_400_BAD_REQUEST)

    # ✅ Check for existing user
    if Registration.objects.filter(mobile=mobile).exists():
        return Response({"message": "Mobile number already registered!"},
                        status=status.HTTP_400_BAD_REQUEST)
    if Registration.objects.filter(email=email).exists():
        return Response({"message": "Email already registered!"},
                        status=status.HTTP_400_BAD_REQUEST)

    # ✅ Validate mobile number format
    if len(mobile) != 10 or not mobile.isdigit():
        return Response({"message": "Invalid mobile number."},
                        status=status.HTTP_400_BAD_REQUEST)

    # ✅ Save registration
    serializer = RegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Registration successful!", "data": serializer.data},
                        status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# -------------------------------
# ✏️ 5. Update Registration API
# -------------------------------
@api_view(['PUT', 'PATCH'])
def update_registration(request, pk):
    try:
        registration = Registration.objects.get(pk=pk)
    except Registration.DoesNotExist:
        return Response({"message": "Registration not found!"}, status=status.HTTP_404_NOT_FOUND)

    serializer = RegistrationSerializer(registration, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Registration updated successfully!", "data": serializer.data},
                        status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# -------------------------------
# 🗑️ 6. Delete Registration API
# -------------------------------
@api_view(['DELETE'])
def delete_registration(request, pk):
    try:
        registration = Registration.objects.get(pk=pk)
    except Registration.DoesNotExist:
        return Response({"message": "Registration not found!"}, status=status.HTTP_404_NOT_FOUND)

    registration.delete()
    return Response({"message": "Registration deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)

# -------------------------------
# 🔐 3. Login API
# -------------------------------
@api_view(['POST'])
def login_user(request):
    mobile = request.data.get('mobile')
    email = request.data.get('email')

    if not mobile or not email:
        return Response({"message": "Mobile and Email are required!"},
                        status=status.HTTP_400_BAD_REQUEST)

    try:
        user = Registration.objects.get(mobile=mobile, email=email)
        serializer = RegistrationSerializer(user)
        return Response({"message": "Login successful!", "user": serializer.data},
                        status=status.HTTP_200_OK)
    except Registration.DoesNotExist:
        return Response({"message": "Invalid credentials!"},
                        status=status.HTTP_400_BAD_REQUEST)
