from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import ContentEditor
import requests


def index(request):
    select_lang = "ua"
    if request.GET:
        select_lang = request.GET.get('lang')
    content = ContentEditor.objects.get(pk=1)
    data = {"select_lang": select_lang, "c": content}
    return render(request, f'index.ua.html', data)
#     return render(request, f'index{"." + select_lang}.html', {"select_lang": select_lang})


def privacy_policy(request):
    select_lang = "ua"
    if request.GET:
        select_lang = request.GET.get('lang')
    return render(request, f'privacy_policy.ua.html', {"select_lang": select_lang})
#     return render(request, f'privacy_policy{"." + select_lang}.html', {"select_lang": select_lang})


def general_rules(request):
    select_lang = "ua"
    if request.GET:
        select_lang = request.GET.get('lang')
    return render(request, f'general_rules.ua.html', {"select_lang": select_lang})
#     return render(request, f'general_rules{"." + select_lang}.html', {"select_lang": select_lang})


def public_contract(request):
    select_lang = "ua"
    if request.GET:
        select_lang = request.GET.get('lang')
    return render(request, f'public_contract.ua.html', {"select_lang": select_lang})
#     return render(request, f'public_contract{"." + select_lang}.html', {"select_lang": select_lang})


def payment_policy(request):
    select_lang = "ua"
    if request.GET:
        select_lang = request.GET.get('lang')
    return render(request, f'payment_policy.ua.html', {"select_lang": select_lang})
#     return render(request, f'payment_policy{"." + select_lang}.html', {"select_lang": select_lang})


def get_scoot_api(request, scooter_code):
    user_agent = request.META.get('HTTP_USER_AGENT', '')
    redirect_url = 'https://api.scootapi.com/application/rooh/link'
    response = requests.get(redirect_url, headers={'User-Agent': user_agent})
    print(response.url)
    return HttpResponseRedirect(response.url)
