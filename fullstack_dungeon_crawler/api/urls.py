from django.urls import path
from . import views

urlpatterns = [
    #================================================================#
    # HTML Routes                                                     #
    #================================================================#
    path('', views.getRoutes, name="routes"),
    
    #================================================================#
    # REST Routes (JSON)                                             #
    #================================================================#
    
    # === Room Routes ===
    path(
        'api/room/',
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
    )
]