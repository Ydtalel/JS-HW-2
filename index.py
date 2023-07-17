# import sys
# import time

# def find_prime_nums(amount):
#     arr = []
#     prime_number = 2
#     while amount > 0:
#         is_prime = True
#         for i in range(2, prime_number):
#             if prime_number % i == 0:
#                 is_prime = False
#                 break
#         if is_prime:
#             arr.append(prime_number)
#             amount -= 1
#         prime_number += 1
#     return arr

# amount = int(sys.argv[1])
# start_time = time.time()
# prime_numbers = find_prime_nums(amount)
# end_time = time.time()

# execution_time = (end_time - start_time) * 1000
# # print(prime_numbers)
# print(f'Python Execution Time: {execution_time:.3f} ms')

import sys
import time

def find_prime_nums(amount):
    primes = []
    num = 2
    while len(primes) < amount:
        is_prime = True
        for prime in primes:
            if num % prime == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)
        num += 1
    return primes

amount = int(sys.argv[1])
start_time = time.time()
prime_numbers = find_prime_nums(amount)
end_time = time.time()

execution_time = (end_time - start_time) * 1000
# print(prime_numbers)
print(f'Python Execution Time: {execution_time:.3f} ms')
