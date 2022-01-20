class Dog:
    """A Simple attempt to model a dog."""

    def __init__(self, name, age) -> None:
        """Initialization of the name and age attributes"""
        self.name = name
        self.age = age

    def sit(self):
        """Simulate the response of having a dog sit."""
        print(f"{self.name} is now sitting")

    def stand(self):
        """Simulate the response of having a dog stand."""
        print(f"{self.name} is now standing")

    def roll_over(self):
        """Simulate the response of having a dog roll over."""
        print(f"{self.name} is now rolling over")