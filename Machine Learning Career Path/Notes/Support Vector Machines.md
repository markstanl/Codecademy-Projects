A Support Vector Machine is a supervised model that sets a line/plane that acts as the decision boundary between clusters. It is mainly used for binary classification.
We can clearly see that given different groups of clusters, there can be many possible lines/planes that define the clusters. In general, we want the decision boundary to be as far away from, and as equally distant from the training data as possible. As the name of this model implies, we will be using vectors to figure out what the best decision boundary is.
"Support Vectors" are defined as the vectors closest to the decision boundary, as a matter of fact they determine the boundary. Furthermore, instead of datapoints, we imagine the datapoints as vectors from the origin.
The distance between support vectors and the decision boundary is called the margin. As we noted, we want this margin to be maximized and equalized on both sides.
# With Sk-Learn
```Python
from sklearn.svm import SVC
from graph import points, labels

classifier = SVC(kernel = 'linear')
classifier.fit(points, labels)
predict = classifier.predict([[3, 4], [6, 7]])
```
Pretty simple eh?

# Error and Outliers
It is easy to imagine some outliers could end up in the margins. This could significantly affect the decision boundary. Thus, the SVM machine's have a parameter C. If C is large, then there is a hard line and no outliers. If it is low, on the other hand, there is an error margin, which allows some datapoints to fall in the margin.

# Non-linearity
Up until now, we have been only considering linear sets with our code blocks. But, what if that doesn't well represent the data? There are different types of kernels that you can use such as poly, which uses a polynomial. The polynomial kernel interestingly projects a 2D graph onto a 3D one. For example, in 2D, we have
$$(x, y) \rightarrow (\sqrt{2}xy, x^2, y^2)$$

# Radial Basis
This is the default and most common kernel for the SVM. This (allegedly) transforms the data from the 2D plane into a plane of infinite dimensions. The details have been left out from Codecademy.
The core idea, though, is that it can draw complex decision boundaries. The gamma parameter can be used to tune the model's sensitivity to data.

```Python
from data import points, labels
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC

training_data, validation_data, training_labels, validation_labels = train_test_split(points, labels, train_size = 0.8, test_size = 0.2, random_state = 100)

classifier = SVC(kernel="rbf", gamma=2)
classifier.fit(training_data, training_labels)
print(classifier.score(validation_data, validation_labels)) // 0.88
```
The data from the training is complex, and looks like a tetris block. This is some darn good accuraccy 
