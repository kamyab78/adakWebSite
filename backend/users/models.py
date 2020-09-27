from django.db import models


class Detail(models.Model):
    number = models.CharField(max_length=15, primary_key=True)
    description = models.CharField(max_length=300)
    inpfile = models.FileField(upload_to='uploads/')
