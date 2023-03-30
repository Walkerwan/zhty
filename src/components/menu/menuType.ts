export interface MenuType { 
  menuName: string;
  menuLevel: number;
  id: string;
  menuUrl?: string;
  menuIcon?: string;
  urlCode?: string;
  children?: MenuType[]
}