import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { InfoResponse } from '../types';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const info: InfoResponse = {
            author: 'Schmalzl Márton',
            color: '#aa20aa',
            apiversion: '1',
            head: 'caffeine',
            tail: 'bolt',
        };
        return {
            statusCode: 200,
            body: JSON.stringify(info),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
