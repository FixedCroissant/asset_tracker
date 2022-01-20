from car import Car

class ElectricCar(Car):
    """Represents aspects of a car, specific to electric vehicles."""

    def __init__(self, make, model, year) -> None:
        """Initializes the attributes of the parent class."""
        super().__init__(make, model, year)
        self.battery = 75

    def describe_battery(self):
        print(f'The electric car has a {self.battery}-kWh battery available to it.')