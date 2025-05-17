from django.db import models


# Create your models here.
class Book(models.Model):
    book_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    published_date = models.IntegerField()
    pages = models.IntegerField()
    cover_image = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title
