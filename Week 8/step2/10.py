if __name__ == '__main__':
    students = []
    new_list = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        data = [name, score]
        students.append(data)


students.sort(key = lambda x: x[1])
minvalue = students[0][1]
secondValue = 0
for i in students:
    if(minvalue < i[1]):
        secondValue = i[1]
        break

for i in students:
    if(secondValue == i[1]):
        new_list.append(i[0])

new_list.sort()

for i in new_list:
    print(i)