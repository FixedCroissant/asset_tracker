# hello = "hello world"

# print(hello)

def greet_user(username='james'):
    print(f"Hello there! How are you doing today {username}")

#Run the above function that was created
greet_user("John")   
greet_user("Kassandra")

#create function that uses the first, last and middle name
#but the middle name will be optional
def get_formatted_name(first_name,last_name,middle_name=''):
    #return a formatted name neatly spaced out""
    full_name = f"Hello there {first_name.title()} {middle_name.title()} {last_name.title()}, hope your day is going well!"
    
    return full_name 

#call the above function 
print(get_formatted_name("john","doe","middlesammy"))



    