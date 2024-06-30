# Machine Learning Fundamentals
Types of Machine Learning

## Supervised Learning
Supervised learning occurs when the data is labeled and given, and the program learns to predict outputs from inputs based on the initial and continuous data. It can be further split into:
- Regression: Predicting a continuous output (house prices of a specific house)
- Classification: Predicting a labeled output (a sentence being positive or negative)

## Unsupervised Learning
Unsupervised learning differs from supervised learning from the data being unlabelled. In supervised learning, the program has a sort of baseline to know what to expect, whereas in unsupervised learning, 
the program itself tries to find a correlation between the data and expected outputs.
Supervised learning is best for learning the correlation between the input data and the output
Unsupervised learning is best at discovering new patterns between unlabeled data

# Feature Engineering
![image](https://github.com/markstanl/Codecademy-Projects/assets/146277800/4495ff05-00d4-4b58-abcb-78d276a690de)

## Centering Data
Data centering is when we rearrange the mean of a dataset to be centered around 0, keeping the differences from the mean. For example, let's have [3,4,5], centering this would give [-1,0,1], 
which keeps track of which is which. In Python, this would look like:
```Python
df = pd.read_csv('some_data.csv')  # Take some csv
some_data = df['some_data']  # Take some series of data
mean_data = some_data.mean()  # Find the mean of the data
centered_data = some_data - mean_data  # Center the data 
```

## Standardization (Z-Score Normalization)
Standardization is when you center the data, and then divide it by the standard deviation, making the standard deviation to become 1, with a mean of 0.
Performing this on all data makes it so that all data is normalized and on the same scale.   
This is important before doing any of the following:
- Before Principal Component Analysis
- Before using any clustering or distance-based algorithm (think KMeans or DBSCAN)
- Before KNN
- Before performing regularization methods like LASSO and Ridge
For each value in the dataset, the following formula can be used to calculate the new value:
- $z = \dfrac{value - mean}{stdev}$

In Python, it would look like this:
```Python
data = data
mean_data = np.mean(data)  # Take the mean
std_dev_data = data.mean()  # Take the standard deviation
# Can use np.mean(data), or df.mean() if it is a dataframe
data_standardized = (data - mean_data) / std_dev_data
```

## Standardization with Sklearn
We will be using Sklearn to do it a little quicker
```Python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
```
First, we convert the data into a NumPy array, and then reshape it into a 2D Array, so something like this
```Python
data_reshaped = np.array(data).reshape(-1,1) 
```
The -1 indicates inferring the length of the dimension of the array, while the 1 means to bring back 1 column.
Then, we use a fit_transform method on the reshaped data to apply the Standardization from earlier
```Python
data_scaled = scaler.fit_transform(data_reshaped_
```
This standardizes the stored data. 


