import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PerseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    return value;
  }
}
