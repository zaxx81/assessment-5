from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests

from .models import AppUser as User, Dialog, Monster
from .serializers import DialogSerializer, DungeonSerializer, MonsterSerializer


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

# === Monster Views ===
@api_view(['GET'])
def fetchMonsters(request):
    monsters = []

    if(Monster.objects.count == 0):
        monsterSVG = []
        endpoint = 'https://app.pixelencounter.com/api/basic/svgmonsters'

        def getSVG():
            API_response = requests.get(endpoint)
            svg = str(API_response.content, 'utf-8')
            
            svg = svg.replace("xmlns:xlink", "xmlnsXlink")
            monsterSVG.append(svg)

        for _ in range(4):
            getSVG()

        monsters.append({
            'name': 'Evil Orc',
            'image': monsterSVG[0],
            'description': 'A brutish, aggressive, ugly, and malevolent race of monsters, contrasting with the benevolent Elves and serving an evil power, though they share a human sense of morality.'
        })

        monsters.append({
            'name': 'Dungeon Troll',
            'image': monsterSVG[1],
            'description': 'A monstrously large humanoid of great strength and poor intellect.'
        })

        monsters.append({
            'name': 'Undead Warrior',
            'image': monsterSVG[2],
            'description':'A skeleton soldier of the undead. Cursed by some unknown source of Hades.'
        })

        monsters.append({
            'name': 'The Frost Dragon',
            'image': monsterSVG[3],
            'description': 'A mighty and monstrous dragon with teeth as sharp as swords and breath of ice!'
        })

        for monster in monsters:
            monster = Monster.objects.create(
                name = monster['name'],
                image = monster['image'],
                description = monster['description']
            )

    monster = Monster.objects.all().order_by('id')
    serializer = MonsterSerializer(monster, many=True)
    

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