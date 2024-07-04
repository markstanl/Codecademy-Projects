import json

import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from pandas import DataFrame
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler

tennis_df = pd.read_csv('tennis_stats.csv')
print(tennis_df.columns)

def calculate_score(X: DataFrame, Y: DataFrame) -> float:
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=0)
    sc = StandardScaler()
    X_train = sc.fit_transform(X_train)
    X_test = sc.transform(X_test)
    regressor = LinearRegression()
    regressor.fit(X_train, Y_train)
    return regressor.score(X_test, Y_test)

pairs = {}
for column in tennis_df.columns:
    if column != 'Player':
        X = tennis_df[[column]]
        Y = tennis_df[['Winnings']]
        pairs[column] = calculate_score(X, Y)

pairs = {k: v for k, v in sorted(pairs.items(), key=lambda item: item[1], reverse=True)}
print(json.dumps(pairs))

# Exploratory Analysis
# Wins: "ServiceGamesPlayed": 0.8702127235362105, "ReturnGamesPlayed":
# 0.8675623118927358, "BreakPointsOpportunities": 0.8617285007243148, "Winnings": 0.8399163755777032,
# "BreakPointsFaced": 0.7744490153372331, "Losses": 0.7480321594127208, "DoubleFaults": 0.7015071226954075,
# "Aces": 0.5790322329950142,
#
# Winnings: "Wins": 0.8401542397077119, "ServiceGamesPlayed": 0.8337575534547789, "ReturnGamesPlayed": 0.833432043162222, "BreakPointsOpportunities": 0.8051941785638452, "BreakPointsFaced": 0.7478143230754226, "Losses": 0.7357748473040795, "DoubleFaults": 0.7129495109607499, "Aces": 0.5670631008701325


# Multiple Linear Regression for Wins
X = tennis_df[['ServiceGamesPlayed', 'ReturnGamesPlayed', 'BreakPointsOpportunities', 'BreakPointsFaced', 'Losses', 'DoubleFaults', 'Aces']]
y = tennis_df[['Winnings']]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)
regressor = LinearRegression()

regressor.fit(X_train, y_train)
y_pred = regressor.predict(X_test)

print(regressor.score(X_test, y_test))
plt.scatter(y_pred, y_test)
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.show()
