# PCA
PCA is an unsupervised algorithm and dimension-reducing method that does this by converting multiple features into a single feature (called Principal Components) with the same variance
This is mathematically done by the following process
1. Calculate the Covariance Matrix
2. Calculate Eigenvalues and Eigenvectors
3. Transform the data with the values

![image](https://github.com/user-attachments/assets/a2150179-9ac5-4978-931d-05fcfa3bfc74)
This is a visualization, this is how the features get compressed into a single Principal Component. PCA produces an equal amount of PCs as to the number of dimensions, that store all of the necessary data of the variance.

# Python
This is made quite easy with python

```Python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Assume some_data is your dataset as a DataFrame
data = some_data

# Step 1: Standardize the data (if not already standardized)
standardized_data = (data - data.mean()) / data.std()

# Step 2: Calculate the covariance matrix (or correlation matrix if standardized)
covariance_matrix = np.cov(standardized_data.T)

# Step 3: Calculate the eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(covariance_matrix)

# Step 4: Sort the eigenvalues and eigenvectors
sorted_indices = np.argsort(eigenvalues)[::-1]
sorted_eigenvalues = eigenvalues[sorted_indices]
sorted_eigenvectors = eigenvectors[:, sorted_indices]

# Step 5: Calculate the proportion of variance explained
info_prop = sorted_eigenvalues / sorted_eigenvalues.sum()

# Step 6: Visualize the Scree Plot
plt.plot(np.arange(1, len(info_prop) + 1), info_prop, 'bo-', linewidth=2)
plt.title('Scree Plot')
plt.xlabel('Principal Components')
plt.xticks(np.arange(1, len(info_prop) + 1))
plt.ylabel('Percent of Variance Explained')
plt.show()

# Step 7: Find the cumulative sum of the proportions
cum_info_prop = np.cumsum(info_prop)

# Step 8: Plot the cumulative proportions array
plt.plot(cum_info_prop, 'bo-', linewidth=2)
plt.hlines(y=.95, xmin=0, xmax=len(cum_info_prop), colors='r', linestyles='--')
plt.title('Cumulative Variance Explained')
plt.xlabel('Principal Components')
plt.xticks(np.arange(1, len(info_prop) + 1))
plt.ylabel('Cumulative Proportion of Variance Explained')
plt.show()

# Step 9: Select the number of components to retain (e.g., those that explain 95% of variance)
num_components = np.argmax(cum_info_prop >= 0.95) + 1

# Step 10: Transform the data
# Select the first `num_components` eigenvectors
selected_eigenvectors = sorted_eigenvectors[:, :num_components]

# Project the data onto the selected principal components
transformed_data = np.dot(standardized_data, selected_eigenvectors)

# transformed_data now contains the data in the reduced-dimensionality space

```
In this code, we start by calculating the eigenvalues and eigenvectors. Then, we sort and graph the data by how much they "Explain" the variance in the data.
## With sklearn
```Python
import numpy as np
import pandas as pd
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Example dataset with 16 features and 100 samples
np.random.seed(42)
data = pd.DataFrame(np.random.randn(100, 16), columns=[f'Feature_{i+1}' for i in range(16)])

# Standardizing the features
scaler = StandardScaler()
scaled_data = scaler.fit_transform(data)

# Performing PCA
pca = PCA(n_components=16)
principal_components = pca.fit_transform(scaled_data)

# Explained variance
explained_variance = pca.explained_variance_ratio_

# Scree plot
plt.figure(figsize=(8, 6))
plt.plot(np.arange(1, len(explained_variance) + 1), explained_variance, 'bo-', linewidth=2)
plt.title('Scree Plot')
plt.xlabel('Principal Components')
plt.ylabel('Variance Explained')
plt.show()

# Cumulative variance explained
cumulative_variance = np.cumsum(explained_variance)

plt.figure(figsize=(8, 6))
plt.plot(np.arange(1, len(cumulative_variance) + 1), cumulative_variance, 'bo-', linewidth=2)
plt.hlines(y=0.95, xmin=0, xmax=16, colors='r', linestyles='dashed')
plt.title('Cumulative Variance Explained')
plt.xlabel('Principal Components')
plt.ylabel('Cumulative Variance Explained')
plt.show()

# Example: Projecting data onto the first two principal components
pc_data = pd.DataFrame(principal_components[:, :2], columns=['PC1', 'PC2'])
print(pc_data.head())

```

