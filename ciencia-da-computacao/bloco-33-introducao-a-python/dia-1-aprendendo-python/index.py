# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def largestNum (num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

print(largestNum(5,3))

# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def average(numList):
    sum = 0
    for num in numList:
        sum += num
    return sum / len(numList)

print (average([1,2,3,4,5]))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

def printSquare(n):
    for i in range(n):
        print(n * '*')

printSquare(4)

# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

def findLargestName(nameList):
    # return max(nameList, key=len)
    biggestName = nameList[0]
    for name in nameList:
        if len(name) > len(biggestName):
            biggestName = name
    return biggestName

print(findLargestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price

print(paint_costs(92))

# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.

def triangles(sideA, sideB, sideC):
    if sideA + sideB < sideC or sideA + sideC < sideB or sideC + sideB < sideA:
        return 'não é triangulo'
    elif sideA == sideB == sideC:
        return 'triangulo equilatero'
    elif sideA == sideB or sideA == sideC or sideB == sideC:
        return 'triangulo isosceles'
    elif sideA != sideB != sideC:
        return 'triangulo escaleno'

print (triangles(1,2,2))
