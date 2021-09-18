export interface MenuOptionObject {
  optionPath: string;
  optionLabel: string;
}

interface ModuleImgData {
  default: string;
}

export interface ImgData {
  slug: string;
  module: ModuleImgData;
}

export interface MapProjectObject {
  projectTitle: string;
  slug: string;
}
