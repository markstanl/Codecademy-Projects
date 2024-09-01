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
