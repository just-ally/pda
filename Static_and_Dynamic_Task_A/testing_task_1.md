### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

# Card class file needs to be required in to call on Card methods like value

class CardGame

  def checkforAce(card)
    if card.value = 1 #should be ==
      return true
    else
      return false
    end
  end

  #should be def, not dif
  dif highest_card(card1 card2) #missing comma between arguments
  if card1.value > card2.value
    return card #no variable called card - should be card1
  else
    return card2 #incorrect card returned if cards are equal
  end
end
end # extra end

def self.cards_total(cards)
  total # needs to be defined as zero for addition below
  for card in cards
    total += card.value
    return "You have a total of" + total # return statement should be outside the loop
    # total needs converted to string or interpolated
  end
end

#missing end for class
```
