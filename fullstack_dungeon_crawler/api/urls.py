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
    
    # === Dialog Routes ===
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
    path('api/login', views.login, name='login'),
    path('api/logout', views.logout, name='logout'),
    path('api/whoami', views.who_am_i, name='who_am_i'),
    path('api/save', views.save, name='save'),

    # === Fetch Routes ===
    path('fetch/monsters', views.fetchMonsters, name='fetchMonsters')
]