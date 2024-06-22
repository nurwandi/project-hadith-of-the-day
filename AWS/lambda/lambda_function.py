import boto3
import json

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('hadiths')

def lambda_handler(event, context):
    try:
        # Mengambil data dari DynamoDB
        response = table.scan()
        items = response['Items']

        return {
            'statusCode': 200,
            'body': json.dumps(items)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': str(e)
        }
