#Place in src/Wordle/components
def filter_five_letter_words(input_file, output_file):
    with open(input_file, 'r') as f:
        text = f.read()

    words = text.split()
    five_letter_words = [word for word in words if len(word) == 5]

    # Write the filtered words back to the text file
    with open(output_file, 'w') as f:
        f.write('\n'.join(five_letter_words))

input_file = 'valid-wordle-words.txt'  # Replace 'input.txt' with your input file name
output_file = 'wordle-bank2.txt'  # Replace 'output.txt' with your desired output file name
filter_five_letter_words(input_file, output_file)