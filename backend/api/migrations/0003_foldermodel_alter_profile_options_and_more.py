# Generated by Django 4.0.10 on 2023-02-19 20:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FolderModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.CharField(max_length=20)),
            ],
        ),
        migrations.AlterModelOptions(
            name='profile',
            options={'ordering': ['-created']},
        ),
        migrations.AlterField(
            model_name='pdfmodel',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AddField(
            model_name='pdfmodel',
            name='file',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='pdf_file', to='api.foldermodel'),
            preserve_default=False,
        ),
    ]