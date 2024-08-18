# Linear Regression
Linear Regression is a very simple form of regression. ML is used to find some function for some real-world output. Consider some dataset graphed, linear regression is simply trying to find the line of best fit on that graph, using the old data. We are trying to find the best slope and intercept in a dataset to find the best line $y=mx+b$
## Loss
![image](https://github.com/markstanl/Codecademy-Projects/assets/146277800/2a5d9fb3-03c2-4256-8131-0722df7d18ff)
For an algorithm to make the line of best fit, we need to know how good a line of best fit is. The loss of a point is defined as the square distance away from the line the function is on the y-axis.  
$$\hat{y}=Xw+b$$  
$$l^{(i)}(w,b)=\dfrac{1}{2}(\hat{y}^{(i)}-y^{(i)})^2$$  
Where the entire function is a function of w (the slope) and b (the intercept), y hat is the expected value of y when put through the regression function, and y is the actual value, all of the ith value. Note, that the 1/2 is not used with Codecademy, it is a simple constant to reduce the range. 
The total loss is the total loss for every index i in the dataset, and this formula can represent the average loss.
$$L(w, b) = \frac{1}{n} \sum_{i=1}^{n} l^{(i)} (w, b) = \frac{1}{n} \sum_{i=1}^{n} \frac{1}{2} \left( w^\top x^{(i)} + b - y^{(i)} \right)^2$$  
The goal of a linear regression model is to find some w and b such that the average loss is as minimal as possible.

## Gradient Descent
The goal of gradient descent is to iteratively find the best approximation of what m and b should be, by minimizing loss. Here are the steps.
1. Initialize m and b with some random values.
2. Calculate the average loss using the formula before
3. Use the following formula to calculate the gradient for m and b  
$$\frac{∂L}{∂b} = -\frac{2}{N}\sum_{i=1}^{N}(y_i-(mx_i+b))$$  
$$\frac{∂L}{∂m} = -\frac{2}{N}\sum_{i=1}^{N}x_i(y_i-(mx_i+b))$$
5. Update the values based on the learning rate  
  $$b_{old} = b_{new} - (\alpha)\frac{∂L}{∂b}$$  
$$m_{old} = m_{new} - (\alpha)\frac{∂L}{∂m}$$
7. Repeat
8.



Here is an example in Python
```Python
# The function to get the gradient at b
def get_gradient_at_b(x, y, b, m) -> float:
  N = len(x)
  diff = 0
  for i in range(N):
    x_val = x[i]
    y_val = y[i]
    diff += (y_val - ((m * x_val) + b))
  b_gradient = -(2/N) * diff  
  return b_gradient

# The gradient of m
def get_gradient_at_m(x, y, b, m)-> float:
  N = len(x)
  diff = 0
  for i in range(N):
      x_val = x[i]
      y_val = y[i]
      diff += x_val * (y_val - ((m * x_val) + b))
  m_gradient = -(2/N) * diff  
  return m_gradient

# The step gradient function
def step_gradient(x: list, y: list, b_current: float, m_current: float, learning_rate: float = 0.01):
  b_gradient = get_gradient_at_b(x, y, b_current, m_current)
  m_gradient = get_gradient_at_m(x, y, b_current, m_current)
  # Simply get the gradients at the points

  b = b_current - (learning_rate * b_gradient)
  m = m_current - (learning_rate * m_gradient)
  # and apply them. The gradient tells us what direction will be of greatest increase, so we go the opposite
  return [b, m]

months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
revenue = [52, 74, 79, 95, 115, 110, 129, 126, 147, 146, 156, 184]

# Function to calculate average loss for visualization that the algorithm is working
def calculate_loss(x: list, y: list, b_current: float, m_current: float) -> float:
    total_loss = 0
    n = len(x)  # Number of data points
    for i in range(n):
        # Calculate the predicted value
        y_pred = m_current * x[i] + b_current       
        # Calculate the squared error
        i_loss = 0.5 * (y_pred - y[i]) ** 2   
        # Sum up the squared errors
        total_loss += i_loss  
    # Calculate the mean squared error
    mean_loss = total_loss / n
    return mean_loss

b = 0
m = 0

# running this algorithm works
b, m = step_gradient(months, revenue, b, m)
print(b, m)
print(calculate_loss(months, revenue, b, m))\
```
This may seem a little daunting, but running this algorithm will show you that loss decreases after each step iteration. Keep in mind, that this only gives a good estimation of what the "best" values for m and b should be.
Here is a visualization of what happens on a 3d graph using this algorithm.
![image](https://github.com/markstanl/Codecademy-Projects/assets/146277800/589ef3d9-bd1e-4bee-acb6-5a5a990fba43)


## Learning Rate
The learning rate is that constant multiplied by the gradient to move through the descent. It is possible to calculate the derivative and find the specific minima, but in practice, especially with larger models and datasets, calculating such will be costly and less efficient, so we need to know how to find a good learning rate. This is what could happen if the learning rate is too large 
![image](https://github.com/markstanl/Codecademy-Projects/assets/146277800/de37c5d3-0cb8-4fcf-bb96-58184ca0d0d6)

## Putting it All Together
Using all of the algorithms from before, using gradient descent gives us a good way of finding really good estimations of what the best m and b are.

## With Scikit-Learn
```Python
from sklearn.linear_model import LinearRegression
line_fitter = LinearRegression()
line_fitter.fit(X, y)
```
Using Scikit-Learn speeds up these algorithms by quite a bit. This single line of code has a number of iterations, and a learning rate built in, which are editable for optimization.

# Multiple Linear Regression
It is often the case that linear regression will not just simply be used on two variables, but rather a lot more. I will be summarizing the math behind multiple linear regression. Initially, the y value of a dataset can be estimated using a similar fashion, of data from set x

$$\hat{y}=\sum_{x\in{X}}x_i\beta_i=\beta_o+\beta_1x_1+\beta_2x_2+\ldots+\beta_nx_n$$
Loss is still calculated the same way, the squared difference of the actual and expected. Gradient descent can still be used to calculate these features.

## Training Set vs. Test Set
It is important to save a portion of your data to be used as the "Test Set." The point of this data is to check, at the very end, how good your training model did. It is good to keep about 20% of your dataset to be used as the test set, and 80% to be the training set. This can as always be done with scikit-learn.
```Python
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, train_size=0.8, test_size=0.2)
```

## Using SciKit-Learn
Multiple linear regression, though tricky to do math on, is quite easy to implement with SciKit-Learn. Consider the following example:
```Python
import codecademylib3_seaborn
import matplotlib.pyplot as plt
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression


streeteasy = pd.read_csv("https://raw.githubusercontent.com/sonnynomnom/Codecademy-Machine-Learning-Fundamentals/master/StreetEasy/manhattan.csv")

df = pd.DataFrame(streeteasy)

x = df[['bedrooms', 'bathrooms', 'size_sqft', 'min_to_subway', 'floor', 'building_age_yrs', 'no_fee', 'has_roofdeck', 'has_washer_dryer', 'has_doorman', 'has_elevator', 'has_dishwasher', 'has_patio', 'has_gym']]

y = df[['rent']]

x_train, x_test, y_train, y_test = train_test_split(x, y, train_size = 0.8, test_size = 0.2, random_state=6)

# Add the code here:

mlr = LinearRegression()
mlr.fit(x_train, y_train)

y_predict = mlr.predict(x_train)

sonny_apartment = [[1, 1, 620, 16, 1, 98, 1, 0, 1, 0, 0, 1, 1, 0]]

predict = mlr.predict(sonny_apartment)

print("Predicted rent: $%.2f" % predict)
```
First, get the pandas Dataframes, y should only be a single variable, but X can be as many as you want. And then, just train it! You can make a dummy example to check the predictions, and test all of the testing data. It is beneficial to graph the difference between the predicted and actual values on the test dataset (and use linear regression on the two variable graph to see how well you did).   
![image](https://github.com/markstanl/Codecademy-Projects/assets/146277800/6f37f68c-a18f-4127-b07c-17cb558fcc79)
Furthermore, you can score your dataset with the following commands. You typically want high, and similar scores between 0 and 1.
```Python
linear_regression = LinearRegression()
linear_regression.fit(x_train, y_train)

train_score = linear_regression.score(x_train, y_train)
test_score = linear_regression.score(x_test, y_test)
```

## Preprocessing Multiple Datapoints
It is important to only use data that has an obvious linear correlation. You can do this by graphing the two variables, and seeing if there is an strong correlation between the variables. After getting a dataframe, you can perform the following operations to see the correlation between variables.
```Python
data = pd.read_csv("data.csv")

plt.scatter(df[['possible_x_variable']], df[['y_variable']], alpha=0.4)
plt.show()
```
