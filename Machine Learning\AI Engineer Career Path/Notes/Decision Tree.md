# Decision Tree
A decision tree is a tree that follows some sort of logic, that ends in some sort of prediction. It is trained on datasets that have different features, if a certain datapoint ends in a 
different prediction than another, it will split off. These are particularly good with discrete features and predictions.  
![Decision-Trees-modified-1](https://github.com/user-attachments/assets/bb1d1456-a2d8-4877-a315-10de2c1555d2)  
![1_fGX0_gacojVa6-njlCrWZw](https://github.com/user-attachments/assets/16087563-e6d8-4e2c-b863-e944a90e3b45)  

Those are the following examples of trained decision trees. The idea is simple
1. Take a datapoint
2. Follow the logic from the tree
3. The resulting leaf node is the predicted group

## Gini Impurity
Some leaf nodes may classify a lot of different categories, that being, multiple similar data points may end up in a leaf node while being a part of a different group.
A leaf node with exclusively one type of group is much better than one with 50 percent in one, and 50 percent in the other. This is 'scored' by gini impurity.
This can be calculated with the following formula:  
$$1-(p_1^2+p_2^2)$$ or $$1-\sum^{C}p_i^2$$ 
The numbers range from 0, best, to 0.5, worst.

## How Decision Trees are Built
It seems clear that splitting trees at different locations may result in different types of trees, with differing impurities. What is the best way to make a tree?
It is quite simple actually, simply calculate the weighted impurity of splitting on a specific feature, and picking the one that gives the lowest weighted impurity.
Thus, recursively, you can use the formula to figure out what the best split is, and then compute the best following split. 




