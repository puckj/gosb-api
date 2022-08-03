import { ValidateIf, ValidationOptions } from 'class-validator';

export function IsNullable(validationOptions?: ValidationOptions) {
  return ValidateIf(
    (_object: any, value: any) => value !== null,
    validationOptions,
  );
}
