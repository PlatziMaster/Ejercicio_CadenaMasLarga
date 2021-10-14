import unittest
from __init__ import longest_word

class TestStringLenght(unittest.TestCase):

    def test_different_length(self):
        test_list = ["cat", "dog", "turtle", "fish"]
        lng_word = longest_word(test_list)

        self.assertEqual(lng_word, "turtle")

    def test_same_length(self):
        test_list = ["cat", "dog", "frog", "lion"]
        lng_word = longest_word(test_list, 2)

        self.assertIn(lng_word, ["frog", "lion"])
    
