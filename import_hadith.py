import boto3
import os

# connect to dynamodb
dynamodb = boto3.resource('dynamodb')

# get table name from dynamodb
TABLE_NAME = os.environ.get('TABLE_NAME', 'hadiths')

# Referensi ke tabel
table = dynamodb.Table(TABLE_NAME)

def add_hadith_to_dynamodb(reference, hadith_content, translation):
    hadith_item = {
        'reference': reference,
        'hadith': f'The Messenger of Allah (peace and blessings be upon him) said, "{hadith_content}"',
        'translation': f'Rasulullah (salallahu alaihi wa sallam) bersabda, "{translation}"'
    }

    if 'reference' not in hadith_item or 'hadith' not in hadith_item or 'translation' not in hadith_item:
        raise ValueError('It must have "reference", "hadith", and "translation" attributes!')

    # set item to dynamodb
    try:
        table.put_item(Item=hadith_item)
        print('Item saved successfully: ', hadith_item)
    except Exception as e:
        print('Error saving item: ', e)
        raise

if __name__ == '__main__':
    reference = 'Sunan Ibn Majah 4141'
    ################################################################
    hadith_content = "Whoever among you wakes up physically healthy, feeling safe and secure within himself, with food for the day, it is as if he acquired the whole world."
    ################################################################
    translation = "Barangsiapa di antara kalian bangun dalam keadaan sehat jasmani, merasa aman dan tenteram dalam dirinya, serta memiliki makanan di hari itu, maka seakan-akan dia telah memperoleh seluruh dunia."
    ################################################################
    add_hadith_to_dynamodb(reference, hadith_content, translation)