class returnMessages {
    async success(result:any) {
      const message = {
        statusCode: 200,
        message: ['API_SUCCESS_REQUEST'],
        data: result,
      };
      return message;
    }
    async errorFromDatabase(error:any) {
      const message = {
        statusCode: 500,
        message: ['ERROR_FROM_DATABASE', 'API_SUCCESS_REQUEST'],
        error: error.message,
      };
      return message;
    }
  }
  const returnMessage = new returnMessages();
  export default returnMessage;
  