import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovNegdApi implements ICredentialType {
        name = 'N8nDevApisetuGovNegdApi';

        displayName = 'Apisetu Gov Negd API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovNegd/apisetu-gov-negd.svg', dark: 'file:../nodes/ApisetuGovNegd/apisetu-gov-negd.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/negd/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/negd/v3',
                        description: 'The base URL of your Apisetu Gov Negd API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
