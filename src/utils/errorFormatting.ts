import { ApolloError } from 'apollo-boost';

export default function errorFormatting(error: ApolloError | undefined) {
  const validationErrors: { [key: string]: string } = {};

  if(error) {
    error.graphQLErrors.map(({extensions, message}) => {
      if(extensions && extensions.exception && extensions.exception.validationErrors) {
        extensions.exception.validationErrors.forEach(
          ({ property, constraints}: { property: string; constraints: { [key: string]: string };}) => {
            validationErrors[property] = Object.values(constraints)[0];
          });
      } else {
        validationErrors["message"] = message
      }
    });
  }

  return validationErrors
}