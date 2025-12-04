from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Course, Registration ,Gallery, Contact,Login
from .serializers import CourseSerializer, RegistrationSerializer ,GallerySerializer,ContactSerializer,LoginSerializer


@api_view(['GET'])
def admin_summary(request):
    total_regs = Registration.objects.count()
    latest_regs = Registration.objects.order_by('-created_at')[:5]
    data = {
        "total_registrations": total_regs,
        "latest_registrations": [
            {"name": r.name, "email": r.email, "mobile": r.mobile, "course": r.course}
            for r in latest_regs
        ]
    }
    return Response(data)

@api_view(['GET'])
def course_list(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)


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


@api_view(['DELETE'])
def delete_course(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response({"message": "Course not found!"}, status=status.HTTP_404_NOT_FOUND)

    course.delete()
    return Response({"message": "Course deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def registration_list(request):
    registrations = Registration.objects.all()
    serializer = RegistrationSerializer(registrations, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def register_user(request):
    name = request.data.get('name')
    email = request.data.get('email')
    mobile = request.data.get('mobile')
    course = request.data.get('course')
    if not name or not email or not mobile or not course:
        return Response({"message": "All fields are required."},
                        status=status.HTTP_400_BAD_REQUEST)
    if Registration.objects.filter(mobile=mobile).exists():
        return Response({"message": "Mobile number already registered!"},
                        status=status.HTTP_400_BAD_REQUEST)
    if Registration.objects.filter(email=email).exists():
        return Response({"message": "Email already registered!"},
                        status=status.HTTP_400_BAD_REQUEST)
    if len(mobile) != 10 or not mobile.isdigit():
        return Response({"message": "Invalid mobile number."},
                        status=status.HTTP_400_BAD_REQUEST)
    serializer = RegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Registration successful!", "data": serializer.data},
                        status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



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


@api_view(['DELETE'])
def delete_registration(request, pk):
    try:
        registration = Registration.objects.get(pk=pk)
    except Registration.DoesNotExist:
        return Response({"message": "Registration not found!"}, status=status.HTTP_404_NOT_FOUND)

    registration.delete()
    return Response({"message": "Registration deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)

# @api_view(['GET'])
# def login_list(request):
#     users = Registration.objects.all().values('mobile', 'email')
#     return Response(users)


# @api_view(['POST'])
# def login_user(request):
#     mobile = request.data.get('mobile')
#     email = request.data.get('email')

#     if not mobile or not email:
#         return Response({"message": "Mobile and Email are required!"},
#                         status=status.HTTP_400_BAD_REQUEST)

#     try:
#         user = Registration.objects.get(mobile=mobile, email=email)
#         serializer = RegistrationSerializer(user)
#         return Response({"message": "Login successful!", "user": serializer.data},
#                         status=status.HTTP_200_OK)
#     except Registration.DoesNotExist:
#         return Response({"message": "Invalid credentials!"},
#                         status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def login_user(request):
    mobile = request.data.get("mobile")
    email = request.data.get("email")

    if not mobile or not email:
        return Response({"message": "Mobile and Email are required!"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = Registration.objects.get(mobile=mobile, email=email)
        serializer = RegistrationSerializer(user)
        return Response({"message": "Login successful!", "user": serializer.data})
    except Registration.DoesNotExist:
        return Response({"message": "Invalid credentials!"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def login_list(request):
    logins = Login.objects.all()
    serializer = LoginSerializer(logins, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_gallery_list(request):
    galleries = Gallery.objects.all()
    serializer = GallerySerializer(galleries, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_gallery_item(request):
    serializer = GallerySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_contact(request):
    if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_contacts(request):
    contacts = Contact.objects.all().order_by('-created_at')  # newest first
    serializer = ContactSerializer(contacts, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def update_contact(request, pk):
    try:
        contact = Contact.objects.get(pk=pk)
    except Contact.DoesNotExist:
        return Response({'error': 'Contact not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = ContactSerializer(contact, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_contact(request, pk):
    try:
        contact = Contact.objects.get(pk=pk)
    except Contact.DoesNotExist:
        return Response({'error': 'Contact not found'}, status=status.HTTP_404_NOT_FOUND)

    contact.delete()
    return Response({'message': 'Contact deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


