from django.shortcuts import render
import random

# Create your views here.
def fortune(request):
  fortune = random.choice(fortuneList)
  context = {
    "fortune": fortune
  }
  return render(request, "randomfortune/fortune.html", context)

fortuneList = ["You will goon", "You will edge", "You will be the greatest mewer ever", "Edge time"];
