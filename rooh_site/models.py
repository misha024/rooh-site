from django.db import models


class SingletonModel(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        # Переопределяем метод save, чтобы он всегда сохранялся с одним и тем же id
        self.id = 1
        super().save(*args, **kwargs)


class ContentEditor(SingletonModel):
    price1 = models.TextField("Розблокування")
    price2 = models.TextField("Хвилина поїздки")
    price3 = models.TextField("Пауза")
    price4 = models.TextField("Бронювання")

    def __str__(self):
        return f"ContentEditor"

    class Meta:
        verbose_name = "ContentEditor"
        verbose_name_plural = "ContentEditor"
