require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("hearts", 3)
    @card2 = Card.new("spades", 7)
  end

  def test_check_for_ace()
    result = CardGame.checkforAce(@card1)
    assert_equal( false, result )
  end

  def test_highest_card()
    card = CardGame.highest_card(@card1, @card2)
    result = card.value
    assert_equal( 7, result )
  end

  def test_cards_total()
    cards = [@card1, @card2]
    result = CardGame.cards_total(cards)
    assert_equal("You have a total of 10", result)
  end

end
