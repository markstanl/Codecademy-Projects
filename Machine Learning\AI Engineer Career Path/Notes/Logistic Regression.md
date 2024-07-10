# Logistic Regression
Logistic regression is used when predicting the probability of some input data belonging to certain data. Linear regression wouldn't be good for this, because a linear
line, it is inevitable that some data will be negative, or above 1, which is not a valid probability guess. Though there are a few types, the most common is using some 
data for the x axis (discrete or continuous) and have a correleated binary datapoint.
![Exam_pass_logistic_curve svg](https://github.com/markstanl/Codecademy-Projects/assets/146277800/3f78bba5-afcf-462e-8efb-33950d5bff85)
The formula for an individual input can be represented as
$$P(y=1|X)=\hat{y}=\frac{1}{1+e^{-(\beta_0+\beta_1x_1+\dots+\beta_nx_n)}}$$
This is the probability that the event P is category 1
where $\beta_0$ is the bias term, and $\beta_1, \beta_2, \dots, \beta_n$ are the coefficients for $X_1, X_2, \dots, X_n$

## SciKit-Learn
With Sklearn, this is all relatively easy. 
```Python
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(data_x, data_y)
```
Then, we can figure out the probability of any event. Again, this is really easy because the data_x can include multiple features
```Python
log_odds = model.intercept_ + model.coef_ * data_x 
np.exp(log_odds)/(1+ np.exp(log_odds)) # To make them probability, we apply the following operation
```
The intercept and coeficient come from the logit function, which converts the log line to a linear line, and puts all 0 values at -$\infty$ and 1 values at $\infty$.
This graph has the log odds on the y axis, with the exact same values on the x axis. This is where the line of best fit is calculated. 
Thus, we apply that np probability converter to reverse the logit function we get from the log odds.
Instead of that function, we can easily predict any group with the .predict() method. If we want to predict probabilities, we can use predict_proba()
```Python
print(model.predict(features)) # Ex. output [0, 1, 1, 0, 1]
print(model.predict_proba(features)) # Ex output [0.25, 0.78, 0.98, 0.02]
```
Where the input is a matrix of features and the output is each individual data's prediction of being in the group. 

## Classification Threshold
As we know, the goal of Logistic Regression is to make predictions on if some data belongs in some group, based on the probability likelihood it belongs in that group.
Usually, 0.5 is a good threshold, and the sci-kit default, but this is not always the case. For example, in a court of law, you may want a greater likelihood.

## Confusion Matrix
After creating a model, we need to evaluate it, this can be done using a confusion matrix. We use the standard train data to train the model, and then predict
some test data. This should give us something like Y_pred = [0, 1, 0] and Y_test = [0, 1, 1]. A confusion matrix condenses the correct guess into a matrix, of
True positives, false positives, true negatives, false negatives. This can easily be done with sklearn.

$$\begin{bmatrix}
0{true} & 1{false}\\
0{false} & 1{true}
\end{bmatrix}$$
```Python
from sklearn.metrics import confusion_matrix
confusion_matrix(y_pred, y_actl)
```
These can give us a few good ways to calculate the error. We need multiple because each one individually can be gamed. They are as follows
$$Accuracy = \frac{TP+TN}{TP+FP+TN+FN},  Precision = \frac{TP}{TP+FP},  Recall = \frac{TP}{TP+FN}$$
