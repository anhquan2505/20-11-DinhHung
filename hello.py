
def is_prime(num):
  
  if num < 2:  
    return False
  for i in range(2, int(num**(1/2))+1):
    if num % i == 0: 
      return False  
  return True


# get input
print('Input number: ', end='')
num = int(input())

# print result
print(f'First {num} prime(s): ', end='')
count = 0
i = 2
while count < num:
  if is_prime(i):
    print(i, end=' ')
    count += 1
  i += 1