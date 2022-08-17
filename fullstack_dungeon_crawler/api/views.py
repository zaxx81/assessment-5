from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Room, Dialog, Character
from .serializers import RoomSerializer, DialogSerializer, CharacterSerializer


#================================================================#
# HTML Views                                                     #
#================================================================#
def getRoutes(request):
    return JsonResponse('Full-Stack Dungeon Crawler', safe=False)


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
