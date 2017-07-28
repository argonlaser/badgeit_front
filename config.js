module.exports =
{
  'development': {
    'FRONT_URL': 'https://53dd4016.ngrok.io',
    'API_BASE_URL': 'http://34.211.102.93',
    'SERVER': {
      'port': 8080,
      'host': 'localhost'
    }
  },
  'production': {
    'FRONT_URL': 'https://badgeit-front.now.sh',
    'API_BASE_URL': 'http://34.211.102.93',
    'SERVER': {
      'port': 8080,
      'host': 'localhost'
    }
  },
  'test': {
    'FRONT_URL': 'https://localhost:8080',
    'API_BASE_URL': 'http://34.211.102.93',
    'SERVER': {
      'port': 8080,
      'host': 'localhost'
    }
  }
}
