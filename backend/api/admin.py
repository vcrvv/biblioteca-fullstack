from django.contrib import admin
from .models import Book


# Register your models here.
class BookAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "published_date", "pages")
    search_fields = ("title", "author")
    list_filter = ("published_date",)
    ordering = ("-published_date",)


admin.site.register(Book, BookAdmin)
