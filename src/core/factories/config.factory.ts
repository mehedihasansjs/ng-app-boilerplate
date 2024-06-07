import { Config, ConfigService } from '@core';

export function configFactory(configService: ConfigService): Config {
  return configService.get();
}
