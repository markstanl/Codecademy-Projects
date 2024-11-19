# Naive Bayes
Naive Bayes is a supervised learning algorithm that employs Bayes theorem to predict whether or not a piece of data. The function can be modelled as  
$$p(y|X)=\frac{p(y)p(X|y)}{p(X)}=(y|x_1, x_2, \cdots, x_n)=\frac{p(y)p(x_1, x_2, \cdots, x_n|y)}{p(x_1, x_2, \cdots, x_n)}$$  
Where $X$ represents the vector space of features, and $y$ is a specific datapoint. Which simplifies into finally  
$$p(y|x_1, x_2, \cdots, x_n) = \frac{p(y)\prod{n}^{i=1}p(x_i|y)}{p(x_1, x_2, \cdots, x_n)}=\frac{p(y)p(x_1|y)p(x_2|y)\cdots p(x_n|y}{p(x_1, x_2, \cdots, x_n)}$$

This is the essential function behind the Naive Bayes Classifier ML Model. Given the only complicated aspect of this algorithm is computing the probabilities. This can easily be done, though, by creating some function to determine this. Consider the following datasets.

```Python
# Sample dataset
X = np.array([[1, 1], [2, 2], [1, 0], [2, 1], [0, 1]])  # Features
y = np.array([0, 0, 1, 1, 1])  # Labels

# Split data (manually for simplicity)
X_train, X_test = X[:4], X[4:]
y_train, y_test = y[:4], y[4:]

# --- 1. Calculate Prior Probabilities ---
def calculate_priors(y):
    classes, counts = np.unique(y, return_counts=True)
    priors = {cls: count / len(y) for cls, count in zip(classes, counts)}
    return priors

# --- 2. Calculate Likelihood ---
def calculate_likelihoods(X, y):
    feature_likelihoods = defaultdict(lambda: defaultdict(list))
    classes = np.unique(y)
    for cls in classes:
        indices = np.where(y == cls)
        X_cls = X[indices]
        for feature_idx in range(X.shape[1]):
            feature_likelihoods[cls][feature_idx] = {
                value: (X_cls[:, feature_idx] == value).sum() / len(X_cls)
                for value in np.unique(X[:, feature_idx])
            }
    return feature_likelihoods

```

# With SkLearn
Here is how you implement this with sklearn

```Python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score, classification_report

# Load the dataset
data = load_iris()
X = data.data  # Features
y = data.target  # Labels

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Initialize and train the Naive Bayes classifier
model = GaussianNB()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")
print("Classification Report:")
print(classification_report(y_test, y_pred))

```







