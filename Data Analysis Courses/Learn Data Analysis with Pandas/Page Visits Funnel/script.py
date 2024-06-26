import codecademylib3
import pandas as pd

visits = pd.read_csv('visits.csv',
                     parse_dates=[1])
cart = pd.read_csv('cart.csv',
                   parse_dates=[1])
checkout = pd.read_csv('checkout.csv',
                       parse_dates=[1])
purchase = pd.read_csv('purchase.csv',
                       parse_dates=[1])

# print(visits.head())
# print(cart.head())
# print(checkout.head())
# print(purchase.head())

# Funnel Analysis
visits_carts = pd.merge(visits, cart, how='left')
# 2000 rows long
# print(len(visits_carts[visits_carts['cart_time'].isnull()]))
# 1652 rows are null in cart_time
percent_users_visit_to_cart = float(len(visits_carts[visits_carts['cart_time'].isnull()])) / float(len(visits_carts))
# print(str(percent_users_visit_to_cart*100) + '%') 
# 82.6% unconverted customers

cart_checkout = pd.merge(cart, checkout, how='left')

percent_users_cart_to_checkout = \
float(len(cart_checkout[cart_checkout['checkout_time'].isnull()])) /\
float(len(cart_checkout))

# print(str(percent_users_cart_to_checkout*100) + '%') 
# 25.311 unconverted

all_data = visits.merge(cart, how='left')\
.merge(checkout, how='left')\
.merge(purchase, how='left')

# print(all_data)

users_at_checkout = all_data[~all_data['cart_time'].isnull() & all_data['checkout_time'].isnull()]

checkout_left_percentage = float(len(users_at_checkout)) / float(len(all_data))
# print(str(checkout_left_percentage * 100)+'%')
# 5.14% unconverted

users_left_product = all_data[~all_data['checkout_time'].isnull() & all_data['purchase_time'].isnull()]

users_left_percent = float(len(users_left_product)) / float(len(all_data))
# print(str(users_left_percent * 100)+'%')
# 4.2% unconverted

# THe worst step is the last one, moving from the cart to the checkout


# AVerage Time to Purhcase
all_data['time_difference'] = all_data['purchase_time'] - all_data['visit_time']
print(all_data['time_difference'])
print(all_data['time_difference'].mean()) 
# 0 days 00:43:53.360160 Average Conversion Time


