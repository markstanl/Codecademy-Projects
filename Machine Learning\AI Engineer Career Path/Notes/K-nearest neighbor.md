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
The name k-nearest neighbors is aptly named, the algorithm will find k elements that are closest in distance to some data point. 
