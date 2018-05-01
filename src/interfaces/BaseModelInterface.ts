import { ModelsInterface } from './ModelsInterface';

export interface BaseModelInterface {

  prototype?;
  associete?(models: ModelsInterface): void;
  

}