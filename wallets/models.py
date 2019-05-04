from django.db import models
from django.contrib.auth.models import User


class Card(models.Model):
    product = models.CharField(max_length=10)
    description = models.TextField()
    value = models.DecimalField(max_digits=4, decimal_places=1)
    voucher = models.CharField(max_length=10)
    pin = models.CharField(max_length=4)
    archived = models.BooleanField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.product
