import codecademylib3_seaborn
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn import linear_model

df = pd.read_csv("https://content.codecademy.com/programs/data-science-path/linear_regression/honeyproduction.csv")


prod_per_year = df.groupby('year').totalprod.mean().reset_index()

X = prod_per_year["year"]
X = X.values.reshape(-1,1)


y = prod_per_year["totalprod"]

plt.scatter(X, y)

regr = linear_model.LinearRegression()

regr.fit(X, y)

##print(regr.coef_)
##print(regr.intercept_)

y_predict = regr.predict(X)

#plt.plot(X, y_predict)


#plt.show()

X_future = np.array(range(2013, 2050)).reshape(-1,1)

future_predict = regr.predict(X_future)

plt.plot(X_future, future_predict)

plt.show()
