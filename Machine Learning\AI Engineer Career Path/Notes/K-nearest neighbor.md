# K-Nearest Neighbor
The K-nearest Neighbor algorithm is a machine learning algorithm that attempts to group up similar data points by calculating the "distance."
This can be visualized in 2D with two features, and in 3D with three. The algorithm can essentially be broken down into these three steps
1. Normalize the data
2. Calculate the 'k' nearest neighbors (via a distance algorithm)
3. Classify the new datapoints

The formula for the Euclidean distance is as follows, a common way of calculating the distance. 
## Euclidean Distance
$$d(x, y) = \sqrt{\sum_{i=1}^{n}(y_i-x_i)^2}$$ where x and y are points of data, and i is y_n is a feature for that datapoint.  
We are literally summing up the squared difference of each point, adding them together, and square-rooting them. This should look familiar
We used to take the distance between points in math.
## Manhattan Distance
Another popular distance formula is the Manhattan Distance Formula, which sums the absolute difference between points of data.
$$d(x,y) = (\sum_{i=1}^{n}|x_i-y_i|)$$ with the same variables
There are other distances, but seeing them all is unnecessary.

# Normalization
This is a step we understand, they had me do min-maxing. This is obviously a necessary step as the range for some numbers might vary heavily, while others don't (a boolean vs say yearly income)

# K-nearest neighbors
The name k-nearest neighbors is aptly named, the algorithm will find k elements that are closest in distance to some data point. This is calculated via calculating the distance to every value, sorting it, and returning the k lowest distances. This is inefficient but can be sped up with some other implementations. An implementation of this could look like:
```Python
def distance(movie1, movie2):
  squared_difference = 0
  for i in range(len(movie1)):
    squared_difference += (movie1[i] - movie2[i]) ** 2
  final_distance = squared_difference ** 0.5
  return final_distance

def find_neighbors(unknown, dataset, k):
  distances = []
  for title in dataset:
    # appends the list with the distance and the title of that distance
    distances.append([distance(dataset[title], unknown), title])
  distances.sort()
  neighbors = distances[:k]
  return neighbors
```
Finally, the algorithm needs to predict what group something should be a part of. In our example, we use a binary classification, and we can just find the more common output. 
As usual, it's good to test our algorithm. It's not built-in, but we can simply use some testing data and compare our prediction algorithm against the actual data.

# Choosing K
Choosing K depends on your goals. If you choose too low, like k=1, you may run into overfitting, which often fails, as a single outlier can easily rule the predictions of a value close to the odd outlier. On the other hand, choosing something like k=number of points in the dataset, would also clearly fail because you just average out the values of the dataset. This is kind of true for any drastically large k as if it is too large, the specific location of the new data point may not matter too much. You typically want to pick some k value that is odd, so there is no way that there is an issue with there being an even amount of guesses in each category. 

# With sklearn
As of always, scikit-learn quickly enables us to put this algorithm into practice. 

```Python
from sklearn.neighbors import KNeighborsClassifier

classifier = KNeighborsClassifier(n_neighbors = 5)
classifier.fit(data_set, data_labels)
guesses = classifier.predit(test_set)
```

# Classification vs Regression
We have thus far been doing KNN with classification, where we just find the most popular classification of the neighbors and pick the most common classifier. As opposed to this, KNN with regression tries to predict a continuous value. This is done by simply computing the average, or, a weighted average, where closer neighbors have a higher affect on the final value. This can be the following:  
$$\frac{\frac{N_{value}}{N_{distance}}}{\frac{1}{N_{distance}}}$$  
where N is the set of neighbors

