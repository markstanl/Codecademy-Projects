# Naive Bayes
Naive Bayes is a supervised learning algorithm that employs Bayes theorem to predict whether or not a piece of data. The function can be modelled as  
$$p(y|X)=\frac{p(y)p(X|y)}{p(X)}=(y|x_1, x_2, \cdots, x_n)=\frac{p(y)p(x_1, x_2, \cdots, x_n|y)}{p(x_1, x_2, \cdots, x_n)}$$  
Where $X$ represents the vector space of features. Which simplifies into finally  
$$p(y|x_1, x_2, \cdots, x_n) = \frac{p(y)\prod{n}^{i=1}p(x_i|y)}{p(x_1, x_2, \cdots, x_n)}$$
