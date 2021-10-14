from typing import List


def longest_word(words: List[str], coincidence_number: int = 1) -> str:
    if coincidence_number < 1:
        raise Exception("Coincidence number must be greater than 1")
    results = list(filter(lambda word: len(word) == len(max(words, key=len)), words))
    if coincidence_number > len(results):
        raise Exception(f"Coincidence number out of range. Max [{len(results)}]")
    return results[coincidence_number - 1]

