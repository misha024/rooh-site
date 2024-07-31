from django.contrib import admin
from .models import ContentEditor

@admin.register(ContentEditor)
class ContentEditorAdmin(admin.ModelAdmin):
    class Media:
        css = {'all': ('styles/admin.css',)}
    def has_delete_permission(self, request, obj=None):
        return False