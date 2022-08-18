from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import AppUser as User
from api.models import Room, Dialog, Character
from .serializers import RoomSerializer, DialogSerializer, CharacterSerializer


#================================================================#
# HTML Views                                                     #
#================================================================#
def home(request):
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)


#================================================================#
# REST Views                                                     #
#================================================================#

# === Room Views ===
@api_view(['GET'])
def roomList(request):
    rooms = Room.objects.all().order_by('id')
    serializer = RoomSerializer(rooms, many=True)

    return JsonResponse(serializer.data, safe=False, status=200)


@api_view(['GET', 'PUT'])
def roomDetail(request, room_id):
    if request.method == 'GET':
        room = Room.objects.get(id=room_id)
        serializer = RoomSerializer(room, many=False)

    if request.method == 'PUT':
        room = Room.objects.get(id=room_id)
        serializer = RoomSerializer(instance=room, data=request.data, many=False)

        if serializer.is_valid():
            serializer.save()

    return JsonResponse(serializer.data, safe=False, status=200)


# === Character Views ===
@api_view(['GET'])
def characterList(request):
    character = Character.objects.all().order_by('id')
    serializer = CharacterSerializer(character, many=True)

    return JsonResponse(serializer.data, safe=False, status=200)


@api_view(['GET', 'PUT'])
def characterDetail(request, character_id):
    if request.method == 'GET':
        character = Character.objects.get(id=character_id)
        serializer = CharacterSerializer(character, many=False)

    if request.method == 'PUT':
        character = Character.objects.get(id=character_id)
        serializer = CharacterSerializer(instance=character, data=request.data, many=False)

        if serializer.is_valid():
            serializer.save()

    return JsonResponse(serializer.data, safe=False, status=200)


# === Dialog Views ===
@api_view(['GET'])
def dialogList(request):
    dialog = Dialog.objects.all().order_by('id')
    serializer = DialogSerializer(dialog, many=True)

    return JsonResponse(serializer.data, safe=False, status=200)


@api_view(['GET'])
def dialogDetail(request, dialog_id):
    dialog = Dialog.objects.get(id=dialog_id)
    serializer = DialogSerializer(dialog, many=False)

    return JsonResponse(serializer.data, safe=False, status=200)


# === User Views ===
@api_view(['POST'])
def sign_up(request):
    try:
        User.objects.create_user(username=request.data['email'], password=request.data['password'], email=request.data['email'])
    except Exception as e:
        print(str(e))
    return HttpResponse('hi')

@api_view(['POST'])
def log_in(request):
    print(dir(request))
    print(dir(request._request))

    # DRF assumes that the body is JSON, and automatically parses it into a dictionary at request.data
    email = request.data['email']
    password = request.data['password']
    # user = authenticate(username=email, password=password, email=email)
    user = authenticate(username=email, password=password)
    print('user?')
    print(user.email)
    print(user.password)
    if user is not None:
        if user.is_active:
            try:
                # access the base request, not the DRF request
                # this starts a login session for this user
                login(request._request, user)
            except Exception as e:
                print('except')
                print(str(e))
            return HttpResponse('success!')
            # Redirect to a success page.
        else:
            return HttpResponse('not active!')
            # Return a 'disabled account' error message
    else:
        return HttpResponse('no user!')
        # Return an 'invalid login' error message.


@api_view(['POST'])
def log_out(request):
    logout(request)
    return JsonResponse({'success':True})




@api_view(['GET'])
def who_am_i(request):
    # Make sure that you don't send sensitive information to the client, such as password hashes
    # raise Exception('oops')
    if request.user.is_authenticated:
        data = serializers.serialize("json", [request.user], fields=['email', 'username'])

        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})