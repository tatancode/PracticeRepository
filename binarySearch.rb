# This program performs binary search to find an element on a list with n elements

# Define function with two parameters - a list and the element to search
def binarySearch(arr,item)
    # Declare and initialize two variables to store limits
    low = 0
    high = arr.length - 1
    iterations = 1
    # Loop while we haven't narrowed it down to one element
    while low <= high do 
        # Declare and initialize a mid point, and a guess variable
        mid = (low + high) / 2
        guess = arr[mid] 
        
        puts ("# of iterations:#{iterations}")
        # Check if guess is equal to item. If so return mid
        if guess == item 
            return guess
        end
        # Check if guess is greater than item. If so, update the value of high 
        if guess > item 
            high = mid - 1
        # else update the value of low
        else
            low = mid + 1
        end
        iterations += 1
    end
    return None   
end     

array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30 ]
puts binarySearch(array,3)