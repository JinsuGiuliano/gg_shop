# -*- coding: utf-8 -*-
# condicion = True
# print("En que numero estas pensando?")
# entrada = int(input())
# while entrada % 2 != 0:
#     print("Tu numero es impar ¿Puedes añadir otro?")
# print("Tu numero es Par!")

condicion = True
entrada = int(input('En que numero estas pensando? '))
while condicion:
    while entrada < 1000 or entrada > 0:
        if entrada % 2 == 0 :
            entrada = int(input('¡Es un número par! ¿Puedes añadir otro? '))
        elif entrada % 2 = 0 :
            entrada = int(input('¡Es un número impar! ¿Puedes añadir otro? '))
            
        print('el numero no puede ser mayor a 1000 ni menor a 0')
        entrada = 0
