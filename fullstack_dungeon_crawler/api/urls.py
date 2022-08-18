from django.urls import path
from . import views

urlpatterns = [
    #================================================================#
    # HTML Routes                                                     #
    #================================================================#
    path('', views.home, name="home"),
    
    #================================================================#
    # REST Routes (JSON)                                             #
    #================================================================#
    
    # === Room Routes ===
    path(
        'api/dungeon/',
        views.roomList,
        name='room-list'
    ),
    path(
        'api/room/<int:room_id>',
        views.roomDetail,
        name='room-detail'
    ),
    
    # === Character Routes ===
    path(
        'api/character/',
        views.characterList,
        name='character-list'
    ),
    path(
        'api/character/<int:character_id>',
        views.characterDetail,
        name='character-detail'
    ),
    
    # === Model Routes ===
    path(
        'api/dialog/',
        views.dialogList,
        name='dialog-list'
    ),
    path(
        'api/dialog/<int:dialog_id>',
        views.dialogDetail,
        name='dialog-detail'
    ),

    # === User Routes ===
    path('api/login', views.log_in),
    path('api/logout', views.log_out),
    path('api/whoami', views.who_am_i)
]