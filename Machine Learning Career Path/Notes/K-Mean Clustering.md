# Unsupervised Learning
Unsupervised learning differs from supervised learning as the datapoints aren't labelled with what you are trying to predict. Rather, it is used to find patterns between unlabelled points of data. It is important to note that the features, though, are still labelled.

## K-Mean Clustering
![image](https://github.com/user-attachments/assets/f2db9805-cb51-422b-9800-a39d31b5e9f2)  
Consider the visualization. K value indicates how many groups you want to create. This can be optimized. 
The algorithm works by choosing a "centroid", initially this is done at random. Then, for each graphed data point, you calculate the distance and partition each data point to its closest centroid. Then, the centroid of the group is remapped to the mean location of the datapoints in its group. This is run again on the new centroids and runs until the finishing criterion, which is typically until the centroids stop moving.
The function for averaging the centroid is as follows:  
$$C_i = \frac{1}{|N_i|}\sum{}x_i$$

## With sklearn
Again, it is much easier to implement with sklearn.
```Python

from sklearn.cluster import KMeans
data = some_data

model = KMeans(n_clusters=3)
model.fit(data)

labels = model.predict(data)
print(labels)
```
## Scoring
The quality of a K-Means algorithm is computed using "inertia" which is the distance of a sample to the centroid. This average is then computed, and that is the "score" of a model. The lower the inertia, the better fit your model is.

## Choosing K
Choosing K requires a little bit of discretion. It is recommended that you pick the "elbow" at which the rate of decrease starts to slow. This can be visualized with matplotlib
```Python
num_clusters = [num+1 for num in range(8)]

inertias = []

for num in num_clusters:
  model = KMeans(n_clusters=num)
  model.fit(samples)
  inertias.append(model.inertia_)

plt.plot(num_clusters, inertias, '-o')

plt.xlabel('Number of Clusters (k)')
plt.ylabel('Inertia')

plt.show()
```
