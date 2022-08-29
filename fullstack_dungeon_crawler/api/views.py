from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import AppUser as User, Dialog
from .serializers import DialogSerializer, DungeonSerializer


#================================================================#
# HTML Views                                                     #
#================================================================#
def home(request):
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)


#================================================================#
# REST Views                                                     #
#================================================================#

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
@api_view(['GET', 'PUT'])
def save(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            user = User.objects.get(username=request.user)
            dungeon = user.dungeon
            return JsonResponse(dungeon, safe=False)
    
    if request.method == 'PUT':
        if request.user.is_authenticated:
            user = User.objects.get(username=request.user)
            user.dungeon = request.data
            user.save()
        return JsonResponse({'result': 'game saved'})
    
    return JsonResponse({'dungeon': None})


@api_view(['POST'])
def login(request):
    print('Login requested')
    print(request.data)
    username = request.data['username']
    password = request.data['password']

    user = authenticate(username=username, password=password)

    if user is not None:
        if user.is_active:
            try:
                # access the base request, not the DRF request
                # this starts a login session for this user
                login(request._request, user)
            except Exception as e:
                return JsonResponse({'login': e})
            return JsonResponse({'login': 'Success'})
        else:
            return JsonResponse({'login': 'Not an active user'})
    else:
        return JsonResponse({'login': 'No user'})


@api_view(['POST'])
def logout(request):
    logout(request)
    return JsonResponse({'success':True})


@api_view(['GET'])
def who_am_i(request):
    # Make sure that you don't send sensitive information to the client, such as password hashes
    # raise Exception('oops')
    if request.user.is_authenticated:
        data = serializers.serialize("json", [request.user], fields=['username'])

        return HttpResponse(data)
    else:
        return JsonResponse({'user': None})