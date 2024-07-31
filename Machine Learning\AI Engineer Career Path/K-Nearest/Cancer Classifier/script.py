import codecademylib3_seaborn
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import matplotlib.pyplot as plt

breast_cancer_data = load_breast_cancer()

(training_data, validation_data, training_labels, validation_labels) = train_test_split(breast_cancer_data.data, breast_cancer_data.target, test_size = 0.2, random_state = 100)

# print(len(training_labels), len(training_data))

# FIND THE BEST K: 23 SEEMS BEST

# max = 0
# for i in range(1, 100):
#   classifier = KNeighborsClassifier(n_neighbors = i)
#   classifier.fit(training_data, training_labels)
#   score = classifier.score(validation_data, validation_labels)
#   if score > max:
#     max = score
#     print(i)

k_list = range(1, 101)
score_list = []
for i in k_list:
  classifier = KNeighborsClassifier(n_neighbors = i)
  classifier.fit(training_data, training_labels)
  score = classifier.score(validation_data, validation_labels)
  score_list.append(score)

plt.plot(k_list, score_list)
plt.xlabel('K')
plt.ylabel("Validation Accuracy")
plt.title('Breast Cancer Classifier Accuracy')
plt.show()

best_classifier = KNeighborsClassifier(n_neighbors = 23)
best_classifier.fit(training_data, training_labels)
