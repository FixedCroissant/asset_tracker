class Car:
    """An attempt to model a car."""

    def __init__(self,make,model,year) -> None:
        self.make = make
        self.model = model
        self.year =  year
        self.odometer = 0

    def read_odemeter(self):
        """Read the odometer"""
        print(f"The odometer is: {self.odometer} miles")

    def update_odometer(self,new_odometer_reading):
        """Update the odometer method"""
        self.odometer = new_odometer_reading

    def get_descriptive_name(self):
        print(f"{self.make} {self.model} {self.year}")    