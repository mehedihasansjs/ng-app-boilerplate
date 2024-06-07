import { ConfigService } from '@core';

export function baseUrlFactory(configService: ConfigService): string {
  return configService.get().baseURL;
}
