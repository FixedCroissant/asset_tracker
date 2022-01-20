from car import Car

my_car = Car('toyota','camry')

#lets see what the odometer is on the old camry.
odometer = my_car.read_odemeter()

print(odometer)

#update the attribute directly.
#my_car.odometer = 15

#update the odometer through an method.
my_car.update_odometer(25)


print("The new odometer reading is: ")
print(my_car.read_odemeter())