# K-Nearest Neighbor
The K-nearest Neighbor algorithm is a machine learning algorithm that attempts to group up similar data points by calculating the "distance."
This can be visualized in 2D with two features, and in 3D with three. The formula for the Euclidean distance is as follows  
## Euclidean Distance
$$d(x, y) = \sqrt{\sum_{i=1}^{n}(y_i-x_i)^2}$$ where x and y are points of data, and i is y_n is a feature for that datapoint.  
We are literally summing up the squared difference of each point, adding them together, and square-rooting them. This should look familiar
We used to take the distance between points in math.
## Manhattan Distance
Another popular distance formula is the Manhattan Distance Formula, which sums the absolute difference between points of data.
$$d(x,y) = (\sum_{i=1}^{n}|x_i-y_i|)$$ with the same variables
There are other distances, but seeing them all is unnecessary.
