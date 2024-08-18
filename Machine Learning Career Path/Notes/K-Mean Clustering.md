# Unsupervised Learning
Unsupervised learning differs from supervised learning as the datapoints aren't labelled with what you are trying to predict. Rather, it is used to find patterns between unlabelled points of data. It is important to note that the features, though, are still labelled.

## K-Mean Clustering
![image](https://github.com/user-attachments/assets/f2db9805-cb51-422b-9800-a39d31b5e9f2)  
Consider the visualization. K value indicates how many groups you want to create. This can be optimized. 
The algorithm works by choosing a "centroid", initially this is done at random. Then, for each graphed data point, you calculate the distance and partition each data point to its closest centroid. Then, the centroid of the group is remapped to the mean location of the datapoints in its group. This is run again on the new centroids and runs until the finishing criterion, which is typically until the centroids stop moving.
The function for averaging the centroid is as follows:  
$$C_i = \frac{1}{|N_i|}\sum{}x_i$$

