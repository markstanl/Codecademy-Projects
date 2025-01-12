# Random Forest
Random forest is an ensemble machine learning technique. 
The basic idea is to combine the power of multiple decision trees, who each make their classification, and the most popular classification is picked as the final predicition.

# Bootstrapping
The algorithm for making a decision tree is deterministic; given the same training set each decision tree made will be the exact same.
We employ a technique called `bagging`.
In essence, you split up the training set to n more training sets of m rows, which are selected at random for a decision tree.
They are sampled with replacement, meaning that the same row can be used for a tree in the forest.
