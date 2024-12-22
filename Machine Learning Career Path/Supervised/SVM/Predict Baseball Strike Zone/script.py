import codecademylib3_seaborn
import matplotlib.pyplot as plt
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from svm_visualization import draw_boundary
from players import aaron_judge, jose_altuve, david_ortiz

def svm_player(player):

  fig, ax = plt.subplots()

  # print(aaron_judge.description.unique())
  # print(aaron_judge.type.unique())

  player['type'] = player['type'].map({'S': 1, 'B': 0})
  player = player.dropna(subset = ['type', 'plate_x', 'plate_z'])

  plt.scatter(x=player.plate_x, y=player.plate_z, c=player.type, cmap=plt.cm.coolwarm, alpha=0.25)

  training_set, validation_set = train_test_split(player, random_state=1)
  classifier = SVC(kernel='rbf', gamma=3, C=1.2)
  classifier.fit(training_set[['plate_x', 'plate_z']], training_set['type'])

  draw_boundary(ax, classifier)
  ax.set_ylim(-2, 6) and ax.set_xlim(-3, 3)
  plt.show()

  score = classifier.score(validation_set[['plate_x', 'plate_z']], validation_set['type'])
  print(score)

svm_player(aaron_judge)
svm_player(jose_altuve)
