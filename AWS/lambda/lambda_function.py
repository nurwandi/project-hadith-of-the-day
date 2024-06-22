import boto3
import json

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('hadiths')

def lambda_handler(event, context):
    try:
        # take data from dynamodb
        response = table.scan()
        items = response['Items']
        
        # add CORS header
        headers = {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        }
        
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps(items)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': str(e)
        }
