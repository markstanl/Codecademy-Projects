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
Then, we can figure out the probability of any event
```Python
log_odds = model.intercept_ + model.coef_ * data_x 
# These predicitions are similar to those of the linear regression, any number.
# To make them probability, we apply the following operation
np.exp(log_odds)/(1+ np.exp(log_odds))
```
This is the function from earlier, this is known as the sigmoid function. 
