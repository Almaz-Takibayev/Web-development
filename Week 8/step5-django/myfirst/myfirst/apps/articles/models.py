import datetime
from django.db import models

from django.utils import timezone

class Article(models.Model):
	article_title=models.CharField("название статьи", max_length=200)
	article_text=models.TextField("текст статьи")
	public_date=models.DateTimeField("дата публикация")

	def __str__(self):
		return self.article_title



	def recently_publicated(self):
	    return self.public_date >= (timezone.now() - datetime.timedelta(days = 7))


class Comment(models.Model):
	article=models.ForeignKey(Article, on_delete=models.CASCADE)
	author_name=models.CharField("имя автора", max_length=50)
	comment_text=models.TextField("текст комментария",max_length=200)


	def __str__(self):
		return self.author_name

