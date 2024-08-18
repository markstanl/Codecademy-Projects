# CSV In ML Playground Project

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import confusion_matrix

# Load the data
transactions = pd.read_csv('transactions_modified.csv')
# print(transactions.info())

# How many fraudulent transactions?
# print((transactions['isFraud'] == 1).sum())
# 282 fradulant transactions

# Summary statistics on amount column
# print(transactions['amount'].describe())

# Create isPayment field

transactions['isPayment'] = 0
transactions.loc[(transactions['type'] == 'DEBIT') | (transactions['type'] == 'PAYMENT'), 'isPayment'] = 1

# Create isMovement field
transactions['isMovement'] = 0
transactions.loc[(transactions['type'] == 'CASH_OUT') | (transactions['type'] == 'TRANSFER'), 'isMovement'] = 1

# Create accountDiff field

transactions['accountDiff'] = \
abs(transactions['oldbalanceOrg'] - transactions['oldbalanceDest'])

# Create features and label variables
features = transactions[['amount', 'isPayment', 'isMovement', 'accountDiff']]
label = transactions['isFraud']
# Split dataset
X_train, X_test, y_train, y_test = train_test_split(features, label, test_size=0.3)

# Normalize the features variables
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Fit the model to the training data
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

# Score the model on the training data
print(model.score(X_train_scaled, y_train))

# Score the model on the test data
print(model.score(X_test_scaled, y_test))

# Print the model coefficients
print(model.coef_)
print(model.intercept_)

# New transaction data
transaction1 = np.array([123456.78, 0.0, 1.0, 54670.1])
transaction2 = np.array([98765.43, 1.0, 0.0, 8524.75])
transaction3 = np.array([543678.31, 1.0, 0.0, 510025.5])

# Create a new transaction
your_transaction = np.array([200, 0.0, 1.0, 30000])

# Combine new transactions into a single array
sample_transactions = np.array([transaction1, transaction2, transaction3, your_transaction])

# Normalize the new transactions
sample_transactions = scaler.transform(sample_transactions)

# Predict fraud on the new transactions
print(model.predict(sample_transactions))

# Show probabilities on the new transactions
print(model.predict_proba(sample_transactions))
print(transactions.head())

# Post Assignment Testing
y_pred = model.predict(X_test_scaled)

conf_matrix = confusion_matrix(y_test, y_pred)
print(conf_matrix)

TP = 32
TN = 217
FP = 7
FN = 44

accuracy = (TP + TN) / (TP + TN + FP + FN)
precision = TP / (TP + FP)
recall = TP / (TP + FN)
f1_score = 2 * (precision * recall) / (precision + recall)

print(f"Accuracy: {accuracy}")
print(f"Precision: {precision}")
print(f"Recall: {recall}")
print(f"F1 Score: {f1_score}")

# Okay Model
