# Regularization
Regularization in machine learning is set of techniques used to prevent overfitting.
This happens by adding a penalty term to the loss function of a machine learning model.
This means that whatever is predicted by the loss function will "learn" more generalized patterns.
In more technical words, the added term will ensure that overfitting models score slightly worse with their loss.
This further ensures that overfitting models will score worse, exactly what we want.
This is often done through one of two methodss: L1 and L2.
Their regularization terms are as follows:  
$$\sum|b_i|$$  
$$\sum b_1^2$$  
We further note that these aren't just added to the loss function, but multiplied by a constant and then added.


# L1 Regularization
L1 Regularization is also called Lasso Regularization.
Consider now a 2-feature model. The function $|b_1|+|b_2|$ can be confined to some value s, $|b_1|+|b_2| \leq s$ (which is determined by alpha).
This s value is further confined on a "square" on a 2d graph, [-b_1, b_1] to [-b_2, b_2].  
Also note that this is note a graph of the model, but of the coeffecients of a model.
![maxresdefault](https://github.com/user-attachments/assets/e6cb879d-ff16-49e5-a8d5-0844b659e84a)
Consider the red area on the right of the image, that is the square of constraint.
We then look at the point that minimizes the loss function, while being in the regularization parameters, and pick that as our new best model!
