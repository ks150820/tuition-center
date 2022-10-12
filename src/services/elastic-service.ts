import axios from 'axios';
const ELASTIC_API_END_POINT = 'https://elastic.exampur.xyz/api/v1/service/log';
const ELASTIC_DEFAULT_METHOD = 'post';

interface ElasticServiceParams {
  [key: string]: string | number;
}

let headers = {
  'x-auth-token ':
    'QhmAn5x6UxxWVdc8pkEe77eDAH9U2U9sXjs4kqaxbT2vp5kVmfru5nLL2nEpSQm9dBHLFBeQuEcXmmpzcf34MetTuNXBbaLTuG7pETEGQ2Hp',
};

export const ElasticService = (data: ElasticServiceParams) => {
  const body = {
    user: {
      name: 'Testing',
      email: 'testing@gmail.com',
      mobile: '9000000006',
    },
    device: {
      model: 'testing device',
      make: 'made by exampur',
      os: '2022',
    },
    app: {
      version_name: 'NEW_VERSION',
      version_code: 'NEW_VERSION',
    },
    app_version: 'NEW_VERSION',
    ...data,
  };

  try {
    axios.request({
      url: ELASTIC_API_END_POINT,
      method: ELASTIC_DEFAULT_METHOD,
      data: body,
      headers,
    });
  } catch (err) {
    console.log('api error :', err);
  }
};
