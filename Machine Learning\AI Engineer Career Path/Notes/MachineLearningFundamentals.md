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
