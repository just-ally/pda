require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("hearts", 3)
    @card2 = Card.new("spades", 7)
    @card_game1 = CardGame.new()
  end

  def test_check_for_ace()
    result = @card_game1.checkforAce(@card1)
    assert_equal( false, result )
  end

  def test_highest_card()
    card = @card_game1.highest_card(@card1, @card2)
    result = card.value
    assert_equal( 7, result )
  end

  def test_cards_total()
    cards = [@card1, @card2]
    result = @card_game1.cards_total(cards)
    assert_equal("You have a total of 10", result)
  end

end
