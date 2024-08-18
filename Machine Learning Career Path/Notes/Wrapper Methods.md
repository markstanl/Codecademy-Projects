# Wrapper Methods
Wrapper methods automate the process of choosing features, and is a feature selection technique. Instead of manually deciding what would be a good and bad feature, it decides so algorithmically. 
## Sequential Forward Selection
1. Begin with an empty set of features
2. Iteratively add features, one at a time
3. Train and evalutalte the model
4. Continue until some stopping criterion, such as too many features, too low of performance, or others

This is an easy to understand algorithm, which makes it easy to get a good selection of features

## Sequential Backward Elimination
1. Start with all availible features
2. Iteratively remove the worst feature
3. Train and evalutate the model
4. Stop once the criterion is met

This one seems better to a newbie like me. It seems much easier to remove the worst features, rather than guess which one will be best

## Floating
The floating variants of Forward Selection and Backward Eliminiation, simply add a single step. 
### Sequential Forward Floating Select
On your first iteration, start with an empty set and choose one feature. This is the iterative process
1. Starting set {A, B, C}
2. Add a new feature {A, B, C, D}
3. Check to see if removing any feature (other than D) gives us a better score {A, B, C, D} = 0.8, {A, C, D} = 0.9: pick A, C, D
4. Repeat on the new set {A, C, D}
### Sequential Backward Floating Selection
This consists of the same process, but considers if adding any older features improves the model.
On your first iteration, include all features
1. Starting set {A, B, C, D}
2. Remove the worst performing feature (Say D)
3. Check if adding any removed feature (other than D) will improve the model
4. Repeat on that feature set

## Recursive Feature Elimination
The process is essentially the same as backward selection, except it is judged based on the univariate coefficients, instead of the overall score of the model without that feature. So, for example, when removing something from {A, B, C, D}, RFE will just score each feature and remove the worst one, while SBS will score all 4 subsets, and pick the best out of that. 

# Implementation with mlxtend and sklearn
mltend eases up the process quite a bit.
```Python
from mlxtend.feature_selection import SequentialFeatureSelector as SFS
# Set up SFS parameters
sfs = SFS(lr,
           k_features=3, # number of features to select
           forward=True, # included parameters for selecting which technique
           floating=False,
           scoring='accuracy',
           cv=0)
# Fit SFS to our features X and outcome y   
sfs.fit(X, y)
print(sfs.subsets_) # prints the fitting after n iterations
plot_sfs(sfs.get_metric_dict())
plt.show() # graphs the performance against the number of features
```
It is important to note X contains all of the features, and y is the predictor. 
### Recursive Feature Elimination
For recursive feature elimination, we can just use sklearn.
```Python
from sklearn.feature_selection import RFE

model = ModelConstructor()
rfe = RFE(model, n_features_to_select=3)
rfe.fit(X, y)
```


