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
This may seem a little daunting, but running this algorithm will show you that loss decreases after each step iteration
