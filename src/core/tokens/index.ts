import { InjectionToken } from '@angular/core';
import { Config } from '../models';

export const BASE_URL: InjectionToken<string> = new InjectionToken<string>('BASE_URL');
export const CONFIG: InjectionToken<Config> = new InjectionToken<Config>('CONFIG');
