import codecademylib3_seaborn
from bs4 import BeautifulSoup
import requests
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

cacao_html = requests.get('https://content.codecademy.com/courses/beautifulsoup/cacao/index.html')
soup = BeautifulSoup(cacao_html.content, 'html.parser')

ratings = []
ratings_with_tags = soup.find_all(attrs={'class': 'Rating'})
for rating_tag in ratings_with_tags:
  if rating_tag.get_text() != 'Rating':
    ratings.append(float(rating_tag.get_text()))

company_names = []
company_names_with_tags = soup.select('.Company')

for company_tag in company_names_with_tags:
  if company_tag.get_text() != 'Company':
    company_names.append(company_tag.get_text())

company_names = company_names[1:]

df = pd.DataFrame({
    "Company": company_names,
    "Rating": ratings
})

mean_ratings = df.groupby('Company')['Rating'].mean()
ten_best = mean_ratings.nlargest(10)

cocoa_percent = []
cocoa_percent_with_tags = soup.select('.CocoaPercent')
for percent_tag in cocoa_percent_with_tags:
  try:
    cocoa_percent.append(float(percent_tag.get_text()[:-1])/100)
  except ValueError:
    pass

df['CocoaPercentage'] = cocoa_percent

# Bar graph showing ratings
# plt.hist(ratings)
# plt.show()

plt.scatter(df.CocoaPercentage, df.Rating)
z = np.polyfit(df.CocoaPercentage, df.Rating, 1)
line_function = np.poly1d(z)
plt.plot(df.CocoaPercentage, line_function(df.CocoaPercentage), "r--")
plt.show()


