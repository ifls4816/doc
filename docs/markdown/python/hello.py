#!/usr/bin/env python3

# print('hello world!')
# print('The quick brown fox', 'jumps over', 'the lazy dog')
# print(100+300)
# name = input('please enter your name: ')
# print('hello,', name)

# 请利用print()输出1024 * 768 = xxx：

# TODO:
# print('1024 * 768 =',0.1*0.3)
# print('I\'m learning\nPython.')
# print(r'\\\t\\')
# print('''line1
# line2
# line3''')
# print(r'''hello,\n
# world''')
# print(True and -1)
# print(1 == 2)
# age = input('输入年龄')
# if int(age) >= 18:
#     print('adult')
# else:
#     print('teenager')
# int a = 123 # a是整数
# print(a)
# a = 'ABC' # a变为字符串
# print(a)
# a = 'ABC'
# b = a
# a = 'XYZ'
# print(9 / 3)
# n = 123
# f = 456.789
# s1 = 'Hello, world'
# s2 = 'Hello, \'Adam\''
# s3 = r'Hello, "Bart"'
# s4 = r'''Hello,
# Bob!'''

# print(f'''
# n:{n}
# f:{f}
# s1:{s1}
# s2:{s2}
# s3:{s3}
# s4:{s4}
# ''')
# x = '中文'
# print(x)
# print('Hi, %s, you have $%d.' % ('Michael', 1000000))
# print('%2d-%02d' % (3.22, 1))
# print('%.2f' % 3.1415926)
# age = 18
# print(f'我的年龄是{age}')
# 小明的成绩从去年的72分提升到了今年的85分，
# 请计算小明成绩提升的百分点，
# 并用字符串格式化显示出'xx.x%'，只保留小数点后1位：
# age = 18.9999
# print(f'{age:.2f}')

# arr = ['a','b','c','d','e','f']
# arr.pop(1)
# print(arr)

# age = input('age: ')
# nage = int(age)
# if nage >= 18:
#   print('ok')
# else:
#   print('no')
# arr = list(range(101))
# print(arr)
# sum = 0
# for item in arr:
#   sum = sum + item 
# print(range(101))
# L = ['Bart', 'Lisa', 'Adam']

# for name in L:
#   print(f'hello, {name}!')
# n = 1
# while n <= 100:
#   if n > 11:
#     break
#   print(n)
#   n = n + 1
# print('END')
# d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
# # print(d['Michael'])
# # print(d.get('Michael1'))
# # print(d['Michael1'])
# # print('Michael1' in d)
# # d.pop('Michael')
# # print(d)
# t = 1
# d[t] = 2
# print(d)
# s1 = {1,2,3,4} # 字面量
# s2 = set([1,2,3,4]) # 和上方一样
# print(s1)
# print(s2)


# # print(s1==s2)
# def my_abs(num):
#     if num >=0:
#       return num
#     else:
#       return -num

# print(my_abs(0))

# def my_test():
  # print(111)

# print(my_test())

# def my_abs(num):
#   if num > 0:
#     return num
#   else:
#     return -num

# def nop(num1, num2):
#   return num1 + num2
#   pass
# print(nop('1' , 1))
# def my_abs (num):
#   if not isinstance(num, (int, float)):
#     raise TypeError('bad operand type')
#   if num >= 0:
#     return num
#   else:
#     return -num

# print(my_abs('1'))
# import math

# def move(x, y, step, angle=0):
#     nx = x + step * math.cos(angle)
#     ny = y - step * math.sin(angle)
#     return nx, ny

# def calc(*nums):
#   print(nums)
#   print(nums[0])

# # nums = [1, 2, 3]
# calc(1,2,3)

def person(name, age, **other):
  print('name:', name, 'age:', age, 'other: ', other)

person('ls', 20, a=1, b=2, c=3)

dic = { 'a': 1, 'b':2 ,'c': 3}
person('zs', 18, **dic)