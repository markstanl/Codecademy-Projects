# PyTorch and Tensors
Tensors are a mathematical structure that stores data. Matrices and vectors are types of tensors. Tensors store n-dimensional data, so they are 2d and 1d respectively. A 3-Tensor could be imagined as a group of matrices.

## Tensors with PyTorch
Tensors are easily constructed with common data structures already in python. Like regular lists, arrays, nparrays, or dataframes.
```Python
import torch
import pandas as pd

some_data = [1, 2, 3]
some_dataframe = pd.read_csv('some_csv')

list_tensor = torch.tensor(some_data, torch.int)
df_tensor = torch.tensor(some_dataframe.values, torch.float)
df_column = torch.tensor(some_dataframe[['some_column']], torch.float32)
```

## Linear Regression and Neural Network Visualization
![linear](https://github.com/user-attachments/assets/74af7826-78ec-4717-9775-d9d7c6c78922)
As we recall, linear regression can simply be visualized as the sum of both the product of features and their respective weights, and the bias. Neural networks are simply columns of neurons, each attaching to some amount of the next row of neurons, each that passes their input value through a weight, and to the next neuron. In the context of linear regression, there is no hidden layer. The entire network is just the input layers, being the features and the bias, which each are multiplied by their weight, and summed together to get the final value.

## Activation Functions
Activation functions are simple functions that are applied during the neural network to affect the output. They are typically applied after their inputs have been summed, but before it sends inputs to the next nodes. The entire purpose of this is to add non-linearity, because, without activation functions, we are just summing up values, which is just linear values.
The sigmoid function from logistic regression could be thought of as an activation function. However, in a modern context, the sigmoid function is kind of out of date. The ReLU function is more common, which is simply represented as $$ReLU=max(0, x)$$. 

## Building a Neural Network
```Python
class NN_Regression(nn.Module):
    def __init__(self):
        super(NN_Regression, self).__init__()
        # initialize layers
        self.layer1 = nn.Linear(3, 16)
        self.layer2 = nn.Linear(16, 8) 
        self.layer3 = nn.Linear(8, 4)
        self.layer4 = nn.Linear(4, 1) 
        
        # initialize activation functions
        self.relu = nn.ReLU()

    def forward(self, x):
        # define the forward pass
        x = self.layer1(x)
        # this syntax takes a tensor, and applies the weights of passing it through that layer
        x = self.relu(x)
        # this applies relu to the output of that pass
        x = self.layer2(x)
        x = self.relu(x)
        x = self.layer3(x)
        x = self.relu(x)
        x = self.layer4(x)
        return x
```
The following is an example of a nueral network class. The forward pass function acts takes in a tensor, and returns a tensor. 
## Calculating Loss
As with all machine learning, we need a way to calculate how badly a network does, as a means to train it to be better. This is done with mean squared, which finds the difference between the actual and expected, and squares it. The function is as follows  
$$MSE=\frac{1}{n}\sum_{i=1}^n(y_i-\hat{y}_i)^2$$  
Where $n$ is the number of predictions where loss is being calculated, and $i$ is the number of features. This is easily implemented with torch
```Python
import torch
import torch.nn as nn

loss = nn.MSELoss()
predictions = torch.tensor([500,2000],dtype=torch.float)
y = torch.tensor([1000,1500],dtype=torch.float)
print(loss(predictions,y))
```

## Optimizer Algorithm and Gradient Descent
The loss function tells us how bad a prediction is, but to actually train the model, we need to interpret it and change the values. Gradient descent is the exact same process as in linear regression. 
With torch we can use an optimizer called Adam
```Python
import torch.optim as optim
optimizer = optim.Adam(model.parameters(), lr=0.01)

# compute the loss 
MSE = loss(predictions,y)
# backward pass to determine "downward" direction
MSE.backward()
# apply the optimizer to update weights and biases
optimizer.step()
```

