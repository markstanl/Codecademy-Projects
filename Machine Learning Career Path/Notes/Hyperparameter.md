# Hyperparameters
Hyperparameters are parameters in a machine learning model that are tuned before training, that are not effected by training, and effect training.
For example in k-nearest neighbors, the k is an example of a hyperparameter.

# Grid Searching
You can imagine the number of hyperparameters as being a grid of n dimensions (usually not over 3).
sklearn has a grid search method that trains and tests hyperparameters and finds you (hopefully) the best one.
```Python
from sklearn.model_selection import GridSearchCV
model = Model()
parameters = {'p1': [1, 2, 3], 'p2': [4, 5, 6]}
searched = GridSearchCV(model, parameters)
```

# Random Searching
Random searching, as the name implies, randomly looks at some points.
We can now use a uniform distribution instead of just discrete datapoints.
```Python
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import uniform
model = Model()
parameters = {'p1': [1, 2, 3], 'p2': uniform(loc=0, scale=100)}
searched = RandomizedSearchCV(model, parameters)
```
